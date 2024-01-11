import { apiClient } from "./apiClient";

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
