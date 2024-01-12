import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { postCommunityComment } from "../../api/apiCommunity";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/user/atom";

const CommunityComment = ({ postId, commentData }) => {
  const [comment, setComment] = useState("");
  const user = useRecoilValue(userState);

  const onSubmitComment = () => {
    if (!comment || comment === "") {
      alert("댓글을 작성해주세요");
      return;
    }
    postCommentApi();
  };

  const postCommentApi = async () => {
    const formData = new FormData();
    formData.append("userId", user.userId);
    formData.append("postId", postId);
    formData.append("content", comment);
    let res = await postCommunityComment(formData);
    if (res) {
      console.log("댓글 반영 완료!");
      window.location.reload();
    }
  };

  return (
    <>
      <Container>
        {commentData.length > 0 &&
          commentData.map((item) => (
            <CommentBox key={item.commentId}>
              <ContentBox>
                <GrayText>{item.userNickname}</GrayText>
                <ContentText>{item.content}</ContentText>
                <GrayText>{item.createdDate}</GrayText>
              </ContentBox>
              <Divider />
            </CommentBox>
          ))}
      </Container>
      <InputContainer>
        <InputInnerContainer>
          <Input
            placeholder="댓글을 작성해주세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <InputButton onClick={onSubmitComment}>
            <FaPlus style={{ color: "white", fontSize: "20px" }} />
          </InputButton>
        </InputInnerContainer>
      </InputContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  width: 100%;
`;

const GrayText = styled.div`
  color: #6c757d;
  font-size: 0.7rem;
`;

const ContentText = styled.div`
  color: #1f2024;
  font-size: 0.7rem;
  line-height: 2;
`;

const Divider = styled.div`
  width: 92%;
  height: 1px;
  background-color: #d4d6dd;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const InputInnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  gap: 10px;
`;

const Input = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  height: 40px;
  border: 1px solid #49beb7;
  border-radius: 20px;
  background: rgba(73, 190, 183, 0.16);
  resize: none;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 50%;
  background-color: #49beb7;
  cursor: pointer;
`;

export default CommunityComment;
