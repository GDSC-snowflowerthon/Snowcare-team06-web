import { useEffect, useState } from "react";
import styled from "styled-components";

const MatchingMap = () => {
  // const [map, setMap] = useState();
  // const [marker, setMarker] = useState();

  const { kakao } = window;

  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  // 1) 카카오맵 불러오기
  // useEffect(() => {
  //   window.kakao.maps.load(() => {
  //     const container = document.getElementById("map");
  //     const options = {
  //       center: new kakao.maps.LatLng(33.450701, 126.570667),
  //       level: 3,
  //     };

  //     setMap(new kakao.maps.Map(container, options));
  //     setMarker(new kakao.maps.Marker());
  //     console.log(map);
  //   });
  // }, []);

  return (
    <Container>
      <div id="map" style={{ width: "100%", height: "200px" }}></div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default MatchingMap;
