import "./style.css";
import Header from "../components/Header";

function Contact(props) {
    return (
        <div>
            <Header current={props.current}/>
        </div>
    );
}

export default Contact;