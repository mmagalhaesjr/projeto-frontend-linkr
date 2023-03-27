import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainer, StyledMain } from "./styled";
import CreatePost from "../../components/CreatePost/CreatePost";
import NavBar from "../../components/NavBar/NavBar";
import Post from "../../components/Post/Post";
import Context from "../../context/Context";
import HashtagBox from "../../components/HashtagBox/HashtagBox";
import { checkToken } from "../../components/CheckToken/CheckToken.js";
import LoadButton from "../../components/LoadButton/LoadButton";
import useInterval from "use-interval";

export default function TimelinePage() {
  const navigate = useNavigate();
  const [follows, setFollows] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState();
  const [avatar, setAvatar] = useState(
    "https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true"
  );
  const { token, setToken } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [initialCount, setInitialCount] = useState();
  const [finalCount, setFinalCount] = useState();
  const config = {
    headers: {
      Authorization: `Bearer ${token || localStorage.getItem("token")}`,
    },
  };

  async function getAllUsersPosts() {
    try {
      const request = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`,
        config
      );
      const qtdInit = await axios.get(
        `${process.env.REACT_APP_API_URL}/count-posts`,
        config
      );
      setPosts(request.data);
      setInitialCount(qtdInit.data.num_posts);
      setFinalCount(0)
      setLoading(false);
    } catch (_) {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  async function getCountPosts() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/count-posts`,
        config
      );
      setFinalCount(response.data.num_posts - initialCount);
      setLoading(false);
    } catch (_) {
      alert("please refresh the page");
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  useEffect(() => {
    const tokenExists = checkToken();
    if (!tokenExists) {
      navigate("/");
      alert("Faça o login para acessar essa rota.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token || localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`${process.env.REACT_APP_API_URL}/me`, config)
      .then((res) => {
        setUserId(res.data.id);
        setLoading(true);
        getAllUsersPosts();
        setFollows(res.data.following_list);
        getCountPosts();
        setAvatar(res.data.image);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  }, []);

  function likeDislikePost(id, likedByUser) {
    const body = {};
    if (likedByUser === false) {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/like`;
      const promise = axios.post(url, body, config);
      promise.then((res) => getAllUsersPosts());
      promise.catch((err) => {
        console.log(err);
      });
    } else {
      const url = `${process.env.REACT_APP_API_URL}/post/${id}/dislike`;
      const promise = axios.delete(url, config);
      promise.then(() => getAllUsersPosts());
      promise.catch((err) => {
        console.log(err);
      });
    }
  }

  useInterval(() => {
    getCountPosts();
  }, 15000);

  return (
    <>
      <NavBar />
      <StyledMain>
        <StyledContainer>
          <h1>timeline</h1>
          <CreatePost getAllUsersPosts={getAllUsersPosts} avatar={avatar} />
          {finalCount > 0 ? (
            <LoadButton
              onClick={() => {
                getAllUsersPosts();
              }}
              finalCount={finalCount}
            />
          ) : (
            ""
          )}
          {loading && <h3>Loading...</h3>}
            {posts &&
              posts.length > 0 &&
              posts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  post={post.post}
                  user_image={post.user_image}
                  username={post.username}
                  likes={post.likes}
                  likedByUser={
                    post.id_liked ? post.id_liked.includes(userId) : false
                  }
                  post_url={post.post_url}
                  likeDislikePost={likeDislikePost}
                  usersLiked={post.names_liked}
                  comments_count={post.comments_count}
                  allcomments={post.allcomments}
                  post_id_user={post.id_user}
                  getAllUsersPosts={getAllUsersPosts}
                  reposts={post.reposts}
                  repostedBy={post.repostedByName}
                  userId={userId}
                  repostedById={post.repostedById}
                  route={"timeline"}
                  follows={follows}
                ></Post>
              ))}
          {posts.length === 0 && loading === false && (
            <h3 data-test="message">There are no posts yet</h3>
          )}
        </StyledContainer>
        <HashtagBox getAllUsersPosts={getAllUsersPosts} />
      </StyledMain>
    </>
  );
}
