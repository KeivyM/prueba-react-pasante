import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { PostsProvider } from "./context/PostsProvider";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <AppRoutes />
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
