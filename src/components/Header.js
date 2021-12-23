import React from 'react';

import { makeStyles } from '@mui/styles';
import Link from '../routing/Link';


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
      <li>
        <Link className={`${useStyles().linkDecoration}`} href='/AllComplaints' userType={props.userType}>
          View All Complaints
        </Link>
      </li>

      <li>
        <Link className={`${useStyles().linkDecoration}`} href='/CreateComplaint' userType={props.userType}>
          Create Complaint
        </Link>
      </li>

      <li>
        <Link className={`${useStyles().linkDecoration}`} href='/' 
              showLoginContent={value => props.showLoginContent(value)}
              setUserType={value => props.setUserType(value)}
              setSigned={value => props.setSigned(value)}
              >
          Sign Out
        </Link>
      </li>

    </ul>
  );

  const notSigned = <a className={`${props.className} ${useStyles().linkDecoration}`}href='/' onClick={signIn}>Sign In</a>
  
  return (
    <React.Fragment> 
      {props.signed && signedList}
      {!props.signed && notSigned}
    </React.Fragment>
  );
};
export default Header;
