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
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const userId = 4 //apenas para teste. Receber essa info junto com token
  const { token, setToken } = useContext(Context);
  const [loading, setLoading] = useState(false)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };
  
  async function getAllUsersPosts() {
    
    try {
      const request = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, config);
      setPosts(request.data);
      setLoading(false);
    } catch (_) {
      alert("An error occured while trying to fetch the posts, please refresh the page")
      setToken(null);
      localStorage.removeItem('token');
      navigate('/');
    }
  }

  useEffect(() => {
    setLoading(true);
    getAllUsersPosts();
  }, []);


  function likeDislikePost(id, likedByUser) {
    const body = {};
    if (likedByUser === false) {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/like`
      const promise = axios.post(url, body, config)
      promise.then((res) => getAllUsersPosts())
      promise.catch(err => { console.log(err) })

    } else {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/dislike`
      const promise = axios.delete(url, config)
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
          <CreatePost getAllUsersPosts={getAllUsersPosts} />
        {loading && <h3>Loading...</h3>}
        {posts && posts.length > 0 && posts.map(post => 
        <Post 
        key={post.id} 
        id={post.id} 
        post={post.post} 
        user_image={post.user_image} 
        username={post.username} 
        likes={post.likes} 
        likedByUser={post.id_liked ? post.id_liked.includes(userId) : false} 
        post_url={post.post_url} 
        likeDislikePost={likeDislikePost}>

        </Post>)}
        {posts.length === 0 && loading === false && <h3>There are no posts yet</h3>}
         
        </StyledContainer>
        <HashtagBox />

      </StyledMain>



    </>
  );
}
