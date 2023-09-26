import React from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FunctionUpdateUser } from "../Redux/Action";
import * as Yup from "yup"; // Import Yup for validation

const Updateuser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone_number: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const initialValues = {
    name: state?.rowData?.name,
    email: state?.rowData?.email,
    phone_number: state?.rowData?.phone_number,
    comment: state?.rowData?.comment,
    client_id: state?.rowData?.client_id,
  };

  const handleSubmit = (values) => {
    const code = state?.rowData?.id;
    dispatch(FunctionUpdateUser(values, code));
    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema, // Assign the validation schema to Formik
  });

  return (
    <Container sx={{ ml: 80, mt: 20 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4">Update User</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              sx={{ width: 400 }}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)} // Show error if field is touched and has an error
              helperText={formik.touched.name && formik.errors.name} // Display error message
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              sx={{ width: 400 }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone_number"
              label="Phone"
              sx={{ width: 400 }}
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              error={
                formik.touched.phone_number &&
                Boolean(formik.errors.phone_number)
              }
              helperText={
                formik.touched.phone_number && formik.errors.phone_number
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="comment"
              label="Comment"
              sx={{ width: 400 }}
              value={formik.values.comment}
              onChange={formik.handleChange}
              error={formik.touched.comment && Boolean(formik.errors.comment)}
              helperText={formik.touched.comment && formik.errors.comment}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="client_id"
              label="Id"
              fullWidth
              disabled
              value={formik.values.client_id}
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
      </form>
    </Container>
  );
};

export default Updateuser;

// import React from "react";
// import { TextField, Button, Container, Typography, Grid } from "@mui/material";
// import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FunctionUpdateUser } from "../Redux/Action";
// const Updateuser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   const initialValues = {
//     name: state?.rowData?.name,
//     email: state?.rowData?.email,
//     phone_number: state?.rowData?.phone_number,
//     comment: state?.rowData?.comment,
//     client_id: state?.rowData?.client_id,
//   };

//   const handleSubmit = (values) => {
//     const code = state?.rowData?.id;
//     dispatch(FunctionUpdateUser(values, code));
//     navigate("/");
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <Container sx={{ ml: 80, mt: 20 }}>
//       <form onSubmit={formik.handleSubmit} >
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Typography variant="h4">Update User</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="name"
//               label="Name"
//               sx={{ width: 400 }}
//               value={formik.values.name}
//               onChange={formik.handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="email"
//               label="Email"
//               sx={{ width: 400 }}
//               value={formik.values.email}
//               onChange={formik.handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="phone_number"
//               label="Phone"
//               sx={{ width: 400 }}
//               value={formik.values.phone_number}
//               onChange={formik.handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="comment"
//               label="Comment"
//               sx={{ width: 400 }}
//               value={formik.values.comment}
//               onChange={formik.handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="client_id"
//               label="Id"
//               fullWidth
//               disabled
//               value={formik.values.client_id}
//               style={{ display: "none" }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary">
//               Submit
//             </Button>

//             <Link to="/">
//               <Button sx={{ m: 1 }} variant="contained" color="primary">
//                 Back
//               </Button>
//             </Link>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default Updateuser;

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FunctionUpdateUser } from "../Redux/Action";

// const Updateuser = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   const [values, setValues] = useState({
//     name: state?.rowData?.name,
//     email: state?.rowData?.email,
//     phone_number: state?.rowData?.phone_number,
//     comment: state?.rowData?.comment,
//     client_id: state?.rowData?.client_id,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues((prevState) => {
//       return {
//         ...prevState,
//         [name]: value,
//       };
//     });
//   };

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const code = state?.rowData?.id;
//     dispatch(FunctionUpdateUser(values, code));
//     navigate("/");
//   };

//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//         <div className="card">
//           <div className="card-header" style={{ textAlign: "left" }}>
//             <h2>Update User</h2>
//           </div>
//           <div className="card-body" style={{ textAlign: "left" }}>
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="form-group">
//                   <label>Id</label>
//                   <input
//                     value={state?.rowData?.client_id}
//                     disabled="disabled"
//                     className="form-control"
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-lg-12">
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input
//                     name="name"
//                     value={values?.name}
//                     onChange={handleChange}
//                     className="form-control"
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-lg-12">
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     name="email"
//                     value={values?.email || ""}
//                     onChange={handleChange}
//                     className="form-control"
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-lg-12">
//                 <div className="form-group">
//                   <label>Phone</label>
//                   <input
//                     name="phone_number"
//                     value={values?.phone_number || ""}
//                     onChange={handleChange}
//                     className="form-control"
//                   ></input>
//                 </div>
//               </div>
//               <div className="col-lg-12">
//                 <div className="form-group">
//                   <label>Comment</label>
//                   <input
//                     name="comment"
//                     value={values?.comment || ""}
//                     onChange={handleChange}
//                     className="form-control"
//                   ></input>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style={{ textAlign: "left" }}>
//             <button type="submit">Submit</button> |<Link to={"/"}>Back</Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Updateuser;
