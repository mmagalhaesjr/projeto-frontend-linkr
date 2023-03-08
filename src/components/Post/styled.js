import styled from "styled-components";




export const StyledPost = styled.div`
    width: 611px;
    height: 276px;
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-around;

div{
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


`
export const StyledLink = styled.section`
width: 503px;
height: 155px;
border: 1px solid #ffffff;
border-radius: 16px;
display: flex;
align-items: center;
color:#9B9595;
padding-left:10px;
;

div{
width: 303px;

}

img{
    width: 154px;
    height: 155px;
    border-radius: 0px 12px 13px 0px;
    margin-top: 0;
    margin-left: 35px;
    ;
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



