import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Banner from "../image/banner.jpg";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // 페이지 이동
        navigate("/category");
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid>
          <img src={Banner} width={400} alt="Banner" />
        </Grid>
        <Typography
          component="h1"
          variant="h3"
          mt={2}
          mb={1}
        >
          조선 팔도
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          margin="normal"
        >
          Sign UP
        </Typography>
        <Typography
          variant="caption"
          margin="normal"
          mt={1}
        >
          Please fill this form to create an account!
        </Typography>
        <TextField
          margin="normal"
          label="Email Address"
          required
          fullWidth
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <TextField
          margin="normal"
          label="Password"
          required
          fullWidth
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSignUp}
          sx={{ mt: 3, mb: 2 }}
        >
          회원가입 하기
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoBack}
          sx={{ mb: 1 }}
        >
          뒤로가기
        </Button>
      </Box>
    </Container>
  );
}
