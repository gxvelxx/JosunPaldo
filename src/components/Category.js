import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import museum from "../image/museum.jpg";
import forest from "../image/forest.jpg";
import tourarea from "../image/tourarea.jpg";
import map from "../image/map.jpg";

import {
  getAuth,
  signOut, // Firebase 로그아웃 메서드 추가
} from "firebase/auth";

export default function Category() {
  const navigate = useNavigate(); // useHistory를 사용하여 라우터 history 객체를 얻습니다.

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // 로그아웃 성공 시, '/'로 리다이렉트
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Grid container spacing={3}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={handleLogout}
            sx={{ mt: 1, mb: 2 }}
          >
            로그아웃
          </Button>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={museum}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                미술관 및 박물관
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                paragraph
              >
                「박물관 및 미술관 진흥법」 등에 따라
                문화·예술·학문의 발전과 일반 공중의 문화향유
                및 평생교육 증진 등을 위하여
                지방자치단체에서 관리하는 박물관, 미술관
                정보
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                href="museum"
              >
                보러가기
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={forest}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                휴양림
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                paragraph
              >
                「산림문화ㆍ휴양에 관한 법률」 등에 따라
                산림청이 지정한 국민의 정서 함양·보건휴양 및
                산림교육 등을 위하여 조성한 산림(휴양시설 및
                토지포함)에 대한 정보
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                href="forest"
              >
                보러가기
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={tourarea}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                관광지
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                paragraph
              >
                ⌜관광진흥법⌟ 등에 따라 기초지방자치단체장이
                신청하여 광역지방자치단체장이 지정한
                관광지역 정보 (관광지, 관광단지 포함.
                관광특구 제외)
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                href="tourarea"
              >
                보러가기
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              mb: 2,
            }}
          >
            <CardMedia
              component="div"
              sx={{
                // 16:9
                pt: "56.25%",
              }}
              image={map}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                지도에서 한 눈에 보기
              </Typography>
              <Typography
                variant="subtitle2"
                align="center"
                color="text.secondary"
                paragraph
              >
                전국에 위치한 미술관 및 박물관, 휴양림,
                관광지 정보를 지도에서 위치 정보를 한 눈에
                파악할 수 있습니다.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                href="kakaomap"
              >
                보러가기
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
}
