import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import {
  LoginPage,
  NotFoundPage,
  PostPage,
  PostsDetails,
  PostsPage,
  ProfilePage,
  RegisterPage,
} from "../pages";

export const AppRoutes = () => {
  const { auth, userAuth } = useContext(AuthContext);
  return (
    <Routes>
      {!!auth ? (
        <>
          <Route
            path="/"
            element={<Navigate to={`/profile/${userAuth?.id}`} />}
          />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostsDetails />} />
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
  );
};

// <Routes>
//   {status === "not-authenticated" ? (
//     <>
//       <Route path="/auth/*" element={<LoginPage />} />
//       <Route path="/*" element={<Navigate to="/auth/login" />} />
//     </>
//   ) : (
//     <>
//       <Route path="/" element={<CalendarPage />} />
//       <Route path="/*" element={<Navigate to="/" />} />
//     </>
//   )}
// </Routes>;
