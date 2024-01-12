import { useEffect } from "react";
import styled from "styled-components";

const MatchingMap = ({ address }) => {
  // const [map, setMap] = useState();
  // const [marker, setMarker] = useState();

  const { kakao } = window;

  useEffect(() => {
    findLocation(address);
  }, []);

  const geoCoder = new window.kakao.maps.services.Geocoder();

  const getAddressCoords = (address) => {
    return new Promise((resolve, reject) => {
      geoCoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].x, result[0].y);
          resolve(coords);
        } else {
          reject(status);
        }
      });
    });
  };

  const findLocation = async (address) => {
    let coords = await getAddressCoords(address);
    let x = coords.getLng();
    let y = coords.getLat();
    console.log(x, y);

    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(x, y),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(x, y);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  };

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
