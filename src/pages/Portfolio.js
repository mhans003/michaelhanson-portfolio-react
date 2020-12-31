import "./style.css";
import Header from "../components/Header";

function Portfolio(props) {
    return (
        <div>
            <Header current={props.current}/>
        </div>
    );
}

export default Portfolio;