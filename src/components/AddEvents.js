import React,{useContext,useState} from 'react'
import { Button, InputLabel, TextField  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../contextApi/GlobalVars';
import { nanoid } from 'nanoid'
import {Home} from './HomePage'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'inherit',
      display: "flex",
      flexDirection:'column',
      justifyContent:'center',
      height: "auto",
      [theme.breakpoints.down("768")]: {
        display: "flex",
        flexDirection: "column",
      },
     
    },
      form: {
        display: 'flex',
        flexDirection: 'column',
        width:'65%',
        margin: '30px auto',
      },
      buttons:{
        backgroundColor:'#FF9800',
        color: 'white',
        fontWeight:'bold'
      },
      cssLabel: {
        color : 'white'
      },
    
      cssOutlinedInput: {
        color:'white',
        '&$cssFocused $notchedOutline': {
          borderColor: '#FF9800',
          
        }
      },
    
      cssFocused: {borderColor : '#00796B',color:'white'},
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: '#757575',
       
      },
     
    }))

export const AddEvents = () => {
    const classes = useStyles();
    const{addEvent} = useContext(GlobalContext)
    const history = useHistory()
    const [eventName,setEventName] = useState('')


   const onChange = (e) => {
    setEventName(e.target.value)
   }

    const onSubmit = () => {
    const  newEvent = {
        id:nanoid(),
        name: eventName
      }
       addEvent(newEvent)
       history.push('/')
    }
    return (
        <div className={classes.root}>
            <Home />
            <form className={classes.form} onSubmit={onSubmit}>
            <InputLabel htmlFor="outlined-basic" style={{fontWeight:'bold',color:'white'}}>Add Event</InputLabel>
            <TextField 
            id="outlined-basic" 
            label="" 
            variant="outlined" 
            style={{marginTop:'15px'}} 
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
            onChange={onChange}/>
            <Button variant = 'contained' size='large' classes={{root:classes.buttons}} style={{marginTop:'15px'}} type='submit'>Submit</Button>
            <Link to='/'><Button variant = 'contained' size='large' classes={{root:classes.buttons}} style={{marginTop:'15px'}}>Back</Button></Link>
            </form>
        </div>
    )
}
