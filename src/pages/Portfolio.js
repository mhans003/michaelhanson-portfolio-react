import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import PortfolioCardList from "../components/PortfolioCardList";

function Portfolio(props) {
    return (
        <div>
            <Header current={props.current}/>
            <Container main>
                <h1 className="text-center mt-3">Portfolio</h1>
                <hr/>
                <PortfolioCardList/>
            </Container>
            <Footer/>
        </div>
    );
}

export default Portfolio;