function RedirectButton(props) {
    return (
        <div className="form-group">
            <form action={props.url} target="_blank">
                <button type="submit" className="btn btn-secondary btn-block btn-lg page-button">
                    <span className="contact-item">{props.text}  <i className={props.icon}></i></span>
                </button>
            </form>
        </div>
    );
}

export default RedirectButton;