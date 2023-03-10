import NavBar from "../../components/NavBar/NavBar";
import { Container, StyledContainer } from "./styled";
import CreatePost from "../../components/CreatePost/CreatePost";
import Post from "../../components/Post/Post";
import HashtagBox from "../../components/HashtagBox/HashtagBox";

export default function TimelinePage() {
  return (
    <>
      <NavBar />
      <Container>
        <StyledContainer>
          <h1>timeline</h1>
          <CreatePost />
          <Post />
          <Post />
        </StyledContainer>
        <HashtagBox/>
      </Container>
    </>
  );
}
