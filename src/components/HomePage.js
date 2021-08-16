import React ,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
//global context
import {GlobalContext} from '../contextApi/GlobalVars';
import {RiFolderOpenLine} from 'react-icons/ri';
import {HiViewGridAdd} from 'react-icons/hi'
import {HiOutlineViewGridAdd} from 'react-icons/hi'
import {RiAncientGateLine} from 'react-icons/ri'
const allData = []
const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      textDecoration:'none',
      color: 'white',
      alignItems:'center',
      fontSize:'25px'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 25,
      height: 25,
      color:'white'
    },
    home: {
        display:'flex',
        justifyContent:'center',
        backgroundColor: '#00796B',
        height: '95px',
        alignItems:'center'
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
      },
  
      title: {
        margin: theme.spacing(4, 0, 2),
        color:'white'
      },
      avatar:{
        backgroundColor:'#FF9800'
      },
      gridStyle:{
        color:'white',
        display:'flex',
        flexDirection:'column',
        margin:'0 auto'
      }
  }));

export const HomePage = () => {
  
    return (
        <div>
        
            <Header />
            <EventsData />
        </div>
    )
}

export const Header = () => {
    const classes = useStyles();

    return (
 <div className={classes.home}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.gridStyle}>
        <Link color="white" to="/"  className={classes.link}>
          <RiAncientGateLine className={classes.icon} />
          Home
        </Link>
        <Link
          color="inherit"
          to="/add"
          
          className={classes.link}
        >
          <HiOutlineViewGridAdd className={classes.icon} />
          Add event
        </Link>
      
      </Breadcrumbs>
  </div>
    );
}

export const Home = () => {
  const classes = useStyles();

  return (
<div className={classes.home}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to="/"  className={classes.link}>
        <RiAncientGateLine className={classes.icon} />
        Home
      </Link>
     
    
    </Breadcrumbs>
</div>
  );
}
//generate data


const EventsData = () => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const {eventData,removeEvent} = useContext(GlobalContext)
  console.log(eventData)
  console.log(allData)
  if(eventData){
    allData.push(eventData)

  }
  /*
  function generate(element) {
    return eventData.map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  */
    return(
      <>
        <Grid item xs={12} md={6} className={classes.gridStyle}>
        <Typography variant="h6" className={classes.title} align='center'>
         {eventData.length !== 0 ? 'Registered Events':'No Registered Events' } 
        </Typography>
        <div>
          <List dense={dense} >
            {eventData.map(item=>(
              <ListItem key = {item.id}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <RiFolderOpenLine />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction >
                <Link to={`/edit/${item.id}`}>
                <IconButton edge="end" aria-label="edit">
                  <EditOutlinedIcon className={classes.gridStyle}/> 
                  </IconButton>
                </Link>
                  <IconButton edge="end" aria-label="delete" onClick={()=> removeEvent(item.id)}>
                   <DeleteIcon className={classes.gridStyle}/>
                  </IconButton>
                  
                   
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>

    {/*old data*/}

   
      </>
    )
}
