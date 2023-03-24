import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { ReactTagify } from "react-tagify";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import {
    StyledPost,
    StyledLink,
    StyledIcon,
    StyledRightDiv,
    StyledContainer,
    StyledSendIcon,
    StyledLeftDiv,
    StyledCommentsContainer,
    StyledNewComments,
    StyledComment
} from './styled';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { AiOutlineComment } from "react-icons/ai";
import Context from '../../context/Context.js';




export default function Post(props) {

  const [msgAberto, setMsgAberto] = useState(false)
  const [newComment, setNewComment] = useState("")
  const { token } = useContext(Context);
  const config = {
    headers: {
      Authorization: `Bearer ${token || localStorage.getItem('token')}`,
    }
  };
  const { id, post, user_image, username, likes, likedByUser, usersLiked, post_url, likeDislikePost, comments_count, allcomments, post_user_id, getAllUsersPosts } = props
  const navigate = useNavigate();
  let listLikes = "";
  const [linkPreviewInfos, setLinkPreviewInfos] = useState({
    title: "",
    images: [],
    description: "",
  });

  if (usersLiked) {
    if (likedByUser === false) {
      if (usersLiked.length > 2) {
        listLikes = usersLiked[0] + ", " + usersLiked[1] + " e outras " + (usersLiked.length - 2) + " pessoas";
      } else if (usersLiked.length === 2) {
        listLikes = usersLiked[0] + " e " + usersLiked[1];
      } else if (usersLiked.length === 2) {
        listLikes = usersLiked[0];
      }
    }
    if (likedByUser === true) {
      if (usersLiked.length === 1) {
        listLikes = "Você";
      } else if (usersLiked.length === 2) {
        listLikes = "Você e " + usersLiked[0];
      } else if (usersLiked.length > 2) {
        listLikes = "Você, " + usersLiked[1] + " e outras " + (usersLiked.length - 2) + " pessoas";
      }
    }


  }

  async function getLinkInfos() {
    try {
      const request = await axios.post(
        `${process.env.REACT_APP_API_URL}/url_fetch`,
        { url: post_url }
      );
      setLinkPreviewInfos(request.data);
    } catch (_) {
      setLinkPreviewInfos({
        title: post_url,
        images: [
          "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png",
        ],
        description: post_url,
      });
    }
  }

  useEffect(() => {
    getLinkInfos();
  }, []);

  const tagStyle = {
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  };

  async function sendComment() {
    if(newComment){
      const body = { comment: newComment }
      const URL = `${process.env.REACT_APP_API_URL}/comment/${id}`
      try {
        await axios.post(URL, body, config);
        setNewComment("");
        getAllUsersPosts()
      } catch (_) {
        alert("An error occured while trying to comment the post, please refresh the page")
      }
    }

  }


  return (
    <StyledContainer key={id}>
      <StyledPost>
        <StyledLeftDiv>
          <img src={user_image} alt="imagem" />
          <StyledIcon
            likedByUser={likedByUser}
            onClick={() => likeDislikePost(id, likedByUser)}
          >
            {likedByUser === true ? <VscHeartFilled /> : <VscHeart />}
          </StyledIcon>



          <p data-tooltip-id={id} className="like-count" data-tooltip-content={listLikes} data-tooltip-variant="light">
            {likes} likes
          </p>
          <Tooltip id={id} place='bottom' style={{ 'font-size': '11px' }} />

          <StyledIcon>
            <AiOutlineComment onClick={() => (msgAberto ? setMsgAberto(false) : setMsgAberto(true))} />

          </StyledIcon>
          <p>{comments_count} comments
          </p>
        </StyledLeftDiv>

        <StyledRightDiv>
          <Link to={`/user/${id}`}>{username}</Link>
          {post !== "" &&
            <h3>{post}</h3>
          }
          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => {
              const cutTag = tag.slice(1, tag.length);
              return navigate(`/hashtag/${cutTag}`);
            }}
          >
          </ReactTagify>
          <StyledLink to={post_url} target="_blank">
            <div className="link">
              <h2>{linkPreviewInfos.title}</h2>
              <p>{linkPreviewInfos.description}</p>
              <p>{post_url}</p>
            </div>
            <img
              src={
                linkPreviewInfos.images.length > 0
                  ? linkPreviewInfos.images[
                  Math.floor(Math.random() * linkPreviewInfos.images.length)
                  ]
                  : "https://i.pinimg.com/originals/9d/1a/a7/9d1aa76c041ff6bf890a90aa92addd76.png"
              }
              alt="imagem"
            />
          </StyledLink>
        </StyledRightDiv>
      </StyledPost>


      {msgAberto &&
        <StyledCommentsContainer>
          {allcomments?.map((c) =>
            <StyledComment key={c.id}>
              <img src={c.user_image} alt="imagem" />
              <div>
                <div className="authorComment">
                  <h2>{c.username}</h2>
                  {post_user_id === c.id_user 
                  &&
                  <h3>• post’s author</h3>
                  }
                  
                </div>

                <p>{c.comment}</p>
              </div>
            </StyledComment>
          )}
          <StyledNewComments>
            <img src={user_image} alt="imagem" />
            <input placeholder="write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></input>
            <StyledSendIcon onClick={sendComment} />
          </StyledNewComments>
        </StyledCommentsContainer>
      }

    </StyledContainer>
  );
}
