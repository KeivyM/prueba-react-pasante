import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to="/">
            <Avatar size={28} /> <span className="mx-1">Profile</span>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto d-flex gap-3 justify-content-end">
          <Link className="text-decoration-none" to="/posts">
            Posts
          </Link>
          <Link className="text-decoration-none" to="/post">
            New Post
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
