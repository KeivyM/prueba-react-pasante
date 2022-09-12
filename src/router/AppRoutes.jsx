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
            <Route path="/post" element={<PostPage type="new" />} />
            <Route
              path="/post/update/:id"
              element={<PostPage type="update" />}
            />

            <Route path="/posts" element={<PostsPage />} />
            {/*
            <Route path="/posts" element={<PostsDetailsPage />} /> */}
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
