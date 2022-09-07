import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { CommentsProvider } from "./context/CommentsProvider";
import { PostsProvider } from "./context/PostsProvider";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CommentsProvider>
          <PostsProvider>
            <AppRoutes />
          </PostsProvider>
        </CommentsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
