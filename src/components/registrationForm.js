import React from 'react';
import { TextField, Button, Paper, Typography, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('Form submitted', values);
    navigate('/thankyou'); // Navigate to a thank you page or another route after registration
  };

  return (
    <Container maxWidth="md" className="flex justify-center items-center rounded-2xl bg-[#43005c] p-8">
      <Paper className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
        <Typography variant="h4" component="h1" className="text-[#43005c] mb-6 ">
          Register
        </Typography>
        <Formik
          initialValues={{ username: '', email: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <Field
                as={TextField}
                label="Username"
                name="username"
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                required
                fullWidth
                variant="outlined"
                className="bg-white"
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                required
                fullWidth
                variant="outlined"
                className="bg-white"
              />
              <Field
                as={TextField}
                label="Phone Number"
                name="phone"
                type="tel"
                error={touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                required
                fullWidth
                variant="outlined"
                className="bg-white"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mt-4 bg-[#43005c] text-white hover:bg-[#32004b]"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
