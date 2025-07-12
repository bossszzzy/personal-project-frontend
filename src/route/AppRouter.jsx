import { lazy, Suspense, use } from "react";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import useUserStore from "../store/userStore";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const CategorySelectPage = lazy(() =>
  import("../pages/game/CategorySelectPage")
);
const GameModeSelectPage = lazy(() =>
  import("../pages/game/GameModeSelectPage")
);
const ChoiceGamePage = lazy(() => import("../pages/game/ChoiceGamePage"));
// const ClueGamePage = lazy(()=> import("../pages/game/ClueGamePage"));
// const ImageTileGamePage = lazy(()=> import("../pages/game/ImageTileGamePage"));
const ResultPage = lazy(() => import("../pages/game/ResultPage"));
const PlayHistoryPage = lazy(() => import("../pages/history/PlayHistoryPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

//GM
const CategoryManagementPage = lazy(() =>
  import("../pages/gm/CategoryManagementPage")
);
const QuestionManagementPage = lazy(() =>
  import("../pages/gm/QuestionManagementPage")
);
// const UserManagementPages = lazy(()=> import("../pages/gm/UseconstrManagementPages"));

//guest
const guestRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "*", element: <Navigate to="/login" replace /> },
]);

//user
const userRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/category", element: <CategorySelectPage /> },
  { path: "/gamemode/:categoryId", element: <GameModeSelectPage /> },
  { path: "/play/:categoryId/choice", element: <ChoiceGamePage /> },
  // { path: "/play/:categoryId/clue", element: <ClueGamePage /> },
  // { path: "/play/categoryId/imagetile", element: <ImageTileGamePage /> },
  { path: "/result/:sessionId", element: <ResultPage /> },
  { path: "/history", element: <PlayHistoryPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

const gmRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/gm/categories", element: <CategoryManagementPage /> },
  { path: "/gm/questions", element: <QuestionManagementPage /> },
  { path: "/gm/questions/create", element: <p>GM Create Question Page</p> },
  {
    path: "/gm/questions/edit/:questionId",
    element: <p>GM Edit Question Page</p>,
  },
  { path: "/gm/categories/create", element: <p>GM Create Category Page</p> },
  {
    path: "/gm/categories/edit/:questionId",
    element: <p>GM Edit Category Page</p>,
  },
  { path: "/category", element: <CategorySelectPage /> },
  { path: "/gamemode/:categoryId", element: <GameModeSelectPage /> },
  { path: "/play/:categoryId/choice", element: <ChoiceGamePage /> },
  // { path: "/play/:categoryId/clue", element: <ClueGamePage /> },
  // { path: "/play/categoryId/imagetile", element: <ImageTileGamePage /> },
  { path: "*", element: <NotFoundPage /> },
]);

function AppRouter() {
  const role = useUserStore(state=>state.role)
  let finalUser;
  if (role === "user") {
    finalUser = userRouter;
  } else if (role === "gm") {
    finalUser = gmRouter;
  } else if(role === null){
    finalUser = guestRouter
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={finalUser} />
    </Suspense>
  );
}
export default AppRouter;
