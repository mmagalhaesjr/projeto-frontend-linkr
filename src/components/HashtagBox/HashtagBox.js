import { Box, Diviser, StyledLink, Title } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HashtagBox() {
  const [data, setData] = useState([]);

  const token = localStorage.getItem('token')

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/hashtag`;

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
  }, [token]);

  return (
    <Box>
      <Title>trending</Title>
      <Diviser />
      {data?.map((el,i) => (
        <StyledLink key={i} to={`/hashtag/${el}`}># {el}</StyledLink>
      ))}
    </Box>
  );
}
