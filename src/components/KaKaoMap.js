import {
  Map,
  MapMarker,
  ZoomControl,
  MarkerClusterer,
} from "react-kakao-maps-sdk";

import axios from "axios";
import { useEffect, useState } from "react";
import dummy from "./dummy.json";

import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import {
  getAuth,
  signOut, // Firebase 로그아웃 메서드 추가
} from "firebase/auth";

const KakaoMap = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // 로그아웃 성공 시, 홈 페이지로 리다이렉트
        window.location.href = "/"; // 페이지를 리로드하거나 적절한 리다이렉션 방법을 사용하실 수 있습니다.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <Container component="main" maxWidth="xs">
      <Button
        type="button"
        fullWidth
        variant="contained"
        onClick={handleLogout}
        sx={{ mt: 2, mb: 1 }}
      >
        로그아웃
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleGoBack}
        sx={{ mb: 1 }}
      >
        뒤로가기
      </Button>
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "100vh" }}
        level={14}
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          {dummy.items.map((loc, idx) => (
            <MapMarker
              key={idx}
              position={{
                lat: loc.latitude,
                lng: loc.longitude,
              }}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                size: { width: 24, height: 35 },
              }}
              title={loc.fcltyNm}
            />
          ))}
        </MarkerClusterer>
        <ZoomControl />
      </Map>
    </Container>
  );
};

export default KakaoMap;
