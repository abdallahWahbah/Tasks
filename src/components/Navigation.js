import React from 'react';

import Header from './Header';

import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
{
  linksToRight:
  {
    marginLeft: "auto"
  },  
});

const Navigation = (props) => {
  
  // const [signed, setsigned] = useState(false)
  const classes = useStyles();
  return (
    <Box sx={{ display: 'flex', alignItems:"center", border: "1px solid black", padding: "0 10px" }}>
      <h3 style={{marginRight:"15px"}}>Site Name</h3>
      <p>Components Management Portal</p>
      {/* {props.signed && <Header signed={fal}/>} */}
      {true && <Header className={classes.linksToRight} 
                      signed={false}
                      showLoginContent={val => props.showLoginContent(val)} 
                      showSignupAdmin={val => props.showSignupAdmin(val)}
                      showSignupCustomer={val => props.showSignupCustomer(val)}/>}
    </Box>
  );
};

export default Navigation;
