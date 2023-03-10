import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StyledContainer, StyledMain } from './styled';
import CreatePost from "../../components/CreatePost/CreatePost";
import NavBar from "../../components/NavBar/NavBar";

import Post from "../../components/Post/Post";
import Context from "../../context/Context";
import HashtagBox from '../../components/HashtagBox/HashtagBox';

export default function TimelinePage() {
  const [posts, setPosts] = useState([]);


  const navigate = useNavigate();
  const { token, setToken } = useContext(Context);

  async function getAllUsersPosts() {
    try {
      const request = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(request.data);
    } catch (_) {
      setToken(null);
      localStorage.removeItem('token');
      navigate('/');
    }
  }
  
    useEffect(() => {
      getAllUsersPosts();
    }, []);
  
  

  function likeDislikePost(id, likedByUser) {


    if (likedByUser === false) {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/like`
      const promise = axios.post(url)
      promise.then(() => getAllUsersPosts())
      promise.catch(err => { console.log(err) })

    } else {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/dislike`
      const promise = axios.post(url,)
      promise.then(() => getAllUsersPosts())
      promise.catch(err => { console.log(err) })
    }
  }


  return (
    <>
      <NavBar />
      <StyledMain>
        <StyledContainer>
          <h1>timeline</h1>
          <CreatePost />
          {posts && posts.length > 0 && posts.map(post => <Post key={post.id} id={post.id} post={post.post} user_image={post.user_image} username={post.username} likes={post.likesCount} likedByUser={false} post_url={post.post_url} likeDislikePost={likeDislikePost}></Post>)}

        </StyledContainer>
        <HashtagBox />

      </StyledMain>



    </>
  );
}
