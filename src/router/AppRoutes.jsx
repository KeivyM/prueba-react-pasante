import { Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  PostPage,
  PostsPage,
  ProfilePage,
  RegisterPage,
} from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/home" element={<HomePage />} />

      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
