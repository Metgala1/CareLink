import { createBrowserRouter } from "react-router-dom";
import Plans from "./components/plans/Plans";
import CreateAccount from "./components/CreateAccount/CreateAccount";

const router = createBrowserRouter(
    [
        {path: '/', element: <Plans />},
        {path: 'createaccount', element: <CreateAccount />}
    ]
)

export default router;