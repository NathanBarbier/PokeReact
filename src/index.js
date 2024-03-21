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
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "pokedex/",
        element : <Pokedex/>,
        loader: pokedexLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
