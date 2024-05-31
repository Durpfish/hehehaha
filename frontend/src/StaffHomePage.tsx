import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Progress } from "antd";
import { Line } from "@ant-design/charts";
import { Typography } from "antd";
import "antd/dist/reset.css";
import { Button } from "antd";

const { Title } = Typography;

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onSignOutButtonClick = () => {
    navigate("/login");
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
        <img src="../rawlogo.png" width="300px" />
        <div>Your dashboard</div>
      </div>
      <Row gutter={16} style={{ display: "flex", alignItems: "stretch" }}>
        {" "}
        {/* Adjusted this line */}
        <Col span={8}>
          <Card
            hoverable
            title="Risk Score"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "20px" }}>
                <Progress strokeColor="#6cf0fc" type="circle" percent={82} size={200} trailColor="" />
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            title="Compliance Status"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <div>
              <Title>83%</Title>
              <Progress strokeColor="#6cf0fc" percent={83} />
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            title="Risk History"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Line {...config} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card
            hoverable
            title="Outdated OS"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Title>43</Title>
            <Title level={2}>devices</Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            title="Known vulnerabilities"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Title>23</Title>
            <Title level={2}>devices</Title>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            title="Last Security Audit"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Title>21</Title>
            <Title level={2}>days ago</Title>
          </Card>
        </Col>
      </Row>
      <Button
        type="primary"
        className="signOutButton"
        onClick={onSignOutButtonClick}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default StaffHomePage;
