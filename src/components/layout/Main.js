import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Main = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage/>} />
            </Routes>
        </>
    )
}

export default Main;