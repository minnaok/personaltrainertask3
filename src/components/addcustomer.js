import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addcustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', 
        email: '', phone: '', streetaddress: '', postcode: '',
        city: ''
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    setCustomer({...customer, [event.target.name]: event.target.value})

  }

  const addCustomer = () => {
      props.saveCustomer(customer);
      handleClose();
  }


    return (
       <div >
      <Button size="small" variant="contained" color="secondary" onClick={handleClickOpen}>
        Lisää uusi asiakas
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Uusi asiakas</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.firstname}
            label="Etunimi"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="text"
          />
           <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            label="Sukunimi"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="text"
          />
          <TextField
            margin="dense"
            name="email"
            value={customer.email}
            label="Sähköpostiosoite"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="text"
          />
          <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            label="Puhelinnumero"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="number"
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            label="Osoite"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="text"
          />
          <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            label="Postinumero"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="number"
          />
           <TextField
            margin="dense"
            name="city"
            value={customer.city}
            label="Kaupunki"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Peruuta
          </Button>
          <Button onClick={addCustomer} color="secondary">
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    );
}