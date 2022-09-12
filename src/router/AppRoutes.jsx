import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { AuthContext } from "../context";
import {
  LoginPage,
  NotFoundPage,
  PostPage,
  PostsDetailsPage,
  PostsPage,
  ProfilePage,
  RegisterPage,
} from "../pages";
import { ProfileEditPage } from "../pages/ProfileEditPage";

export const AppRoutes = () => {
  const { auth, userAuth } = useContext(AuthContext);
  return (
    <>
      {!!auth && <NavBar />}
      <Routes>
        {!!auth ? (
          <>
            <Route
              path="/"
              element={<Navigate to={`/profile/${userAuth?.id}`} />}
            />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/post" element={<PostPage type="new" />} />
            <Route path="/post/:id" element={<PostPage type="update" />} />

            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostsDetailsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};
