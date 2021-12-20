import React from 'react';

import { makeStyles } from '@mui/styles';


const Header = (props) => 
{
  const useStyles = makeStyles(
  {
    list: 
    {
      listStyle: "none",
      display: "flex",
      '& > *':
      {
        marginRight: "20px",
      },
      '& > *:last-of-type':
      {
        marginRight: 0
      }
    },
    linkDecoration: 
    {
      textDecoration:"none"
    }
  });

  const signIn = (e)=>
  {
    e.preventDefault();
    props.showLoginContent(true);
    props.showSignupAdmin(false);
    props.showSignupCustomer(false);
  }

  const signedList = (
    <ul className={`${props.className} ${useStyles().list}`}>
      <li><a className={`${useStyles().linkDecoration}`} href='/'>View All Complaints</a></li>
      <li><a className={`${useStyles().linkDecoration}`} href='/'>Create Complaint</a></li>
      <li><a className={`${useStyles().linkDecoration}`} href='/'>Sign Out</a></li>
    </ul>);

  const notSigned = <a className={`${props.className} ${useStyles().linkDecoration}`}href='/' onClick={signIn}>Sign In</a>
  
  return (
    <React.Fragment> 
      {props.signed && signedList}
      {!props.signed && notSigned}
    </React.Fragment>
  );
};
export default Header;
