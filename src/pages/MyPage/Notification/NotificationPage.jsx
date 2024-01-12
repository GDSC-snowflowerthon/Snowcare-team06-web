import styled from "styled-components";
import DetailHeader from "../../../components/Common/DetailHeader";
import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { getUsers, patchSetting } from "../../../api/apiUser";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil/user/atom";

const NotificationPage = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const [weatherAlarm, setWeatherAlarm] = useState(false);
  const [newVolunteerAlarm, setNewVolunteerAlarm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState("");

  const handleOk = () => {
    setIsModalOpen(false);
    setOpenPostcode(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setOpenPostcode(false);
  };

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setIsModalOpen(true);
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: async (data) => {
      console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
      setAddress(data.address);
      setIsModalOpen(false);
      setOpenPostcode(false);
      let coords = await getAddressCoords(data.address);
      let x = coords.getLng();
      let y = coords.getLat();
      console.log(x, y);
    },
  };

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

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = async () => {
    let data = await getUsers();
    if (data) {
      console.log(data);
      setAddress(data?.region);
      setNewVolunteerAlarm(data.newVolunteerAlarm);
      setWeatherAlarm(data.weatherAlarm);
    }
  };

  const onClickSubmit = async () => {
    if (newVolunteerAlarm) {
      if (address === "" || !address || address === undefined) {
        alert("관심 장소를 선택해주세요.");
        return;
      }
    }
    let data = {
      userId: user.userId,
      region: address,
      newVolunteerAlarm: newVolunteerAlarm,
      weatherAlarm: weatherAlarm,
    };
    let res = await patchSetting(data);
    if (res) {
      console.log(res);
      alert("정보 변경이 완료되었습니다.");
      navigate(`/mypage`);
    }
  };
  return (
    <Container>
      <DetailHeader />
      <InnerContainer>
        <Title>알림 설정하기</Title>
        <CheckContainer>
          <div>
            <Text>날씨 알림</Text>
            <Explain>아침 9시에 카톡으로 날씨 알림</Explain>
          </div>
          <ToggleSwitch isToggled={weatherAlarm} setToggled={setWeatherAlarm} />
        </CheckContainer>
        <CheckContainer>
          <div>
            <Text>내 장소 봉사활동 알림</Text>
            <Explain>관심 장소 주변에 봉사활동 글이 올라오면 알림</Explain>
          </div>
          <ToggleSwitch
            isToggled={newVolunteerAlarm}
            setToggled={setNewVolunteerAlarm}
          />
        </CheckContainer>
        {newVolunteerAlarm && (
          <>
            <InputBox>
              <InputTitle>알림을 위해서 관심 장소를 입력해주세요.</InputTitle>
              <Input
                id="addr"
                readOnly
                placeholder="장소를 입력해주세요"
                value={address}
                onClick={handle.clickButton}
              />
              <InputButton onClick={handle.clickButton}>위치 검색</InputButton>
            </InputBox>
            {openPostcode && (
              <AddressModal
                title="주소 검색창"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <AddressSearchBox
                  onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                  //defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어
                />
              </AddressModal>
            )}
          </>
        )}
        <Button onClick={onClickSubmit}>저장하기</Button>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 800;
`;

const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
`;

const Text = styled.div`
  padding-bottom: 10px;
`;

const Explain = styled.div`
  font-size: 0.7rem;
  color: #6e6e6e;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  font-size: 0.9rem;
`;

const InputTitle = styled.div`
  padding-bottom: 5px;
  font-size: 0.8rem;
  color: #171717;
`;

const Input = styled.input`
  padding: 10px 16px;
  border: 1px solid #49beb7;
  border-radius: 8px;
  background: rgba(73, 190, 183, 0.16);
`;

const InputButton = styled.button`
  position: absolute;
  right: 5px;
  top: 42px;
  padding: 5px 3px;
  width: 50px;
  border: none;
  border-radius: 10px;
  line-height: 1;
  font-size: 0.6rem;
  color: white;
  background-color: #727272;
`;

const AddressModal = styled(Modal)`
  .ant-modal-header {
    padding-top: 15px;
    padding-left: 20px;
  }

  .ant-modal-footer {
    padding-bottom: 15px;
    padding-right: 20px;
  }

  .ant-modal-content {
    padding: 0;
  }
`;

const AddressSearchBox = styled(DaumPostcode)`
  width: min-content;
  .daum_popup {
    width: 100px !important;
  }
`;

const Button = styled.button`
  margin-top: 100px;
  margin-bottom: 20px;
  padding: 12px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #49beb7;
  cursor: pointer;
`;
export default NotificationPage;
