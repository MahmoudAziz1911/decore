import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { DataContext } from "@/store/GlobalState";

import {
  Box,
  Button,
  Grid,
  CardHeader,
  Divider,
  Link,
  Paper,
  TextField,
  Typography,
  ButtonGroup,
  Avatar
} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from '@mui/icons-material/Key';
import Notify from "@/components/Notify";

const sxBox = { display: 'flex', alignItems: 'flex-end', textAlign: "center" }
const sxIcons = { color: 'action.active', mr: 1, my: 0.5, fontSize: "30px" }

const buttonSX = {
  my: 1, color: "#666", fontWeight: "500", textTransform: "initial", border: "1px solid#cacaca",
  "&:hover": {
    color: "#444",
    borderColor: "#333",
    bgcolor: "#f1f1f3"
  },
};
const LogIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const { state, dispatch } = useContext(DataContext)
  const router = useRouter()
  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    dispatch({ type: 'NOTIFY', payload: {} })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    let options = {
      redirect: false,
      email: userData.email,
      password: userData.password,
      callbackUrl: "/"
    }
    dispatch({ type: 'NOTIFY', payload: { loading: true } })
    const status = await signIn("credentials", options)
    console.log("status", status)
    if (status.ok) {
      return router.push(status.url)
    }

    if (status.error) return dispatch({ type: 'NOTIFY', payload: { error: status.error } });

  }


  return (
    <>
      <Box sx={{
        
        padding: "0 20px 20px",
        left: "50%",
        top: "55%",
        width: { xs: "300px", sm: "400px" },
        position: "absolute",
        transform: "translate(-50%, -50%)"
      }}>
        <Box sx={{ my: 1, mx: 2 }}>
          <CardHeader sx={{ textAlign: "center" }} title="Sign in" subheader="Please enter the following data to login" />
          <form onSubmit={handleSubmit}>
            <Box sx={sxBox}>
              <EmailIcon sx={sxIcons} />
              <TextField
                type="text"
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
              sx={{ my: 2, ":hover": { bgcolor: "#222" }, bgcolor: "#a20401" }}
              variant="contained" disableElevation> LOG IN</Button>
          </form>
          <Divider sx={{ color: "text.secondary", fontWeight: "bold"}}>OR</Divider>

          <Box sx={{ textAlign: "center", }}>
            <Button sx={buttonSX} onClick={() => signIn("google", { callbackUrl: "/" })} variant="outlined" size="large" fullWidth startIcon={<Avatar sx={{ width: "25px", height: "25px" }} src="/images/google.png" />}>Sign in with Google</Button>
            <Button sx={buttonSX} onClick={() => signIn("github", { callbackUrl: "/" })} variant="outlined" size="large" fullWidth startIcon={<Avatar sx={{ width: "25px", height: "25px" }} src="/images/github.png" />}>Sign in with Github</Button>
            <Typography mt={2} variant="body" color="text.secondary" component="div">
              don`t have an account yet?
              <Link sx={{ mx: "6px" }} href="/register" underline="always">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LogIn