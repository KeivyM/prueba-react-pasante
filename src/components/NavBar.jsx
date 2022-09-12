import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { Avatar } from "./Avatar";

export const NavBar = () => {
  const { setAuth } = useContext(AuthContext);
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userAuth");
    setAuth(false);
    navigate("/");
  };

  return (
    <Navbar className="navbar-custom">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none link-menu-custom" to="/">
            <Avatar size={28} /> <span className="mx-1">Profile</span>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto d-flex gap-3 justify-content-end">
          <Link className="text-decoration-none link-menu-custom" to="/posts">
            Posts
          </Link>
          <Link className="text-decoration-none link-menu-custom" to="/post">
            New Post
          </Link>
        </Nav>
        <Button className="buttons-custom" onClick={logout}>
          Logout<i className="fa-solid fa-right-from-bracket mx-2"></i>
        </Button>
      </Container>
    </Navbar>
  );
};
