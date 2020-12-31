import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header(props) {
    return (
            <Navbar className="navbar-dark bg-dark" expand="lg">
                <Navbar.Brand className="px-3 pt-2" href="/">Michael Hanson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <span className={`nav-item px-3${props.current === 'home' ? ' active' : ""}`}>
                            <Nav.Link href="/">
                                <hr className="hr-light d-lg-none"/>
                                <span className="dropdown-text">
                                    Home
                                </span>
                                <hr className="hr-light d-lg-none"/>
                            </Nav.Link>
                        </span>
                        <span className={`nav-item px-3${props.current === 'portfolio' ? ' active' : ""}`}>
                            <Nav.Link href="/portfolio">
                                <hr className="hr-light d-lg-none"/>
                                <span className="dropdown-text">
                                    Portfolio
                                </span>
                                <hr className="hr-light d-lg-none"/>
                            </Nav.Link>
                        </span>
                        <span className={`nav-item px-3${props.current === 'contact' ? ' active' : ""}`}>
                            <Nav.Link href="/contact">
                                <hr className="hr-light d-lg-none"/>
                                <span className="dropdown-text">
                                    Contact
                                </span>
                                <hr className="hr-light d-lg-none"/>
                            </Nav.Link>
                        </span>
                        <span className={`nav-item px-3${props.current === 'resume' ? ' active' : ""}`}>
                            <Nav.Link href="/resume">
                                <hr className="hr-light d-lg-none"/>
                                <span className="dropdown-text">
                                    Resume
                                </span>
                                <hr className="hr-light d-lg-none"/>
                            </Nav.Link>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Header;