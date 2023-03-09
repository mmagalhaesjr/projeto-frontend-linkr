import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeScreen} from '../HomeScreen/HomeScreen.js'
import Context from '../../context/Context.js';
import axios from "axios";
import { AllScreen, Inputs } from "./styled.js";

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();
    const { setToken } = useContext(Context);

    function login(e) {
        e.preventDefault();
        setDisable(true)

        const email = document.forms[0]["email"].value;
        const password = document.forms[0]["password"].value;
        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos obrigatórios.')
            setDisable(false)
            return false;
        }

        const userLogin = {
            email, password
        };

        axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, userLogin)
            .then((res) => {
                setToken(res.data.token)
                localStorage.setItem('token', res.data.token);
                setDisable(true);
                navigate('/timeline');
            })
            .catch((err) => {
                console.log(err)
                setDisable(false)
                if (err.response.status === 401) {
                    alert('Email ou senha incorretos.')
                }
            })

    }

    return (
        <AllScreen>
            <HomeScreen />
            <Inputs>
                <div>
                    <form onSubmit={login}>
                        <input disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="e-mail" name="email"></input>
                        <input disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="password" name="password"></input>
                        <button disabled={disable} type="submit">Log in</button>
                    </form>
                    <h1 onClick={() => navigate('/sign-up')}>First time? Create an account!</h1>
                </div>
            </Inputs>
        </AllScreen>
    )
}