import { Box, Diviser, StyledLink, Title } from "./styled";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Context from "../../context/Context";

export default function HashtagBox({getAllUsersPosts}) {
  const [data, setData] = useState([]);

  const {token} = useContext(Context); 

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/hashtag`;

    const config = {
      headers: {
        Authorization: `Bearer ${token || localStorage.getItem('token')}`,
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
  }, [token,getAllUsersPosts]);

  return (
    <Box data-test="trending">
      <Title>trending</Title>
      <Diviser />
      {data?.map((el,i) => (
        <StyledLink data-test="hashtag" key={i} to={`/hashtag/${el}`}># {el}</StyledLink>
      ))}
    </Box>
  );
}
