import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Progress } from "antd";
import { Line } from "@ant-design/charts";
import "antd/dist/reset.css";

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onStub1ButtonClick = () => {
    //navigate('/history');
  };
  const onStub2ButtonClick = () => {
    //navigate('/devices');
  };
  const onSignOutButtonClick = () => {
    //navigate('/login');
  };

  const data = [
    { year: "Dec 2023", value: 65 },
    { year: "Jan 2024", value: 59 },
    { year: "Feb 2024", value: 80 },
    { year: "Mar 2024", value: 81 },
    { year: "Apr 2024", value: 56 },
    { year: "May 2024", value: 55 },
    { year: "Jun 2024", value: 40 },
    { year: "Jul 2024", value: 45 },
    { year: "Aug 2024", value: 60 },
    { year: "Sep 2024", value: 65 },
    { year: "Oct 2024", value: 70 },
    { year: "Nov 2024", value: 75 },
    { year: "Dec 2024", value: 82 },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    height: 200,
    yAxis: { min: 0, max: 100 },
  };

  return (
    <div className="dashboardContainer" style={{ padding: "10px" }}>
      <div className="titleContainer">
        <img src="../rawlogo.png" width="300px"></img>
        <div>Your dashboard</div>
      </div>
      <Row gutter={16} style={{ display: 'flex', alignItems: 'stretch' }}> {/* Adjusted this line */}
        <Col span={8}>
          <Card title="Risk Score" style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}> 
            <div style={{ textAlign: "center" }}>
              <h1>82</h1>
              <div style={{ marginBottom: "20px" }}>
                <Progress type="circle" percent={82} size={100} />
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Compliance Status" style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <div>
              <h1>73%</h1>
              <Progress percent={83} />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Risk History">
            <Line {...config} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card title="Outdated OS">
            <h1>43</h1>
            <p>devices</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Known vulnerabilities">
            <h1>23</h1>
            <p>devices</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Last Security Audit">
            <h1>21</h1>
            <p>days ago</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StaffHomePage;
