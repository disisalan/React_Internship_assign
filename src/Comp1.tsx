import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

// Define the shape of form values
interface FormValues {
  name: string;
  phone: string;
  email: string;
}

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Invalid phone number')
    .required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function SignIn() {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (values: FormValues) => {
    const userData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
    };
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));
    // Navigate to another page (replace '/page2' with your desired route)
    navigate('/page2');
  };

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      {/* Page 1 Heading */}
      <Typography variant='h6'>Page 1</Typography>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Input */}
        <TextField
          margin="normal"
          fullWidth
          name="name"
          label="Name"
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        {/* Phone Input */}
        <TextField
          margin="normal"
          fullWidth
          name="phone"
          label="Phone"
          type="text"
          id="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        {/* Email Input */}
        <TextField
          margin="normal"
          fullWidth
          name="email"
          label="Email Address"
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!formik.isValid}
        >
          Next
        </Button>
      </form>
    </Container>
  );
}
