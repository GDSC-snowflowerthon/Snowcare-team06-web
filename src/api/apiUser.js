import { apiClient } from "./apiClient";

// 카카오 로그인
export const postKakaoLogin = async (data) => {
  try {
    const response = await apiClient.post(`/auth/kakao`, data);
    console.log(response);
    return response?.data;
  } catch (err) {
    console.log(err);
    if (err?.response?.data?.detail) {
      alert(err?.response?.data?.detail);
    }
    return false;
  }
};

// 닉네임 중복 조회
export const getNicknameCheck = async (nickname) => {
  try {
    const response = await apiClient.get(`/users/nickname/${nickname}`);
    console.log(response);
    return true;
  } catch (err) {
    console.log(err);
    if (err?.response?.data?.detail) {
      alert(err?.response?.data?.detail);
    }
    return false;
  }
};

// 회원 정보 조회
export const getUsers = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    console.log(response);
    return response?.data;
  } catch (err) {
    console.log(err);
    if (err?.response?.data?.detail) {
      alert(err?.response?.data?.detail);
    }
    return false;
  }
};

// 설정 수정
export const patchSetting = async (data) => {
  try {
    const response = await apiClient.patch(`/users/setting`, data);
    console.log(response);
    return response?.data;
  } catch (err) {
    console.log(err);
    if (err?.response?.data?.detail) {
      alert(err?.response?.data?.detail);
    }
    return false;
  }
};

// 닉네임 변경
export const patchNickname = async (userId, nickname) => {
  try {
    const response = await apiClient.patch(
      `/users/nickname-edit?userId=${userId}&nickname=${nickname}`
    );
    console.log(response);
    return response?.data;
  } catch (err) {
    console.log(err);
    if (err?.response?.data?.detail) {
      alert(err?.response?.data?.detail);
    }
    return false;
  }
};
