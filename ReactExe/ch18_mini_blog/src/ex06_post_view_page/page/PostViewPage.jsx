import CommentList from "../list/CommentList";
import CommentListItem from "../list/CommentListItem";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../data/data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  const navigate = useNavigate();

  // post/:post_id와 <PostViewPage/> 매핑되어 있음
  // 그러므로 :post_id값을 받으려면 아래처럼 useParams()를 사용하면 된다.
  const { postId } = useParams();

  // postId와 일치하는 글을 data.json에서 찾아서 가져와라
  const post = data.find((item) => {
    return item.id === Number(postId);
  });

  const [comment, setConmment] = useState("");

  return (
    <Wrapper>
      <Container>
        <Button
          title="메인 page 이동"
          onClick={() => {
            navigate("/");
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setConmment(event.target.value);
          }}
        />
        <Button
          title="댓글 입력"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
