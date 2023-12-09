import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([...PublicRoute, ...PrivetRoute]);

export default router;
