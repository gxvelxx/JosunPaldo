import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import SocialKakao from "./SocialKakao";

import Banner from "../image/banner.jpg";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // 로그인 사용자 정보 상태

  useEffect(() => {
    const auth = getAuth();

    // 사용자의 로그인 상태를 감시
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인 성공 시 user 정보를 설정
        setUser(userCredential.user);
        // 다른 작업 수행 가능
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user) {
    // 사용자가 로그인한 경우 Category 페이지로 이동
    return <Navigate to="/Category" />;
  }

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
          <img src={Banner} width={400}></img>
        </Grid>
        <Typography
          component="h1"
          variant="h3"
          mt={2}
          mb={1}
        >
          조선 팔도
        </Typography>
        <Typography component="h2" variant="h5">
          환영합니다!
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
        {/* <FormControlLabel
          control={
            <Checkbox value="remember" color="primary" />
          }
          label="기억하기"
        /> */}
        <Grid sx={{ mt: 2 }}>
          <SocialKakao />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSignIn}
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="find" variant="body2">
              비밀번호 찾기
            </Link>
          </Grid>
          <Grid item>
            <Link href="auth" variant="body2">
              회원가입
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
