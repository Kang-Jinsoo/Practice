import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main.jsx"

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Router;