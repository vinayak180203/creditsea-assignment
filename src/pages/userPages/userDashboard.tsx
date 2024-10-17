import React, { useState } from 'react';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  InputAdornment
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LoanModal from '../../components/LoanModal';

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    fontWeight: 600,
    opacity: 1,
  },
  '&.Mui-selected': {
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const rows = [
    { officer: 'John Doe', amount: 15000, date: '2024-10-01', status: 'Approved' },
    { officer: 'Jane Smith', amount: 20000, date: '2024-10-03', status: 'Pending' },
    { officer: 'Mark Johnson', amount: 12000, date: '2024-10-05', status: 'Rejected' },
    { officer: 'Lucy Brown', amount: 18000, date: '2024-10-08', status: 'Verified' },
  ];

  const handleApplyLoan = () => {
    setIsModalOpen(true);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="container mx-auto">
      <Box sx={{ bgcolor: '#f0f0f0', p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AttachMoneyIcon sx={{ fontSize: 40, color: 'green', mr: 1 }} />
            <Typography variant="h4" component="span" sx={{ fontWeight: 'bold', color: "green" }}>
              0.0
            </Typography>
          </Box>
          <Button variant="contained" color="success" onClick={handleApplyLoan}>
            Get A Loan
          </Button>
        </Box>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="loan options">
          <StyledTab label="Borrow Cash" />
          <StyledTab label="Transact" />
          <StyledTab label="Deposit Cash" />
        </Tabs>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for loans"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Loan Officer</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date Applied</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.officer}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <LoanModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;
