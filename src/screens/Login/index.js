import React, { useState } from 'react'
import styles from './Login.module.sass'
import { TextField, Button, Typography } from '@mui/material';
import cn from 'classnames';

const Login = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleMobileSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted Mobile Number:', mobileNumber);
    setSubmit(true);
  };

  const [otp, setOTP] = useState('');

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    // Handle OTP verification logic here
    console.log('Submitted OTP:', otp);
    // Add your OTP verification logic
  };

  return (
    <div className={cn("section", styles.section)}>
      {submit === false ?
        <form className={styles.formContainer} onSubmit={handleMobileSubmit}>
          <Typography variant="h5" className={styles.heading}>
            Login
          </Typography>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            type="tel"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            sx={{
              width: '80%',
              marginBottom: '8px',
              marginLeft: '30px',
              marginTop: '10px'
            }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginTop: '10px',
              marginLeft: '60%',
              marginRight: '5%'
            }}
          >
            Submit
          </Button>
        </form> :
        <form className={styles.formContainer} onSubmit={{handleOTPSubmit}}>
          <Typography variant="h5"  className={styles.heading}>
            OTP Verification
          </Typography>
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            type="text"
            value={otp}
            onChange={handleOTPChange}
            sx={{
              width: '70%',
              marginBottom: '8px',
              marginLeft: '30px',
              marginTop: '10px'
            }}
            required
          />
          <div className={styles.setButton}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginLeft: '4px',
                marginRight: '8px'
              }}
              onClick={() => { setSubmit(false) }}
            >
              Regenerate OTP
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginLeft: '4px',
                marginRight: '8px'
              }}
            >
              Verify OTP
            </Button>
          </div>

        </form>
      }

    </div>
  )
}

export default Login