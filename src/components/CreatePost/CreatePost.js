import { StyledPost, StyledButton, StyledInput, } from './styled';
import { useState } from "react";
import axios from 'axios';



export default function CreatePost() {

    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [load, setLoad] = useState(false);
    const token = '';
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function publishPost(e) {
        e.preventDefault()
        setLoad(true)

        const body = {
            url: url,
            description: description
        }

        const URL = ` ${process.env.REACT_APP_API_URL}/post`
        const promise = axios.post(URL, body, config)

        promise.then(() => { setLoad(false); setUrl(""); setDescription("") })
        promise.catch(err => { alert('There was an error publishing your link'); setLoad(false) })
    }

return (

    <StyledPost>
        <img src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="imagem" />
        <form onSubmit={publishPost}>
            <h2>What are you going to share today?</h2>
            <StyledInput type="url" placeholder='http://...' value={url} onChange={e => setUrl(e.target.value)} disabled={load} required ></StyledInput>
            <StyledInput className='description' value={description} placeholder='Awesome article about #javascript' onChange={e => setDescription(e.target.value)} disabled={load} required ></StyledInput>
            <StyledButton disabled={load}>
                {load ? 'Publishing' : 'Publish'}
            </StyledButton>
        </form>
    </StyledPost>

)

}