import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function MiniBlogApp(props) {
  return (
    <BrowserRouter>
      <MainTitleText>나의 미니 블로그</MainTitleText>
      <Routes>
        {/* index 는 path='/'과 같은 역할 */}
        <Route index element={null} />
        <Route path="post-write" element={null} />
        <Route path="post/:postId" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default MiniBlogApp;
