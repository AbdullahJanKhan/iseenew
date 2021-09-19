import React from "react";
import "./style.css";
import patientreglogo from "../Assets/Docreg.png";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import { Header } from "../components/header";

import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles({
  border: {
    marginTop: "111px",
    border: "6px solid  #59C1E8",
  },
  dialogbox: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "20px",
    background: "#fff",
    boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.16)",
    Border: "6px",
  },
  setpatientlogo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbox: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "270px",
    height: "350px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.16)",
  },
  loginboxheader: {
    marginBottom: "20px",
    fontSize: "24px",
    textDecorationLine: "underline",
  },
  setemail: { marginBottom: "10px", width: "75%" },
  setpassword: { marginBottom: "40px", width: "75%" },
  regbutton: {
    width: "38%",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    background: "#3585da",
    color: "#fff",
    "&:hover": {
      background: "rgba(53,133,218,0.8)",
    },
    fontWeight: "bold"
  },
  setpatientreglogo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  registrationheader: {
    marginBottom: "20px",
    fontSize: "24px",
    textDecorationLine: "underline",
    justifyContent: "center",
    alignItems: "center",
  },
  starttextfielddiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  textfield: {
    display: "flex",
    width: "45%",
    color: "black",
    "&:hover": {
      color: "white",
    },
    fontFamily: "Montserrat",
  },
  endtextfield: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "7px",
  },
  radiobutton: {
    display: "flex",
    flexDirection: "row",
    marginTop: "7px",
    justifyContent: "space-between",
  },
  font: {
    fontFamily: "Montserrat",
  }
});

const theme = createTheme({
  palette: {
    secondary: {
      main: "#3585da",
    },
  },
});


const validationSchema = yup.object({
  firstname: yup
    .string('Enter Your First Name')
    .required('First Name is Required'),
  lastname: yup
    .string('Enter Your Last Name')
    .required('Last Name is Required'),
  username: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is Required'),
  confirmpassword: yup
    .string("Confirm Password")
    .min(8, 'Password should be of minimum 8 characters length')
    .required("Confirm Password is Required")
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
  dob: yup
    .date("Enter Date of Birth")
    .required("Date of Birth is Required")
    .test("age", "You must be 18 or older", function (birthdate) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return birthdate <= cutoff;
    }),
  pmdcid: yup
    .string("Enter PMDCID")
    .required("PMDC ID is Required"),
  specialization: yup
    .string("Enter you Spicialization")
    .required("Specilization is Required"),
  city: yup
    .string("Enter you Practice City")
    .required("Practice City is Required"),
})


export default function DoctorRegistration() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const classes = useStyles();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmpassword: '',
      firstname: '',
      lastname: '',
      dob: '',
      pmdcid: '',
      specialization: '',
      city: '',
      gender: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values))
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Header />

        <Grid item md={4} sm={6} xs={10} className={classes.border}>
          <Grid container className={classes.dialogbox}>
            <Grid item className={classes.setpatientreglogo}>
              <img
                src={patientreglogo}
                className="docreglogo"
                alt="Doctor Reg"
              ></img>

              <header className={classes.registrationheader}>
                DOCTOR REGISTRATION
              </header>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
              <Grid item xs={12}>
                <div className={classes.starttextfielddiv}>
                  <TextField
                    className={classes.textfield}
                    label="First name"
                    id="firstname"
                    name="firstname"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                    helperText={formik.touched.firstname && formik.errors.firstname}
                  />
                  <TextField
                    className={classes.textfield}
                    label="Last name"
                    id="lastname"
                    name="lastname"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                  />
                </div>
                <div className={classes.endtextfield}>
                  <TextField
                    className={classes.textfield}
                    label="Email Address"
                    id="username"
                    name="username"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                  />
                  <TextField
                    className={classes.textfield}
                    label="Date of Birth"
                    id="dob"
                    name="dob"
                    type="date"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    error={formik.touched.dob && Boolean(formik.errors.dob)}
                    helperText={formik.touched.dob && formik.errors.dob}
                  />
                </div>
                <div className={classes.endtextfield}>
                  <TextField
                    className={classes.textfield}
                    label="Password"
                    id="password"
                    name="password"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                  <TextField
                    className={classes.textfield}
                    label="Confirm Password"
                    id="confirmpassword"
                    name="confirmpassword"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    type={showConfirmPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownConfirmPassword}
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                    helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                  />
                </div>
                <div className={classes.endtextfield}>
                  <TextField
                    className={classes.textfield}
                    label="PMDC ID"
                    id="pmdcid"
                    name="pmdcid"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formik.values.pmdcid}
                    onChange={formik.handleChange}
                    error={formik.touched.pmdcid && Boolean(formik.errors.pmdcid)}
                    helperText={formik.touched.pmdcid && formik.errors.pmdcid}
                  ></TextField>
                  <TextField
                    className={classes.textfield}
                    label="Specialization"
                    id="specialization"
                    name="specialization"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={formik.values.specialization}
                    onChange={formik.handleChange}
                    error={formik.touched.specialization && Boolean(formik.errors.specialization)}
                    helperText={formik.touched.specialization && formik.errors.specialization}
                  />
                </div>
                <div className={classes.radiobutton}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" style={{ fontSize: "12px" }}>
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      id="gender"
                      name="gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      error={formik.touched.gender && Boolean(formik.errors.gender)}
                      label="Other"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    className={classes.textfield}
                    label="Current City"
                    id="city"
                    name="city"
                    InputLabelProps={{
                      className: classes.font,
                      shrink: true,
                    }}
                    inputProps={{
                      className: classes.font
                    }}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </div>
              </Grid>
              <Button type="submit" className={classes.regbutton}>
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
