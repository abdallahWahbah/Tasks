import React from 'react'
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createMuiTheme } from '@material-ui/core';

import { useTranslation } from 'react-i18next';


const Header = (props) => {

    const { i18n } = useTranslation();

    const handleClick = (lang) =>
    {
        i18n.changeLanguage(lang);
        if(lang === "ar") 
        {
            props.setDirection("rtl");
            localStorage.setItem("direction", "rtl")
        }
        else if (lang === "en")
        {
            props.setDirection("ltr");
            localStorage.setItem("direction", "ltr")
        }
    }

    return (
        <Box sx={{borderBottom: 1, padding: "10px 0", marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <Link to="/" style={{marginRight: "20px"}}>
                Home
            </Link>
            <Link to="/wizardForm" style={{marginRight: "20px"}}>
                Wizard Form
            </Link>
            <Link to="/table" style={{marginRight: "20px"}}>
                Table
            </Link>
            <div style={{marginLeft:"auto"}}>
                <Button variant="contained" sx={{mr:"20px"}} onClick={() => handleClick("en")}>
                    En
                </Button>
                <Button variant="contained" onClick={() => handleClick("ar")}>
                    Ar
                </Button>
            </div>
        </Box>
    )
}

export default Header
