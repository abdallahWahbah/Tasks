import React, { useState, useEffect } from "react";
import {BrowserRouter, Route } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import { createMuiTheme } from '@material-ui/core/styles';

import WizardForm from './components/WizardForm';
import TableData from "./components/TableData";
import Header from "./components/Header";
import './style.css';


const App = ()=>
{
    const [showTable, setShowTable] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [direction, setDirection] = useState("ltr");
    
    useEffect(()=>
    {
        setDirection(localStorage.getItem("direction"))
    },[])

    const { t } = useTranslation();

    const wizardFormContent = () =>
    {
        return (
            <WizardForm showTable={setShowTable} tableData={tableRow => 
            {
                setTableData(prevState =>
                {
                    return [...prevState, tableRow]
                });
            }}/>
        );
    }

    const tableContent = () =>
    {
        return(
            <React.Fragment>
                <TableData tableData={tableData} />
            </React.Fragment>
        )
    }

    const welcomePage = () =>
    {
        return <div>{t("Home page welcome message")}</div>
    }

    return(
        <div>
            <Container maxWidth="lg" dir={direction}>
                <BrowserRouter>
                    <Header setDirection={setDirection}/>
                    <Route path="/" exact component={welcomePage} />
                    <Route path="/wizardForm" exact component={wizardFormContent}/>
                    <Route path="/table" exact component={tableContent}/>
                </BrowserRouter>
            </Container>
        </div>
    )

}

export default App;