import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Editcustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', 
        email: '', phone: '', streetaddress: '', postcode: '',
        city: ''
    });

  const handleClickOpen = () => {
    setCustomer({firstname: props.customer.firstname, 
        lastname: props.customer.lastname,
        email: props.customer.email, 
        phone: props.customer.phone, 
        streetaddress: props.customer.streetaddress,
        postcode: props.customer.postcode,
        city: props.customer.city,})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    setCustomer({...customer, [event.target.name]: event.target.value})

  }

  const updateCustomer = () => {
      props.updateCustomer(customer, props.customer.links[0].href);
      handleClose();
  }


    return (
       <div >
      <Button size="small" color="secondary" onClick={handleClickOpen}>
        Muuta
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Muuta asiakkaan tietoja</DialogTitle>
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
          />
           <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            label="Sukunimi"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="email"
            value={customer.email}
            label="Sähköpostiosoite"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            label="Puhelinnumero"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            label="Osoite"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            label="Postinumero"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
           <TextField
            margin="dense"
            name="city"
            value={customer.city}
            label="Kaupunki"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Peruuta
          </Button>
          <Button onClick={updateCustomer} color="secondary">
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    );
}