import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Header } from "./components/organisms/Header";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
