import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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
  const { auth } = useContext(AuthContext);

  // console.log(!!auth);
  return (
    <Routes>
      {!!auth ? (
        <>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostsDetails />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/*" element={<Navigate to="/profile/23" />} />
        </>
      ) : (
        <>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      )}

      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
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
