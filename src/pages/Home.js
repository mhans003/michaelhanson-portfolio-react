import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(props) {
    return (
        <div>
            <Header current={props.current}/>
            <Footer/>
        </div>
    );
}

export default Home;