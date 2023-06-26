import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Routing";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
