import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent
} from '@mui/material';

interface LoanModalProps {
  open: boolean;
  onClose: () => void;
}

const LoanModal: React.FC<LoanModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    amount: '',
    tenure: '',
    employmentStatus: '',
    reason: '',
    employmentAddress1: '',
    employmentAddress2: '',
    termsAccepted: false,
    creditInfoDisclosure: false,
  });

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '90vh',
    width: '90vw',
    p: 4,
    borderRadius: '8px',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'termsAccepted' || name === 'creditInfoDisclosure' ? checked : value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" align="center" fontWeight={600} gutterBottom>
          APPLY FOR A LOAN
        </Typography>
        <form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Full name as it appears on bank account"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="How much do you need?"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px' }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Loan tenure (in months)"
              name="tenure"
              type="number"
              value={formData.tenure}
              onChange={handleInputChange}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel id="employment-status-label">Employment status</InputLabel>
              <Select
                labelId="employment-status-label"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleSelectChange}
                label="Employment status"
              >
                <MenuItem value="employed">Employed</MenuItem>
                <MenuItem value="unemployed">Unemployed</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            fullWidth
            variant="outlined"
            label="Reason for loan"
            name="reason"
            multiline
            rows={3}
            value={formData.reason}
            onChange={handleInputChange}
            style={{ marginTop: '16px' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Address"
            name="employmentAddress1"
            value={formData.employmentAddress1}
            onChange={handleInputChange}
            style={{ marginTop: '16px' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Employment address (optional)"
            name="employmentAddress2"
            value={formData.employmentAddress2}
            onChange={handleInputChange}
            style={{ marginTop: '16px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                name="termsAccepted"
              />
            }
            label={
              <Typography variant="body2">
                I have read the important information and accept that by completing the application I will be bound by the terms
              </Typography>
            }
            style={{ marginTop: '16px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.creditInfoDisclosure}
                onChange={handleInputChange}
                name="creditInfoDisclosure"
              />
            }
            label={
              <Typography variant="body2">
                Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
              </Typography>
            }
            style={{ marginTop: '16px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px', backgroundColor: '#357a38', color: '#fff' }} 
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default LoanModal;
