import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import {
  Container,
  InsideContainer,
  LeftContent,
  MainContainer,
  Title,
} from "./styled";
import HashtagBox from "../../components/HashtagBox/HashtagBox";

export default function HashtagPage() {
  const { hashtag } = useParams();
  console.log(hashtag);

  return (
    <>
      <NavBar />
      <Container>
        <InsideContainer>
          <Title># postgres</Title>
          <MainContainer>
            <LeftContent>
              <Post />
              <Post />
              <Post />
              <Post />
            </LeftContent>
            {/* <RightContent></RightContent> */}
            <HashtagBox></HashtagBox>
          </MainContainer>
        </InsideContainer>
      </Container>
    </>
  );
}
