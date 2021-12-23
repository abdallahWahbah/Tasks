import React, {useEffect, useState} from 'react';

import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const ComplaintAll = (props) =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [complaints, setComplaints] = useState([]);

    useEffect(()=>
    {
        const getUserData = async ()=>
        {
            const response = await axios.get(`http://localhost:3000/api/userLogins/${props.userID}`);
            setName(response.data.name);
            setEmail(response.data.email);
        }
        const getAllComplains = async () =>
        {
            const response = await axios.get("http://localhost:3000/api/complaints");
            setComplaints(response.data);
        }
        getUserData();
        getAllComplains();
    }, [props.userID]);

    return(
        <Box sx={{ width: '70%', margin: "20px auto"}}>
            <h2 style={{marginBottom:"20px"}}>Hello {name} ({email})</h2>
            <div style={{backgroundImage:"linear-gradient(to bottom, rgba(255, 255, 255, .1), rgba(0, 0, 0, .1))"}}>
            
            <TableContainer sx={{backgroundColor: "transparent !important"}} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell align="right">Complaint Type</TableCell>
                            <TableCell align="right">Complaint ID</TableCell>
                            <TableCell align="right">Severity</TableCell>
                            <TableCell align="right">Language</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {complaints.map((complaint) => (
                        <TableRow
                            key={complaint.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {complaint.subject}
                        </TableCell>
                        <TableCell align="right">{complaint.type}</TableCell>
                        <TableCell align="right">{complaint.id}</TableCell>
                        <TableCell align="right">{complaint.severity}</TableCell>
                        <TableCell align="right">{complaint.language}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </Box>
    )
}

export default ComplaintAll;