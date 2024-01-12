import { apiClient } from "./apiClient";

// 메인 페이지 최신 글 3개
export const getVolunteersRecent = async (userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.get(
      `/volunteers/recent?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
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

// 봉사활동 구인글 목록
export const getVolunteers = async (userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.get(`/volunteers?userId=${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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

// 매칭 글 상세 조회
export const getVolunteerDetail = async (volunteerId, userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.get(
      `/volunteers/${volunteerId}?userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
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

// 봉사활동 글 작성하기
export const postVolunteerWrite = async (data) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.post(
      `/volunteers/new`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      data
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

// 봉사활동 글 좋아요
export const getVolunteerLikes = async (volunteerId, userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.post(
      `/likes/volunteer?userId=${userId}&volunteerId=${volunteerId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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

// 봉사활동 글 좋아요 취소
export const getVolunteerUnlikes = async (volunteerId, userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.delete(
      `likes/volunteer/del?userId=${userId}&volunteerId=${volunteerId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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

// 좋아요한 봉사활동 구인글 목록
export const getVolunteersUserLike = async (userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.get(`/likes/volunteer/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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

// 봉사활동 댓글 추가
export const postVolunteerComment = async (data) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.post(
      `comments/volunteer`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      data
    );
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
