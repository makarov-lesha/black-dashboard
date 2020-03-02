import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

class Welcome extends React.Component {
  // componentDidMount() {
  //   document.body.classList.toggle("pricing-page");
  // }
  // componentWillUnmount() {
  //   document.body.classList.toggle("pricing-page");
  // }
  render() {
    return (
      <>
        <div className="content">
          <Container>
            <h3 className="title pl-1">Calculate it yourself</h3>
            
            <Row>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white py-5">
                    Your Real Estate
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white py-5">
                    Your Financing
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white  py-5">
                    Your Taxes
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white  py-5">
                    Your Something Else
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white  py-5">
                    Your Something Else
                  </CardBody>
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardBody className="text-center text-white  py-5">
                    Your Something Else
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <CardBody>
              <Row>
                <Col sm="4">
                  <h3 className="mt-5">Some Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
                <Col sm="4">
                  <h3 className="mt-5">Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
                <Col sm="4">
                  <h3 className="mt-5">Another Title Here</h3>
                  <p>
                    One morning, when Gregor Samsa woke from troubled dreams, he
                    found himself transformed in his bed into a horrible vermin.
                    He lay on his armour-like back, and if he lifted his head a
                    little he could see his brown belly, slightly domed and
                    divided by arches into stiff sections. The bedding was
                    hardly able to cover it and seemed ready to slide off any
                    moment.
                  </p>
                </Col>
              </Row>
              <br />
            </CardBody>

          </Container>
        </div>
      </>
    );
  }
}

export default Welcome;
