import * as yup from 'yup';

export const LoginAuthBuyer = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Emails must contain symbols @'
    ),
  password: yup.string().required('Password is required'),
});

export const RegisterAuthBuyer = yup.object({
  name: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .required(`Email is required`)
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Emails must contain symbols @'
    ),
  password: yup.string().required('Password is required'),
});

export const ProfilBuyer = yup.object({
  name: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
      'Emails must contain symbols @'
    ),

  password: yup.string().required("Password is required"),
  phone_number: yup.string().required("Phone Number is required"),
  address: yup.string().required('Address is required'),
  photo: yup.mixed().required('Photo is required'),
});

export const ProfilAuthPartner = yup.object({
  name: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .required(`Email is required`)
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Emails must contain symbols @'
    ),

  phone_number: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  photo: yup.mixed().required("Photo is required"),
});

export const AddAdmin = yup.object({
  name: yup.string().required('Full Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
      'Emails must contain symbols @'
    ),
  password: yup.string().required('Password is required'),
  phone_number: yup.string().required('Phone Number is required'),
  address: yup.string().required('Address is required'),
});
