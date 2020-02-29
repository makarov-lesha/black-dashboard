/*!

=========================================================
* Black Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Welcome extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("pricing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("pricing-page");
  }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h1 className="title">CALCSCOUT 24</h1>
                <h2 className="description p-3">
                Calculate complex things easily
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12">
                <Card className="card-pricing card-primary">
                  <CardBody>
                    <CardTitle tag="h1">Real</CardTitle>
                    {/* <CardImg
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    /> */}
                    {/* <ListGroup>
                      <ListGroupItem>300 messages</ListGroupItem>
                      <ListGroupItem>150 emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup> */}
                    {/* <div className="card-prices">
                      <h3 className="text-on-front">
                        <span>$</span>
                        95
                      </h3>
                      <h5 className="text-on-back">95</h5>
                      <p className="plan">Professional plan</p>
                    </div> */}
                  </CardBody>
                  <CardFooter className="text-center mb-3 mt-3">
                    <Button className="btn-round btn-just-icon" color="primary">
                      Calculate
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
            </Row>
            
          </Container>
        </div>
      </>
    );
  }
}

export default Welcome;
