import { Bar, Logo, LogoutFocus } from "./styled";
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <Bar>
            <Logo>linkr</Logo>
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
                <img onClick={() => setOpen(!open)} src="https://i.kym-cdn.com/photos/images/newsfeed/002/304/580/313.jpg" alt="" />
                {open && <h2
                    onClick={() => {
                        localStorage.clear()
                        navigate('/')
                    }}>Logout</h2>}
            </div>
            {open && <LogoutFocus onClick={() => setOpen(false)}>OIe</LogoutFocus>}
        </Bar>
    )
}