import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import { Container, LeftContent, Title } from "./styled";
import HashtagBox from "../../components/HashtagBox/HashtagBox";
import { useState,useEffect } from "react";
import axios from "axios";
export default function HashtagPage() {
  const { hashtag } = useParams();
  const [data,setData] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.message);
      });
  }, [token,hashtag]);


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
