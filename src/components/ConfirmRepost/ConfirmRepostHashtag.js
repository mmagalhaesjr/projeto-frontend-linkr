import { useContext } from "react";
import { WhiteScreen, ConfirmBox, Question, Options, NoBox, YesBox } from "./styledHashtag";
import Context from '../../context/Context.js';
import axios from "axios";

export default function ConfirmRepost(props) {
    const { setConfirm, id } = props;
    const { token } = useContext(Context)

    function Repost(id) {
        console.log(id)

        const config = {
            headers: {
                Authorization: `Bearer ${token || localStorage.getItem('token')}`,
            },
        };

        axios.post(`${process.env.REACT_APP_API_URL}/repost`, { id }, config)
            .then(res => setConfirm(false))
            .catch(err => {
                if (err.response.status === 409) {
                    alert('The post has already been reposted.')
                }
                setConfirm(false)
            })
    }

    return (
        <WhiteScreen>
            <ConfirmBox>
                    <Question>
                        <h1>Do you want to re-post this link?</h1>
                    </Question>
                    <Options>
                    <NoBox data-test="cancel" onClick={() => setConfirm(false)}>
                        <h2>No, cancel</h2>
                    </NoBox>
                    <YesBox data-test="confirm" onClick={() => Repost(id)}>
                        <h2>Yes, share!</h2>
                    </YesBox>
                    </Options>
            </ConfirmBox>
        </WhiteScreen>
    )
}