import { StyledPost, StyledButton, StyledInput,  } from './styled';



export default function CreatePost() {
    return (
        
            <StyledPost>
                <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="imagem" />
                <div>
                    <h2>What are you going to share today?</h2>
                    <StyledInput  placeholder='http://...'></StyledInput>
                    <StyledInput className='description' placeholder='Awesome article about #javascript'></StyledInput>
                    <StyledButton>Publish</StyledButton>
                </div>
            </StyledPost>
      



    )
}