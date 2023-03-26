import { useState } from "react";
import { RepostBox } from "./styled.js";
import ConfirmRepost from "../ConfirmRepost/ConfirmRepost";
import { BiRepost } from "react-icons/bi";

export default function Repost(props) {
    const { id, reposts, repostedBy } = props;
    const [confirm, setConfirm] = useState(false)

    return (
        <RepostBox>
        {confirm && <ConfirmRepost id={id} confirm={confirm} setConfirm={setConfirm} />}
        <BiRepost></BiRepost>
            <p onClick={() => {
                setConfirm(true)
                }}>{reposts} {reposts <= 1 ? 'repost' : 'reposts'}</p>
        </RepostBox>
    )
}
