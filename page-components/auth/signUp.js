import { useState, useContext } from "react";
import { DataContext } from "@/store/GlobalState";
import { createNewUser } from "@/utils/fetchData";

import {
  Box,
  Button,
  CardHeader,
  TextField,
  Typography,
  Link
} from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from '@mui/icons-material/Key';
import { createTheme, ThemeProvider } from "@mui/material";
import valid from "@/utils/valid";
import Notify from "@/components/Notify";
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});
const sxBox = { display: 'flex', alignItems: 'flex-end', textAlign: "center" }
const sxIcons = { color: 'action.active', mr: 1, my: 0.5, fontSize: "30px" }

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: ""
  }
  const [userData, setUserData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const { state, dispatch } = useContext(DataContext)
  const { name, email, password } = userData;

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    dispatch({ type: 'NOTIFY', payload: {} })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password);
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } });
    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    const res = await createNewUser('auth/register', userData)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } });

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <Box theme={theme} sx={{
          border: "1px solid#cacaca",
          padding: "0 20px 20px",
          left: "50%",
          top: "50%",
          width: { xs: "300px", sm: "400px" },
          position: "absolute",
          transform: "translate(-50%, -50%)"
        }}>
          <CardHeader sx={{ textAlign: "center" }} title="REGISTER" />
          <Notify />
          <form onSubmit={handleSubmit}>
            <Box sx={sxBox}>
              <AccountCircle sx={sxIcons} />
              <TextField
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                label="User name"
                size="small" variant="standard" margin="normal" fullWidth />
            </Box>
            <Box sx={sxBox}>
              <EmailIcon sx={sxIcons} />
              <TextField
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email address"
                size="small" variant="standard" margin="normal" fullWidth />
            </Box>
            <Box sx={sxBox}>
              <KeyIcon sx={sxIcons} />
              <TextField
                type="text"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                size="small" variant="standard" margin="normal" fullWidth />
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{ ":hover": { bgcolor: "#222" }, padding: 1, marginTop: 3, bgcolor: "#a20401" }}
              variant="contained" disableElevation> Register</Button>
          </form>

          <Typography sx={{ textAlign: "center" }} mt={2} variant="body" color="text.secondary" component="div">
            already have an account?
            <Link sx={{ mx: "7px" }} href="/signin" underline="always">
              Log In
            </Link>
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default SignUp