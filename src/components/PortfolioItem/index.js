import Col from "../Col";

function PortfolioItem(props) {
    return (
        <Col size="col-md-6 col-lg-4 portfolio-item">
            <div className="card">
                <img src={`./assets/images/${props.projectData.image}`} className="card-img-top" alt={`Screenshot of ${props.projectData.name}`}/>
                <div className="card-body">
                    <h5 className="card-title">
                        <a href={`${props.projectData.link}`} target="_blank" rel="noreferrer">
                            <strong>{props.projectData.name}</strong>
                        </a>
                    </h5>
                    {props.projectData.isTeamProject ? 
                    <h6 className="text-center text-muted">Team Project</h6> : ""}
                    <hr/>
                    <p className="card-text">{props.projectData.description}</p>
                    {props.projectData.guestUsername && props.projectData.guestPassword ? 
                    <div>
                        <h6 className="card-text">Guest Username: <i>{props.projectData.guestUsername}</i></h6>
                        <h6 className="card-text mb-3">Guest Password: <i>{props.projectData.guestPassword}</i></h6>
                    </div> : ""}
                    <p className="card-text">Technologies Include: {props.projectData.technologies}</p>
                    <form action={`${props.projectData.repo}`} target="_blank" className="text-center">
                        <button type="submit" className="btn btn-info btn-sm">
                            Repo <i className="fab fa-github"></i>
                        </button>
                    </form>
                </div>
            </div>
        </Col>
    );
}

export default PortfolioItem;