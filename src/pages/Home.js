import "./style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home(props) {
    return (
        <div>
            <Header current={props.current}/>
            <Container main>
                <h1 className="text-center mt-3">About Me</h1>
                <hr/>
                <Row>
                    <Col size="col-lg-6">
                        <img id="biopic" src="assets/images/mh.jpg" alt="Michael Hanson"/>
                    </Col>
                    <Col size="col-lg-6">
                        <p className="biobody mt-3 mt-lg-0">
                            As a web development enthusiast, I have built numerous web applications using technologies such as 
                            React, Node.js, jQuery, MySQL, and MongoDB. I hold three certificates, including one in Full-Stack Web Development from
                            UCR Extension's Coding Bootcamp and one in Computer Information Systems - Programming (C++ emphasis).
                        </p>
                        <p className="biobody">
                            I come with experience of having been a teacher with a successful track record for over 7 years, 
                            during which I held teacher-leader roles including administrative designee. During that time, I incorporated coding into my work. 
                            For example, I taught programming concepts to students as a summer youth instructor at UCR Extension, and I also built and 
                            deployed math games for my own fourth grade students. I have since made the decision to devote myself to web development full-time. 
                        </p>
                        <p className="biobody">
                            As for a few other unique facts about myself, I have interests in photography, science, cooking, and healthy food. 
                            I love to exercise, and lap swimming is my favorite sport. I have had a prosthetic leg my entire life, and you might 
                            catch me making wisecracks about it. I hope you have enjoyed getting a sense of walking a day in my "shoe!" 
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home;