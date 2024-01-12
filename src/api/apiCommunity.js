import { apiClient } from "./apiClient";

// 커뮤니티 글 목록 조회
export const getCommunity = async (userId) => {
  try {
    // const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.get(`/community?userId=${userId}`);
    // const response = await apiClient.get(`/community?userId=${userId}`);
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
export const getCommunityDetail = async (postId, userId) => {
  try {
    const response = await apiClient.get(
      `/community/${postId}?userId=${userId}`
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

// 커뮤니티 글 작성하기
export const postCommunityWrite = async (data) => {
  try {
    // const accessToken = localStorage.getItem("accessToken");
    const response = await apiClient.post(
      `/community/new`,
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //     "Content-type": "multipart/form-data",
      //   },
      // },
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

// 커뮤니티 글 좋아요
export const getCommunityLikes = async (communityArticleId, userId) => {
  try {
    const response = await apiClient.post(
      `/likes/community?communityArticleId=${communityArticleId}&userId=${userId}`
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

// 커뮤니티 글 좋아요 취소
export const getCommunityUnlikes = async (communityArticleId, userId) => {
  try {
    const response = await apiClient.delete(
      `/likes/community/del?communityArticleId=${communityArticleId}&userId=${userId}`
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

// 좋아요한 커뮤니티 글 목록 조회
export const getCommunityUserLike = async (userId) => {
  try {
    const response = await apiClient.get(`/likes/community/${userId}`);
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

// 커뮤니티 댓글 추가
export const postCommunityComment = async (data) => {
  try {
    const response = await apiClient.post(`comments/community`, data);
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
