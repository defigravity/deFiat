import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Table
} from 'reactstrap'


export const Tokenomics = () => {
  const pieData = (canvas) => {
    // var ctx = canvas.getContext("2d");

    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, '#80b6f4');
    // gradientStroke.addColorStop(1, '#FFFFFF');
    
    return {
      labels: [
        "Circulating",
        "Team",
        "Presale",
        "Token Burn",
        "Liquidity Lock",
        "Expenses"
      ],
      datasets: [{
        data: [500, 300, 200, 100, 100, 80],
        borderColor: "#ffffff",
        backgroundColor: [
          "#212529",
          "#32325d",
          "#525f7f",
          "#6c757d",
          "#adb5bd",
          "#ced4da"
        ]
      }]
    }
  };

  const chartOptions = {
      legend: {
        display: false
      }
  }

  return (
    <>
      <div className="wrapper landing-page">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          
          <div className="content">
            <h2 className="display-2">Tokenomics</h2>
            <Container>
              <Row>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <p className="h2">$1.60</p>
                      Current Price
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <p className="h2">500K</p>
                      Circulating Supply
                    </CardBody>
                  </Card>
                </Col>
                <Col md="4">
                  <Card>
                    <CardBody>
                      <p className="h2">1.2M</p>
                      Total Supply
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              
              <Row className="mt-4 mb-4">
                <Col lg="6">

                  <h3>Token Supply</h3>
                  <Pie data={pieData} options={chartOptions} />
                </Col>
                <Col lg="6">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th>Description</th>
                        <th className="text-right">Token Allocation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td>Circulating</td>
                        <td className="text-right">500M</td>
                      </tr>
                      <tr>
                        <td className="text-center">2</td>
                        <td>Team</td>
                        <td className="text-right">300M</td>
                      </tr>
                      <tr>
                        <td className="text-center">3</td>
                        <td>Presale</td>
                        <td className="text-right">200M</td>
                      </tr>
                      <tr>
                        <td className="text-center">4</td>
                        <td>Token Burn</td>
                        <td className="text-right">100M</td>
                      </tr>
                      <tr>
                        <td className="text-center">5</td>
                        <td>Liquidity Lock</td>
                        <td className="text-right">100M</td>
                      </tr>
                      <tr>
                        <td className="text-center">6</td>
                        <td>Expenses</td>
                        <td className="text-right">80M</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
            
            
          </div>
        </div>
      </div>
    </>
  )
}