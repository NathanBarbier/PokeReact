import logo from './logo.svg';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement : <ErrorPage/>,
      loader : rootLoader,
      action : rootAction,
      children : [{
          path : "contacts/:contactId",
          element : <Contact/>,
          loader : contactLoader,
      },
      {
        path : "contacts/:contactId/edit",
        element : <EditContact/>,
        loader : contactLoader,
      }
    ]
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    // TODO: AJOUTER UN LAYOUT POUR LA NAVBAR
    
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  return (
    <div className="App">
      <h1>BIENVENUE SUR LE POKEDEX</h1>
    </div>

    
  );
}

export default App;
