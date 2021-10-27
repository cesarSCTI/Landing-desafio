import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './itemlistcontainer.css';

const ItemListContainer = ({getting}) =>{
    return(
        <>
        <Container fluid className="listContainer">
            <Row>
                <Col>
                    <h3>{getting}</h3>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ItemListContainer;