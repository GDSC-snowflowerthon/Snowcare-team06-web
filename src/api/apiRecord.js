import { apiClient } from "./apiClient";

// 봉사기록 글 목록 조회
export const getRecords = async (userId) => {
  try {
    const response = await apiClient.get(`/users/record?userId=${userId}`);
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

// 커뮤니티 글 상세 조회
export const getRecordDetail = async (userVolunteerPostId, userId) => {
  try {
    const response = await apiClient.get(
      `/users/record/${userVolunteerPostId}?userId=${userId}`
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

// 봉사기록 글 작성하기
export const postRecordWrite = async (data) => {
  try {
    const response = await apiClient.post(`/users/record/new`, data);
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
