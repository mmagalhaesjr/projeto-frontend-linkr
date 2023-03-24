import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSend } from "react-icons/bs";

export const StyledContainer = styled.div`
    width: 611px;
    margin-bottom: 16px;
    border-radius: 16px;
    background: #1E1E1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const StyledLeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 11px;
    color: #FFFFFF;
    width: 80px;
    padding-left: 10px;
`
export const StyledPost = styled.div`
    width: 611px;
    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    justify-content: space-around;
    

a{
    font-family: 'Lato', sans-serif; 
    font-weight:400;
    font-size: 19px;
    color: #FFFFFF;
}

.link{
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    width: 503px;    
}



img{
    width: 53px;
    height: 53px;
    border-radius: 50%;
    margin-top: 16px;
    padding: 1px;
    padding-right: 0px;
}


h2{
    font-family: 'Lato', sans-serif; 
    font-weight:400;
    font-size: 19px;
    color: #FFFFFF;

}

h3{
    color:#B7B7B7;
    font-weight: 400;
    font-size: 17px;

}

@media (max-width:611px){
       width: 100vw;
       h2{
        font-size: 15px;
       }
       h3{
        font-size: 15px;
       }
       
    }


`
export const StyledIcon = styled.div`
      color: ${props => props.likedByUser ? "red" : "#FFFFFF"};
      font-size: 20px;
      margin-top: 19px;
`

export const StyledLink = styled(Link)`
width: 503px;
height: 155px;
border: 1px solid #ffffff;
border-radius: 16px;
display: flex;
align-items: center;
color:#9B9595;
padding-left:10px;



div{
width: 303px;

}

img{
    width: 154px;
    height: 155px;
    border-radius: 0px 12px 13px 0px;
    margin-top: 0;
    margin-left: 37px;
    
}
h2{
    font-size: 16px;
}
p{
    margin-top: 5px;
    margin-bottom: 13px;
    font-size: 11px;
}



`
export const StyledComment = styled.div`
display: flex;
color:#ffffff;
align-items: center;
border-bottom: 1px solid #353535;

h2{
    font-size: 14px;
}

p{
    font-size: 14px;
    color: #ACACAC;
    margin-top: 3px;
    align-items: center;
}

img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-top: 13px;
    margin-bottom: 16px;
    margin-right: 18px;
}
h3{
    font-size: 14px;
    color: #565656;
    margin-left: 4px;
}
.authorComment{
    display: flex;
}
`
export const StyledCommentsContainer = styled.div`
width: 571px;
`

export const StyledNewComments = styled.div`
    display: flex;
    
    img{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-top: 13px;
    margin-bottom: 16px;

}
    input{
    width: 510px;
    height: 39px;
    background: #252525;
    margin-top: 19px;
    margin-left:14px;
    border:none;
    border-radius: 8px;
    padding-left: 10px;
}
`

export const StyledSendIcon = styled(BsSend)`
  color:#ffffff;
  position: relative;
  right: 30px;
  top:32px;
  
`;



export const StyledRightDiv = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 11px;
    color: #FFFFFF;
    margin: auto;

`