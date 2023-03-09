import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import { Container, LeftContent, Title } from "./styled";
import HashtagBox from "../../components/HashtagBox/HashtagBox";

export default function HashtagPage() {
  const { hashtag } = useParams();

  return (
    <>
      <NavBar />
      <Container>
        <LeftContent>
          <Title># {hashtag}</Title>
          <Post />
          <Post />
          <Post />
          <Post />
        </LeftContent>
        <HashtagBox/>
      </Container>
    </>
  );
}
