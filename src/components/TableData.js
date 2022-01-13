import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const TableData = (props) => {

  const [data, setData] = useState(props.tableData);

  useEffect(()=>
  {
    const getData = async () =>
    {
      const data = await axios.get('http://localhost:3000/api/wizard-forms');
      if(data.data.length !== 0)
      {
        setData(data.data);
      }
    };
    getData();
  }, []);

  if(data.length === 0) 
  {
    return <div style={{fontSize: "20px", marginTop: "20px"}}>No data to preview</div>
  }

  return (
      <TableContainer component={Paper} sx={{marginTop: "20px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Number</TableCell>
              <TableCell>Center Owner Name</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>License Type</TableCell>
              <TableCell>Commercial Registeration Number</TableCell>
              <TableCell>Enityty Name</TableCell>
              <TableCell>Commissioner Phone Number</TableCell>
              <TableCell>Building Number</TableCell>
              <TableCell>Street Name</TableCell>
              <TableCell>District Number</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Postal Code</TableCell>
              <TableCell>Extra Number</TableCell>
              <TableCell>Center name</TableCell>
              <TableCell>Age Group</TableCell>
              <TableCell>Applicants Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(data)}
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row["id-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["center-owner-name"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["date-of-birth"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["phone-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["license-type"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["commercial-registeration-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["entity-name"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["commissioner-phone-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["building-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["street-name"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["district-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["city-name"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["postal-code"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["extra-number"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["center-name-select-comp"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["age-group"]}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row["radio-buttons-group"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default TableData;
