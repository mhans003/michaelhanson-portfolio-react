import "./style.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactButton from "../components/ContactButton";
import RedirectButton from "../components/RedirectButton";
import ContactModal from "../components/ContactModal";

function Contact(props) {
    //Set up state for modals
    const [contactShow, setContactShow] = useState(false);
    const [heading, setHeading] = useState("");
    const [body, setBody] = useState("");

    //Handle opening and closing of modals.
    const handleContactClose = () => setContactShow(false);
    const handleContactShow = (heading, body) => {
        setHeading(heading);
        setBody(body);
        setContactShow(true);
    };

    return (
        <div>
            <Header current={props.current}/>
            <Container main>
                <h1 className="text-center mt-3">Contact</h1>
                <hr/>
                <ContactButton 
                    text={"Email "} 
                    icon={"fas fa-envelope-open-text"} 
                    handleContactShow={handleContactShow}
                    heading={"Email Michael Hanson"}
                    body={"michaeledwardhanson@gmail.com"}
                />
                <ContactButton 
                    text={"Phone "} 
                    icon={"fas fa-mobile-alt"}
                    handleContactShow={handleContactShow}
                    heading={"Call or Text Michael Hanson"}
                    body={"(951) 834-8219"}
                />
                <RedirectButton text={"GitHub "} icon={"fab fa-github"} url={"https://github.com/mhans003"}/>
                <RedirectButton text={"LinkedIn "} icon={"fab fa-linkedin"} url={"https://www.linkedin.com/in/michaeledwardhanson/"}/>
            </Container>
            <Footer/>
            <ContactModal
                contactShow={contactShow}
                handleContactClose={handleContactClose}
                heading={heading}
                body={body}
            />
        </div>
    );
}

export default Contact;