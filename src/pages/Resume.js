import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume(props) {
    return (
        <div>
            <Header current={props.current}/>
            <Footer/>
        </div>
    );
}

export default Resume;