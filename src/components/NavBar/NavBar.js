import { Bar, Logo, LogoutFocus, LogOutBar } from "./styled";
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState('https://filestore.community.support.microsoft.com/api/images/6061bd47-2818-4f2b-b04a-5a9ddb6f6467?upload=true');

    useEffect(() => {
        const token = localStorage.getItem('token');

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        axios.get(`${process.env.REACT_APP_API_URL}/me`, config)
        .then((res) => {
            setAvatar(res.data.image)
        })
        .catch((err) => {
            alert(err.message)
        })
    }, [])

    return (
        <Bar>
            <Logo onClick={()=>navigate("/timeline")} >linkr</Logo>
            <div>
                {!open && <VscChevronUp
                    size={30}
                    style={{ position: 'absolute', top: 22, right: 85, zIndex: 3 }}
                    color={"#ffffff"}
                    onClick={() => setOpen(true)}
                />}
                {open && <VscChevronDown
                    size={30}
                    style={{ position: 'absolute', top: 22, right: 85, zIndex: 3 }}
                    color={"#ffffff"}
                    onClick={() => setOpen(false)}
                />}
                <img data-test="avatar" onClick={() => setOpen(!open)} src={avatar} alt="avatar" />
                {open &&
                    <LogOutBar data-test="menu">
                        <h2
                            data-test="logout"
                            onClick={() => {
                                localStorage.clear()
                                navigate('/')
                            }}>Logout</h2>
                    </LogOutBar>
                }
            </div>
            {open && <LogoutFocus onClick={() => setOpen(false)}>OIe</LogoutFocus>}
        </Bar>
    )
}