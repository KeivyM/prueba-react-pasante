import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  PostPage,
  PostsDetails,
  PostsPage,
  ProfilePage,
  RegisterPage,
} from "../pages";
import { NotFoundPage } from "../pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostsDetails />} />

      <Route path="/404" element={<NotFoundPage />} />

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
