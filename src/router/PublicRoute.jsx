import Layout from "../components/layout/Layout";

import AuthPage from "../pages/loginPage/AuthPage";

const PublicRoute = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AuthPage />,
      },
    ],
  },
];

export default PublicRoute;
