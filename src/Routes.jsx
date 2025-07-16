import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Plans from "./components/plans/Plans";
import CreateAccount from "./components/CreateAccount/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Plans /> },
      { path: "createaccount", element: <CreateAccount /> , loader: () => new Promise(res => setTimeout(res, 1500))
 }
    ]
  }
]);

export default router;