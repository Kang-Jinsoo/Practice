import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main.jsx"

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Routes path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
    );
}

ewport default Router;