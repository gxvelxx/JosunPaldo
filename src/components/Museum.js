import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Museum() {
  const navigate = useNavigate();
  const [museumList, setMuseumList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=KFieINubx7bX1LHClrlJ1GpUDtGwqKJTry7hXJIcxlwKRHFvXbZXB%2BON665rP%2BR%2FSck7uK%2FtM3E3UtT3xcEkjg%3D%3D&pageNo=${currentPage}&type=json`
      );

      // console.log(response.data);
      // API 응답의 items 확인
      const items = response.data.response.body.items;
      // console.log(items);

      if (!items || items.length === 0) {
        console.error(
          "No items found in the API response."
        );
        return;
      }
      // 예: 첫 번째 아이템의 이름 출력
      // console.log("첫 번째 박물관 이름:", items[0].fcltyNm);
      // 필요한 로직 수행
      const extractedData = items.map((item) => ({
        name: item.fcltyNm,
        address: item.rdnmadr,
        phoneNumber: item.operPhoneNumber,
        weekdayOpen: item.weekdayOperOpenHhmm,
        weekdayClose: item.weekdayOperColseHhmm,
        holidayOpen: item.holidayOperOpenHhmm,
        holidayClose: item.holidayCloseOpenHhmm,
        dayOff: item.rstdeInfo,
        adultCharge: item.adultChrge,
        youthCharge: item.yngbgsChrge,
        childCharge: item.childChrge,
      }));

      setMuseumList((prevList) => [
        ...prevList,
        ...extractedData,
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("데이터 가져오기 중 오류 발생:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight +
        document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!isLoading) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

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
        <Grid container spacing={3}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoBack}
            sx={{ mb: 1 }}
          >
            뒤로가기
          </Button>
          {museumList.map((museum, index) => (
            <Card key={index} sx={{ width: "100%", mb: 1 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {museum.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  paragraph
                >
                  {museum.address}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  paragraph
                >
                  {museum.phoneNumber}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  paragraph
                >
                  평일: {museum.weekdayOpen} -{" "}
                  {museum.weekdayClose}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  paragraph
                >
                  공휴일: {museum.holidayOpen} -{" "}
                  {museum.holidayClose}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  paragraph
                >
                  휴관 정보: {museum.dayOff}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  paragraph
                >
                  어른 관람료: {museum.adultCharge} 청소년
                  관람료: {museum.youthCharge} 어린이
                  관람료: {museum.childCharge}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        {isLoading && (
          <Typography variant="body2" color="textSecondary">
            데이터 불러오는 중...
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Museum;
