import React,{useContext,useState,useEffect} from 'react'
import { Button, InputLabel, TextField  } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {Link,useHistory} from 'react-router-dom'
import {GlobalContext} from '../contextApi/GlobalVars';
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
        color : 'green'
      },
    
      cssOutlinedInput: {
        color:'white',
        '&$cssFocused $notchedOutline': {
          borderColor: '#FF9800',
        }
      },
    
      cssFocused: {borderColor : '#00796B'},
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: '#757575'
      },
    }))

export const EditEvents = (props) => {
  const {eventData,editEvent} = useContext(GlobalContext)
  const classes = useStyles();
  const [selectedEvenstName,setSelectedEventsName] = useState({
    id:'',
    name:''
  })
  const selectedEventId = props.match.params.id
  const history = useHistory()
  
  useEffect(() => {
  const eventId = selectedEventId
  const selectedEvents = eventData.find(event=> event.id === eventId)
  setSelectedEventsName(selectedEvents)
  }, [selectedEventId,eventData])
  
  const onChange = (e) => {
    setSelectedEventsName({...selectedEvenstName,[e.target.name]:e.target.value})
     }
  
  const onSubmit = () => {
    editEvent(selectedEvenstName)
    history.push('/')
      }
    return (
        <div className={classes.root}>
            <Home />
            <form className={classes.form} onSubmit={onSubmit}>
            <InputLabel htmlFor="outlined-basic" style={{fontWeight:'bold',color:'white'}}>Edit Event</InputLabel>
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
            onChange={onChange} 
            value={selectedEvenstName.name} 
            name='name'/>
            <Button type='submit' variant = 'contained' size='large' style={{marginTop:'15px'}} classes={{root:classes.buttons}}>Submit</Button>
            <Link to='/'><Button variant = 'contained' size='large' classes={{root:classes.buttons}} style={{marginTop:'15px'}}>Back</Button></Link>
            </form>
        </div>
    )
}
