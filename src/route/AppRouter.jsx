import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CategorySelectPage from "../pages/game/CategorySelectPage";
import GameModeSelectPage from "../pages/game/GameModeSelectPage";
import ChoiceGamePage from "../pages/game/ChoiceGamePage";
// import ClueGamePage from "../pages/game/ClueGamePage";
// import ImageTileGamePage from "../pages/game/ImageTileGamePage";
import ResultPage from "../pages/game/ResultPage";
import PlayHistoryPage from "../pages/history/PlayHistoryPage";
import NotFoundPage from "../pages/NotFoundPage";

//GM
import CategoryManagementPage from "../pages/gm/CategoryManagementPage";
import QuestionManagementPage from "../pages/gm/QuestionManagementPage";
import ClueGamePage from "../pages/game/ClueGamePage";
import ImageTileGamePage from "../pages/game/ImageTileGamePage";
import { useState } from "react";
// import UserManagementPages from "../pages/gm/UserManagementPages";

//guest
const guestRouter = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "*", element: <Navigate to="/login" replace /> },
]);

//user
const userRouter = createBrowserRouter([
  { path: "/", element: <HomePage />},
  { path: "/category", element: <CategorySelectPage />},
  { path: "/gamemode/:categoryId", element: <GameModeSelectPage />},
  { path: "/play/:categoryId/choice", element: <ChoiceGamePage />},
  { path: "/play/:categoryId/clue", element: <ClueGamePage />},
  { path: "/play/categoryId/imagetile", element: <ImageTileGamePage />},
  { path: "/result/:sessionId", element: <ResultPage />},
  { path: "/history", element: <PlayHistoryPage />},
  { path: "*", element: <NotFoundPage />},
]);

const gmRouter = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/gm/categories", element: <CategoryManagementPage />},
  {path: "/gm/questions", element: <QuestionManagementPage />},
  {path: "/gm/questions/create", element: <p>GM Create Question Page</p>},
  {path: "/gm/questions/edit/:questionId", element: <p>GM Edit Question Page</p>},
  {path: "/gm/categories/create", element: <p>GM Create Category Page</p>},
  {path: "/gm/categories/edit/:questionId", element: <p>GM Edit Category Page</p>},
  { path: "/play/:categoryId/choice", element: <ChoiceGamePage />},
  { path: "/play/:categoryId/clue", element: <ClueGamePage />},
  { path: "/play/categoryId/imagetile", element: <ImageTileGamePage />},
  { path: "*", element: <NotFoundPage />},
])

function AppRouter() {
  const user = 'gm'
  let finalUser
  if(user === "user"){
    finalUser = userRouter
  } else if(user === "gm"){
    finalUser = gmRouter
  }else{
    finalUser = guestRouter
  }
  return <RouterProvider router={finalUser} />;
}
export default AppRouter;
