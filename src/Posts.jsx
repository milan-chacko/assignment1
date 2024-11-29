import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Posts = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        //call typicode api
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setItems(response.data))
        .catch(error=>console.log(error))
        },[])//[] to show that it will be called one only 

        function createData(id, title, body) {
            return { id,title,body };
          }
          
    
      return (
        <div>
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{ backgroundColor: '#1976d2', color: 'white' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Title</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:hover': { backgroundColor: '#e0f7fa' },
              }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
      )
}

export default Posts