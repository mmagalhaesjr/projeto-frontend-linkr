import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp.js";
import Provider from "./context/Provider.js";
import TimelinePage from "./pages/TimelinePages/TimelinePage";



export default function App() {
    return (
        <BrowserRouter>

            <Provider>

                <Routes>
                    <Route path="/timeline" element={<TimelinePage />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>

            </Provider>

        </BrowserRouter>
    )
}