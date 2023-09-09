import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'street', headerName: 'Street', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'zipCode', headerName: 'Zip Code', width: 120 },
    { field: 'department', headerName: 'Department', width: 150 },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Box mb="40px">
        <Typography variant="h3" color="primary" fontWeight="bold" mt="20px" mb="20px">
          Employees
        </Typography>
        <Typography variant="body" color="secondary">
          List of Employees
        </Typography>
      </Box>
      <Box sx={{ height: '55vh', width: '100%' }}>
        <DataGrid
          rows={employees}
          columns={columns}
          initialState={{
            sorting: {
              sortModel: [{ field: 'id', sort: 'desc' }],
            },
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
