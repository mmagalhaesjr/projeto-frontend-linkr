import { StyledPost, StyledLink } from './styled';



export default function Post() {
    return (
        
            <StyledPost>
                <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="imagem" />
                <div>
                    <h2>Juvenal Juvêncio</h2>
                    <h3>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</h3>
                    <StyledLink>
                        <div>
                            <h2>Como aplicar o Material UI em um projeto React</h2>
                            <p>Hey! I have moved this tutorial to my personal blog. Same content, 
                            new location. Sorry about making you click through to another page.</p>
                            <p>https://medium.com/@pshrmn/a-simple-react-router</p>
                        </div>
                        
                        <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="imagem" />
                    </StyledLink>
                </div>
            </StyledPost>
      



    )
}