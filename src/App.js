import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./context/PostsProvider";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <AppRoutes />
      </PostsProvider>
    </BrowserRouter>
  );
}

export default App;
