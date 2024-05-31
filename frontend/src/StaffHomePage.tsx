import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import {
  Card,
  Title,
  Text,
  ProgressBar,
  DonutChart,
  LineChart,
  Metric
} from '@tremor/react';
import 'antd/dist/reset.css';
import './StaffHomePage.css';

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onStub1ButtonClick = () => {
    //navigate('/history');
  }
  const onStub2ButtonClick = () => {
    //navigate('/devices');
  };
  const onSignOutButtonClick = () => {
    navigate('/login');
  };

  const riskHistoryData = [
    { date: 'Dec 2023', value: 65 },
    { date: 'Jan 2024', value: 70 },
    { date: 'Feb 2024', value: 75 },
    { date: 'Mar 2024', value: 80 },
    { date: 'Apr 2024', value: 85 },
    { date: 'May 2024', value: 90 },
    { date: 'Jun 2024', value: 88 },
    { date: 'Jul 2024', value: 86 },
    { date: 'Aug 2024', value: 87 },
    { date: 'Sep 2024', value: 89 },
    { date: 'Oct 2024', value: 91 },
    { date: 'Nov 2024', value: 93 },
    { date: 'Dec 2024', value: 95 },
  ];

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* First row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Card>
                <Title>Risk Score</Title>
                <DonutChart
                    data={[{ value: 82 }]}
                    category="value"
                    colors={["blue"]}
                    variant="donut"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text>0</Text>
                    <Text>5</Text>
                    <Text>10</Text>
                </div>
            </Card>
            <Card>
                <Title>Compliance Status</Title>
                <ProgressBar value={73} />
                <Text>73%</Text>
            </Card>
            <Card>
                <Title>Risk History</Title>
                <LineChart
                    data={riskHistoryData}
                    index="date"
                    categories={['risk']}
                    colors={["blue"]}
                    yAxisWidth={40}
                />
            </Card>
        </div>

        {/* Second row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Card>
                <Title>Outdated OS</Title>
                <Metric>43</Metric>
                <Text>devices</Text>
            </Card>
            <Card>
                <Title>Known vulnerabilities</Title>
                <Metric>23</Metric>
                <Text>devices</Text>
            </Card>
            <Card>
                <Title>Last Security Audit</Title>
                <Metric>21</Metric>
                <Text>days ago</Text>
            </Card>
        </div>
    </div>
);
};

export default StaffHomePage;