import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import moment from 'moment';


const Addtraining = (props) => {
   
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        person: '',
        date: '',
        activity: '',
        duration: '',
        customer: '',
        sdate: ''
    });

    const handleClickOpen = () => {
        setTraining({...training, sdate: moment().format('YYYY-MM-DDTHH:MM'), person: props.customer.firstname + ' ' + props.customer.lastname, customer: props.customer.links[0].href})
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    }
    const dateChange = (event) => {
        let newDate = moment(event.target.value).format();
        setTraining({...training, sdate: event.target.value, date: newDate})
    }

    const newTraining = () => {
        props.addTraining(training);
        handleClose();
    };

    return (
        <div>
        <Button size="small" variant="contained" color="secondary" onClick={handleClickOpen}>
        Lisää uusi treeni
      </Button>
        <Dialog maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Uusi treeni</DialogTitle>
            <DialogContent>
            <TextField
                margin="dense"
                value={training.person}
                label="Asiakas"
                fullWidth
                className="text"
                onChange={e => handleInputChange(e)}
                color="secondary"
            />
            <TextField
                autoFocus   
                label="Alkaa"
                name="date"
                type="datetime-local"
                value={training.sdate}
                InputLabelProps={{shrink: true}}
                onChange={event => dateChange(event)}
                className="text"
                color="secondary"
            />
            <TextField
                margin="dense"
                name="activity"
                value={training.activity}
                label="Aktiviteetti"
                fullWidth
                className="text"
                onChange={e => handleInputChange(e)}
                color="secondary"
            />
           
                <InputLabel>Kesto</InputLabel>
                    <Select
                        value={training.duration}
                        name="duration"
                        onChange={e => handleInputChange(e)}
                        color="secondary"
                        
                        >
                        <MenuItem value={'15'}>15</MenuItem>
                        <MenuItem value={'30'}>30</MenuItem>
                        <MenuItem value={'45'}>45</MenuItem>
                        <MenuItem value={'60'}>60</MenuItem>
                    </Select>
            
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="secondary">
                Peruuta
            </Button>
            <Button onClick={newTraining} color="secondary">Tallenna</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    };

export default Addtraining;