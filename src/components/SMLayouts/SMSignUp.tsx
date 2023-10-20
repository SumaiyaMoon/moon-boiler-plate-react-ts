import { Box, Typography, Paper, Grid } from "@mui/material";
import SMInput from "../SMComponents/SMInput";
import SMButton from "../SMComponents/SMButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fbSignUp } from "../../config/firebase/firebase-methods";

export default function SMSignUp() {
  const [model, setModel] = useState<any>({});
  const fillModel = (key: string, val: string) => {
    model[key] = val;
    setModel({ ...model });
  };

  const navigate = useNavigate();

  let signUpUser = () => {
    model.role = "user";
    console.log(model);
    fbSignUp(model)
      .then((res: any) => {
        if (res.role == "admin") {
          navigate("/AdminPanel");
        } else {
          navigate("/Quiz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      className="bg_img_login"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper className="paperColor" elevation={3} sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" className="fw-bold" gutterBottom>
          SignUp
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SMInput
                value={model.userName}
                name="userName"
                label="User Name"
                type="text"
                onChange={(e: any) => fillModel("userName", e.target.value)}
                className="py-2"
              />
            </Grid>
            <Grid item xs={12}>
              <SMInput
                value={model.email}
                name="email"
                label="Email"
                type="text"
                onChange={(e: any) => fillModel("email", e.target.value)}
                className="py-2"
              />
            </Grid>

            <Grid item xs={12}>
              <SMInput
                value={model.password}
                name="password"
                label="Password"
                type="text"
                onChange={(e: any) => fillModel("password", e.target.value)}
                className="py-2"
              />
            </Grid>

            <Grid item xs={12}>
              <SMButton
                type="button"
                onClick={signUpUser}
                label="Sign Up"
                className="py-2"
              />
              <Typography className="py-2">
                Already Registered?
                <Link to="/">Log In</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
