import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FunctionAddUser } from "../Redux/Action";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique IDs
import Button from "@mui/material/Button";
import { TextField, Container, Typography, Grid } from "@mui/material";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Generate a unique client_id using uuidv4
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    comment: "",
    client_id: uuidv4(), // Generate a unique client_id
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(FunctionAddUser(values));
    navigate("/");
    setSubmitting(false);
  };

  return (
    <Container sx={{ ml: 80, mt: 20 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Add User</Typography>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  sx={{ width: 400 }}
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  sx={{ width: 400 }}
                />
                <ErrorMessage name="email" component="div" className="error-message"/>
              </Grid>
              <Grid item xs={12}>
                <Field
                  // type="number"
                  as={TextField}
                  name="phone_number"
                  label="Phone"
                  sx={{ width: 400 }}
                />
                <ErrorMessage name="phone_number" component="div" className="error-message"/>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="comment"
                  label="Comment"
                  sx={{ width: 400 }}
                />
                <ErrorMessage name="comment" component="div" className="error-message"/>
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  name="client_id"
                  label="Id"
                  fullWidth
                  disabled
                  style={{ display: "none" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>

                <Link to="/">
                  <Button sx={{ m: 1 }} variant="contained" color="primary">
                    Back
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Adduser;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FunctionAddUser } from "../Redux/Action";
// import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique IDs
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { TextField, Container, Typography, Grid } from "@mui/material";
// const Adduser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Generate a unique client_id using uuidv4
//   const initialValues = {
//     name: "",
//     email: "",
//     phone_number: "",
//     comment: "",
//     client_id: uuidv4(), // Generate a unique client_id
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phone_number: Yup.string().required("Phone is required"),
//     comment: Yup.string().required("Comment is required"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     dispatch(FunctionAddUser(values));
//     navigate("/");
//     setSubmitting(false);
//   };

//   return (
//     <Grid className="adduser">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Grid>
//               <Grid>
//                 <h2>Add User</h2>
//               </Grid>

//               <Grid>
//                 <Grid>
//                   <Grid>
//                     <label>Name</label>
//                     <Field type="text" name="name" />
//                     <ErrorMessage
//                       name="name"
//                       component="div"
//                       className="error"
//                     />
//                   </Grid>
//                 </Grid>

//                 <Grid>
//                   <Grid>
//                     {/* <label>client_id</label> */}
//                     <Field type="hidden" name="client_id" readOnly />
//                     <ErrorMessage
//                       name="client_id"
//                       component="div"
//                       className="error"
//                     />
//                   </Grid>
//                 </Grid>

//                 <Grid className="col-lg-12">
//                   <Grid className="form-group">
//                     <label>Email</label>
//                     <Field type="email" name="email" />
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       className="error"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid className="col-lg-12">
//                   <Grid className="form-group">
//                     <label>phone_number</label>
//                     <Field type="text" name="phone_number" />
//                     <ErrorMessage
//                       name="phone_number"
//                       component="div"
//                       className="error"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Grid>
//                   <Grid>
//                     <label>Comment</label>
//                     <Field as="textarea" name="comment" />
//                     <ErrorMessage
//                       name="comment"
//                       component="div"
//                       className="error"
//                     />
//                   </Grid>
//                 </Grid>
//               </Grid>

//               <Grid>
//                 <Button type="submit" disabled={isSubmitting}>
//                   Submit
//                 </Button>{" "}
//                 |<Link to={"/"}>Back</Link>
//               </Grid>
//             </Grid>
//           </Form>
//         )}
//       </Formik>
//     </Grid>
//   );
// };

// export default Adduser;
