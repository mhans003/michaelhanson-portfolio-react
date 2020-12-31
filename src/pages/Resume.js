import "./style.css";
import Header from "../components/Header";

function Resume(props) {
    return (
        <div>
            <Header current={props.current}/>
        </div>
    );
}

export default Resume;