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
  getAuth, // Firebase auth 가져오기
  sendPasswordResetEmail, // Firebase 비밀번호 재설정 이메일 보내기 함수 가져오기
} from "firebase/auth";

export default function Find() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendPasswordResetEmail = () => {
    const auth = getAuth(); // Firebase auth 가져오기

    // Firebase 비밀번호 재설정 이메일 전송 함수 호출
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // 비밀번호 재설정 이메일이 전송되면, 다른 페이지로 이동
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // 에러 처리
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
          비밀번호 찾기
        </Typography>
        <Typography
          variant="caption"
          margin="normal"
          mt={1}
        >
          비밀번호 재설정 이메일을 보내려면 이메일 주소를
          입력하세요.
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSendPasswordResetEmail}
          sx={{ mt: 3, mb: 2 }}
        >
          비밀번호 재설정 이메일 보내기
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
