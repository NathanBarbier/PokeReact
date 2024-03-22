import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/errorPage";
import Pokemons from "./routes/pokemons";
import Pokedex from "./routes/pokedex";
import Pokemon from "./routes/pokemon";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const router = createBrowserRouter([
    { 
      path: "/",
      element: <Pokemons />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/pokemon/:pokemonId/",
      element: <Pokemon />,
    },
    {
      path: "pokedex/",
      element: <Pokedex />,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
