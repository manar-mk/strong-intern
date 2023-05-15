import {createBrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Pages/Main";
import Movie from "./Pages/Movie";

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
        },
        {
            path: "/movie/:id",
            element: <Movie/>,
        }
    ]
);