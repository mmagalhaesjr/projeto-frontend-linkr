import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
            alert('Please fill in all required fields.')
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
                    alert('Incorrect email or password.')
                }
            })

    }

    return (
        <AllScreen>
            <HomeScreen />
            <Inputs>
                <div>
                    <form onSubmit={login}>
                        <input data-test="email" disabled={disable} onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="e-mail" name="email"></input>
                        <input data-test="password" disabled={disable} onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="password" name="password"></input>
                        <button data-test="login-btn" disabled={disable} type="submit">Log in</button>
                    </form>
                    <Link to={'/sign-up'} data-test="sign-up-link">
                    <h1>First time? Create an account!</h1>
                    </Link>
                </div>
            </Inputs>
        </AllScreen>
    )
}