import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Banner from "../image/banner.jpg";

export default function Tourarea() {
  const navigate = useNavigate();
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
          준비중 입니다.
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoBack}
          sx={{ mt: 2, mb: 1 }}
        >
          뒤로가기
        </Button>
      </Box>
    </Container>
  );
}
