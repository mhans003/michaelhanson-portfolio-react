import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function ContactModal(props) {
    return (
        <>
            <Modal show={props.contactShow} onHide={props.handleContactClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>{props.heading}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.heading === "Call or Text Michael Hanson" ? <h2 className="text-center">{props.body}</h2> : <h5 className="text-center">{props.body}</h5>}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ContactModal;