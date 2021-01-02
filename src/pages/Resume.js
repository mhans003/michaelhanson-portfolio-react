import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ResumeEmbed from "../components/ResumeEmbed";

function Resume(props) {
    return (
        <div>
            <Header current={props.current}/>
            <Container main>
                <h1 className="text-center">Resume</h1>
                <h4 className="text-center ml-2">SAVE <a href="./assets/MichaelHansonResume.pdf" download>
                        <i id="download-icon" className="fad fa-arrow-to-bottom"></i>
                    </a>
                </h4>
                <hr/>
                <ResumeEmbed/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Resume;