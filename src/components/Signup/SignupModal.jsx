import styled from "styled-components";
import uncheckIcon from "../../assets/icon/uncheck-circle.svg";
import checkIcon from "../../assets/icon/check-circle.svg";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { getNicknameCheck, postKakaoLogin } from "../../api/apiUser";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/user/atom";

const SignupModal = () => {
  // 저장 테스트
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    setUser({ userId: 3 });
  }, []);

  //
  let params = new URL(document.URL).searchParams;
  let authorizationCode = params.get("code");

  const navigate = useNavigate();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [nickname, setNickname] = useState("");
  const [checkNickname, setCheckNickname] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openPostcode, setOpenPostcode] = useState(false);
  const [address, setAddress] = useState("");

  const KakaoLoginApi = async () => {
    if (!authorizationCode || nickname === "") {
      alert("입력값을 모두 입력해주세요!");
      return;
    }

    if (!checkNickname) {
      alert("닉네임 중복 확인을 진행해주세요!");
      return;
    }

    if (isChecked2 && (address === "" || !address || address === undefined)) {
      alert("관심 장소를 등록해주세요!");
      return;
    }

    let data = {
      authorizationCode: authorizationCode,
      nickname: nickname,
      region: address,
      newVolunteerAlarm: isChecked1,
      weatherAlarm: isChecked2,
    };

    let res = await postKakaoLogin(data);

    if (res) {
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      // 토큰 값 localstorage에다가 저장!
      console.log("로그인에 성공했습니다!");
      navigate("/main");
    }
  };

  const onChangeNickname = (data) => {
    setNickname(data);
    setCheckNickname(false);
  };

  const onCheckNickname = async () => {
    // 닉네임 중복 확인 api 불러오기
    if (nickname === "" || nickname === undefined || !nickname) {
      alert("닉네임을 올바르게 입력해주세요");
      return;
    }
    let data = await getNicknameCheck(nickname);
    if (data) {
      setCheckNickname(true);
    }
  };

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

  return (
    <>
      <ModalContainer>
        <ModalContent>
          <Title>
            반가워요! <br /> 닉네임을 설정해주세요.
          </Title>
          <InputBox>
            <InputTitle>
              닉네임<span style={{ color: "red" }}>*</span>
            </InputTitle>
            <Input
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => onChangeNickname(e.target.value.trim())}
            />
            {checkNickname ? (
              <InputButton style={{ backgroundColor: "#cf8443" }}>
                사용 가능
              </InputButton>
            ) : (
              <InputButton onClick={onCheckNickname}>중복 확인</InputButton>
            )}
            <InputExplain>3~8자 이상으로 공백 없이 입력해주세요</InputExplain>
          </InputBox>
          <AgreeBox>
            <img
              src={isChecked1 ? checkIcon : uncheckIcon}
              alt={"미동의"}
              onClick={() => setIsChecked1(!isChecked1)}
              style={{ height: "25px" }}
            />
            <AgreeNotice>선택</AgreeNotice>
            <div>오늘의 날씨 알림 동의</div>
          </AgreeBox>
          <AgreeBox>
            <img
              src={isChecked2 ? checkIcon : uncheckIcon}
              alt={"미동의"}
              onClick={() => setIsChecked2(!isChecked2)}
              style={{ height: "25px" }}
            />
            <AgreeNotice>선택</AgreeNotice>
            <div>내 지역 새로운 게시글 알림 동의</div>
          </AgreeBox>
          {isChecked2 && (
            <>
              <InputBox>
                <InputTitle>내 장소 설정</InputTitle>
                <Input
                  id="addr"
                  readOnly
                  placeholder="장소를 입력해주세요"
                  value={address}
                  onClick={handle.clickButton}
                />
                <InputButton onClick={handle.clickButton}>
                  위치 검색
                </InputButton>
                <InputExplain>
                  알림을 위해서 관심 장소를 입력해주세요
                </InputExplain>
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
          <Button onClick={KakaoLoginApi}>시작하기</Button>
        </ModalContent>
      </ModalContainer>
    </>
  );
};

// 모달창
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  //align-items: center;
  margin-top: 60px;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  width: 90%;
  max-width: 400px;
  height: fit-content;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
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

const InputExplain = styled.div`
  padding: 3px;
  font-size: 0.6rem;
  color: #949494;
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

const AgreeBox = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  padding: 5px 0;
  width: 100%;
  font-size: 0.8rem;
`;

const AgreeNotice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 3px 5px;
  border-radius: 5px;
  color: #949494;
  font-size: 0.7rem;
  background-color: #e8e8e8;
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
  margin: 20px 0;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background: #49beb7;
  cursor: pointer;
`;

export default SignupModal;
