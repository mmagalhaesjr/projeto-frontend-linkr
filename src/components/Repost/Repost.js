import { useState } from "react";
import { RepostBox } from "./styled.js";
import ConfirmRepostTimeline from "../ConfirmRepost/ConfirmRepostTimeline";
import ConfirmRepostHashtag from "../ConfirmRepost/ConfirmRepostHashtag.js";
import { BiRepost } from "react-icons/bi";

export default function Repost(props) {
    const { id, reposts, route } = props;
    const [confirm, setConfirm] = useState(false)

    return (
        <>
            {route === 'timeline' && <RepostBox>

                {confirm && <ConfirmRepostTimeline id={id} confirm={confirm} setConfirm={setConfirm} />}
                <button data-test="repost-btn"><BiRepost onClick={() => {
                    setConfirm(true)
                }}></BiRepost></button>
                <p data-test="repost-counter">{reposts} {reposts <= 1 ? 'repost' : 'reposts'}</p>
            </RepostBox>}

            {route === 'hashtag' && <RepostBox>

                {confirm && <ConfirmRepostHashtag id={id} confirm={confirm} setConfirm={setConfirm} />}
                <button data-test="repost-btn"><BiRepost onClick={() => {
                    setConfirm(true)
                }}></BiRepost></button>
                <p data-test="repost-counter">{reposts} {reposts <= 1 ? 'repost' : 'reposts'}</p>
            </RepostBox>}

        </>
    )
}
