import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Grid } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { departments, states } from '../../constants/Constants';
import { addEmployee } from '../../state/employeeSlice';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

export default function CreateEmployee() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [modalMessage, setModalMessage] = useState('');
  const initialValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    department: 'Sales',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    dateOfBirth: Yup.date()
      .min(dayjs().subtract(120, 'year').toDate(), 'Invalid birth date')
      .max(dayjs().subtract(18, 'year').toDate(), 'Must be at least 18 years old')
      .required('Birth date is Required'),
    startDate: Yup.date()
      .min(dayjs('1970-01-01').toDate(), 'Start date must not be before 1970')
      .required('Start Date is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.number()
      .required('Zip Code is required')
      .min(10000, 'Must be exactly 5 characters')
      .max(99999, 'Must be exactly 5 characters'),
    department: Yup.string().required('Department is required'),
  });

  const handleFormSubmit = (values, { resetForm }) => {
    const lastId = employees[employees.length - 1].id || 0;
    const employee = { ...values, id: lastId + 1 };
    dispatch(addEmployee(employee));
    // Set the modal message and open the modal
    setModalMessage('Employee added successfully!');
    setOpenModal(true);
    resetForm();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="50%"
      margin="0 auto"
      maxWidth={500}
      minWidth={300}
    >
      <Box mb="40px">
        <Typography variant="h3" color="primary" fontWeight="bold" mt="20px" mb="20px">
          Create an Employee
        </Typography>
        <Button component={RouterLink} to="/list-employee" variant="outlined">
          <Typography variant="body2">View Current Employees</Typography>
        </Button>
      </Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      disableFuture
                      format="MM/DD/YYYY"
                      value={values.dateOfBirth}
                      onChange={(date) => {
                        setFieldTouched('dateOfBirth', true);
                        const formattedDate = dayjs(date).format('MM/DD/YYYY');
                        setFieldValue('dateOfBirth', formattedDate);
                      }}
                      onOpen={() => setFieldTouched('dateOfBirth', true)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          label: 'Date de naissance',
                          error: Boolean(touched.dateOfBirth) && Boolean(errors.dateOfBirth),
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      disableFuture
                      format="MM/DD/YYYY"
                      value={values.startDate}
                      onChange={(date) => {
                        setFieldTouched('startDate', true);
                        const formattedDate = dayjs(date).format('MM/DD/YYYY');
                        setFieldValue('startDate', formattedDate);
                      }}
                      onOpen={() => setFieldTouched('startDate', true)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          label: 'Start Date',
                          error: Boolean(touched.startDate) && Boolean(errors.startDate),
                        },
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Grid container padding={2} component="fieldset">
                  <legend>Address</legend>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.street}
                      name="street"
                      error={Boolean(touched.street) && Boolean(errors.street)}
                      helperText={touched.street && errors.street}
                      sx={{ mb: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="City"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.city}
                      name="city"
                      error={Boolean(touched.city) && Boolean(errors.city)}
                      helperText={touched.city && errors.city}
                      sx={{ mb: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="State"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.state}
                      defaultValue="AL"
                      name="state"
                      error={Boolean(touched.state) && Boolean(errors.state)}
                      helperText={touched.state && errors.state}
                      sx={{ mb: 4 }}
                    >
                      <MenuItem value="">Select State</MenuItem>
                      {states.map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                          {state.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Zip Code"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.zipCode}
                      name="zipCode"
                      type="number"
                      error={Boolean(touched.zipCode) && Boolean(errors.zipCode)}
                      helperText={touched.zipCode && errors.zipCode}
                      sx={{ mb: 4 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Department"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.department}
                  name="department"
                  error={Boolean(touched.department) && Boolean(errors.department)}
                  helperText={touched.department && errors.department}
                >
                  {departments.map((department) => (
                    <MenuItem key={department} value={department}>
                      {department}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid mb="40px" item xs={12}>
                <Button type="submit" variant="contained" color="secondary" fullWidth>
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <ModalComponent open={openModal} onClose={() => setOpenModal(false)} content={modalMessage} />
    </Box>
  );
}
