import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement : <ErrorPage/>,
    loader : rootLoader,
    action : rootAction,
    children : [{
        path : "pokemons/",
        element : <Pokemons/>,
        loader : pokemonsLoader,
    },
    {
      path : "pokedex/",
      element : <Pokedex/>,
      loader : PokedexLoader,
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
