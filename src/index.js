import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/errorPage";
import Pokemons, { loader as pokemonLoader } from "./routes/pokemons";
import Pokedex, { loader as pokedexLoader } from "./routes/pokedex";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons/>,
    errorElement : <ErrorPage/>,
    loader : pokemonLoader,
    children : [{
        path : "pokemons/",
        element : <Pokemons/>,
        loader : pokemonLoader
    },
    {
      path : "pokedex/",
      element : <Pokedex/>,
      loader: pokemonLoader
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
