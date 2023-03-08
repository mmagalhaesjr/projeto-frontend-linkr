import NavBar from "../../components/NavBar/NavBar";
import { StyledContainer } from './styled';
import CreatePost from '../../components/CreatePost/CreatePost';
import Post from "../../components/Post/Post";





export default function TimelinePage() {
       return (
              <>

                     <NavBar />

                     <StyledContainer>
                            <h1>timeline</h1>
                            <CreatePost />
                            <Post/>
                            <Post/>
                     </StyledContainer>
              </>


       )
}