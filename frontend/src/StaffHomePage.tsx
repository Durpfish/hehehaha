import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Progress, Button, Typography, List, Badge, Table } from "antd";
import { Line } from "@ant-design/charts";
import "antd/dist/reset.css";

const { Title } = Typography;

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onSignOutButtonClick = () => {
    navigate("/login");
  };

  const onInventoryButtonClick = () => {
    navigate("/inventory");
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

  const brandHealth = [
    { brand: "OMRN", status: "Healthy" },
    { brand: "Nova", status: "Healthy" },
    { brand: "Generative", status: "Critical vulnerabilities" },
  ];

  const columns = [
    {
      title: "Notice",
      dataIndex: "notice",
      key: "notice",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const notices = [
    { key: "1", notice: "Critical vulnerability for OMR Blood Glucose Monitor", date: "2024-06-01" },
    { key: "2", notice: "New compliance guidelines", date: "2024-06-02" },
    { key: "3", notice: "Security audit results", date: "2024-06-03" },
  ];

  return (
    <div className="dashboardContainer" style={{ padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Button
          onClick={onInventoryButtonClick}
          style={{
            width: "180px",
            height: "60px",
            backgroundColor: "#2143d7",
            borderColor: "#2143d7",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            marginLeft: "20px",
            marginBottom: "20px",
          }}
        >
          Go to Inventory
        </Button>
        <img src="../rawlogo.png" width="200px" />
        <Button
          onClick={onSignOutButtonClick}
          style={{
            width: "180px",
            height: "60px",
            backgroundColor: "#2143d7",
            borderColor: "#2143d7",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          Sign Out
        </Button>
      </div>
      <div className="titleContainer" style={{ paddingTop: "20px" }}>
        <div>Your cybersecurity dashboard</div>
      </div>
      <Row gutter={16} style={{ display: "flex", alignItems: "stretch" }}>
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
                <Progress strokeColor="#2143d7" type="circle" percent={75} size={200} trailColor="" />
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
              <Progress strokeColor="#2143d7" percent={83} />
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
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={12}>
          <Card
            hoverable
            title="Vendor Health Status"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={brandHealth}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.brand}
                    description={
                      <Badge
                        status={
                          item.status === "Healthy"
                            ? "success"
                            : item.status === "Devices need patching"
                            ? "warning"
                            : "error"
                        }
                        text={item.status}
                      />
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            hoverable
            title="Notices"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderColor: "#a0a0a0a0",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <Table
              columns={columns}
              dataSource={notices}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StaffHomePage;
