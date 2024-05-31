import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Card, CardContent, Typography, CircularProgress, LinearProgress } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import './StaffHomePage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SemiCircleProgress: React.FC<{ value: number }> = ({ value }) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={value}
          size={200}
          thickness={10}
          sx={{ transform: 'rotate(-90deg)' }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4" component="div" color="textSecondary">{`${Math.round(value)}%`}</Typography>
        </Box>
      </Box>
    );
  };
  
  // Line graph data
  const lineData = {
    labels: [
      'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024',
      'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024',
      'Oct 2024', 'Nov 2024', 'Dec 2024'
    ],
    datasets: [
      {
        label: 'Risk History',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 65, 70, 75, 82],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

const StaffHomePage: React.FC = () => {
  const navigate = useNavigate();

  const onStub1ButtonClick = () => {
    //navigate('/history');
  }
  const onStub2ButtonClick = () => {
    //navigate('/devices');
  };
  const onSignOutButtonClick = () => {
    //navigate('/login');
  };
  
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {/* First Row */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Risk Score</Typography>
              <SemiCircleProgress value={82} />
              <Typography variant="subtitle1" component="div" sx={{ textAlign: 'center', marginTop: 2 }}>
                82 / 100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Compliance Status</Typography>
              <Box sx={{ marginTop: 2 }}>
                <LinearProgress variant="determinate" value={73} />
              </Box>
              <Typography variant="subtitle1" component="div" sx={{ textAlign: 'center', marginTop: 2 }}>
                73%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Risk History</Typography>
              <Line data={lineData} />
            </CardContent>
          </Card>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Outdated OS</Typography>
              <Typography variant="h2" component="div">43</Typography>
              <Typography variant="subtitle1" component="div">devices</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Known Vulnerabilities</Typography>
              <Typography variant="h2" component="div">23</Typography>
              <Typography variant="subtitle1" component="div">devices</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">Last Security Audit</Typography>
              <Typography variant="h2" component="div">21</Typography>
              <Typography variant="subtitle1" component="div">days ago</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaffHomePage;