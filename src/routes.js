import { lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
// const ScrollBallPage = lazy(() => import("./pages/scrollball"));
// const PromotionPage = lazy(() => import("./pages/promotion"));
// const LoginPage = lazy(() => import("./pages/login"));
// const RegisterPage = lazy(() => import("./pages/register"));
// const ManagerPage = lazy(() => import("./pages/manager"));
const routes = [
  { path: "/", exact: true, name: "HOME", component: HomePage },
  // { path: "/home", exact: true, name: "HOME", component: HomePage },
  // {
  //   path: "/scroll-ball",
  //   exact: true,
  //   name: "ScrollBall",
  //   component: ScrollBallPage,
  // },
  // {
  //   path: "/promotion",
  //   exact: true,
  //   name: "Promotion",
  //   component: PromotionPage,
  // },
  // { path: "/login", exact: true, name: "Login", component: LoginPage },
  // { path: "/register", exact: true, name: "Register", component: RegisterPage },
  // { path: "/manager", exact: false, name: "Manager", component: ManagerPage },
  { path: "*", exact: true, name: "Error404", component: HomePage },
];
export default routes;
