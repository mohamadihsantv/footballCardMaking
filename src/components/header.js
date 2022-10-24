import {React} from "react";
import { GiBabyfootPlayers } from "react-icons/gi";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    
    {
      text: "Players",
      link: "/players",
    },
    {
      text:"Teams",
      link:"/showteam"
    },
    {
      text: "Team Details",
      link: "/teamDetails",
    },
  ];
  return (
    <div className="header-style">
    <Navbar  variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0080FF " }}>
         Football Mania
          <GiBabyfootPlayers className="icon" />
        </Navbar.Brand>

        <Nav className="me-auto">
          {navLinks.map((nav) => {
            return (
              <span style={{ marginRight: "1rem" }}>
                <Link to={nav.link} className="link">
                  {nav.text}
                </Link>
              </span>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
}
