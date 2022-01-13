import React, { useState } from "react";

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import WizardForm from './components/WizardForm';
import TableData from "./components/TableData";
import './style.css';

const App = ()=>
{
    const [showTable, setShowTable] = useState(null);
    const [tableData, setTableData] = useState([]);


    return(
        <div>
            <Container maxWidth="lg">

                <Button variant="contained" onClick={()=>setShowTable(!showTable)}
                >
                    Show Table
                </Button>

                <WizardForm showTable={setShowTable} tableData={tableRow => 
                {
                    setTableData(prevState =>
                    {
                        return [...prevState, tableRow]
                    });
                }}/>

                {showTable ? <TableData tableData={tableData} /> : null}
                
            </Container>
        </div>
    )

}

export default App;