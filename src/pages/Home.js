import "./style.css";
import Header from "../components/Header";

function Home(props) {
    return (
        <div>
            <Header current={props.current}/>
        </div>
    );
}

export default Home;