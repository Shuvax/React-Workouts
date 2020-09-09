import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AbWorkouts from './AbWorkouts';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'relative',
    padding: 0,
    color: theme.palette.grey[500],
    marginBottom: theme.spacing(1),
   
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton  aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
}))(MuiDialogContent);


export default function AbPopup(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function getDialogue() {
    switch(props.muscle){
      case 'Upper Abs': return AbWorkouts[0].routine;
      case 'Lower Abs': return AbWorkouts[1].routine;
      case 'Obliques': return AbWorkouts[2].routine;
      default: return AbWorkouts[0].routine;
    }
  }

  const {muscle} = props;

  return (
    <div>
      <Button variant="contained" color="link" onClick={handleClickOpen}>
        {muscle}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle style={{textAlign: 'center'}}>
          {muscle} Workout
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {getDialogue()}
          </Typography>
        </DialogContent>
        <DialogTitle style={{textAlign: 'center', padding: '0.5rem 0', margin: 0}} id="customized-dialog-title" onClose={handleClose}/>
      </Dialog>
    </div>
  );
}