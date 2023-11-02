import axios from "axios";
import { useEffect, useState } from "react";

function MapData() {
  const [mapData, setMapData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "	http://api.data.go.kr/openapi/tn_pubr_public_museum_artgr_info_api?serviceKey=KFieINubx7bX1LHClrlJ1GpUDtGwqKJTry7hXJIcxlwKRHFvXbZXB%2BON665rP%2BR%2FSck7uK%2FtM3E3UtT3xcEkjg%3D%3D&type=json"
      );

      console.log(response.data);
      // API 응답의 items 확인
      const items = response.data.response.body.items;
      console.log(items);

      if (!items || items.length === 0) {
        console.error(
          "No items found in the API response."
        );
        return;
      }
      // 예: 첫 번째 아이템의 이름 출력
      console.log("첫 번째 박물관 이름:", items[0].fcltyNm);
      // 필요한 로직 수행
      const extractedData = items.map((item) => ({
        name: item.fcltyNm,
        latitude: item.latitude,
        longitude: item.longitude,
      }));

      setMapData(extractedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {mapData.map((mapdata, index) => (
        <div key={index}>
          {mapdata.name},{mapdata.latitude},
          {mapdata.longitude}asd
        </div>
      ))}
    </div>
  );
}

export default MapData;
