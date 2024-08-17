import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Signup() {
    return ( 
         <div className="container">
        <div className="row">
          <div className="col-4">
          <img
          src="media/images/signup.png"
          alt="Hero Image"
          className="mt-5"
        />
          </div>
          <div className="col-4 mt-5 ">
          </div>
          <div className="col-4 mt-5 ">
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
               <h2>Sign up now</h2> 
               <p className='text-muted'>Or track your existing application.</p>
               <TextField id="outlined-basic"  mobile number
          label="Mobile Number"    defaultValue="+91" variant="outlined" />
          <p className='text-muted'>You will receive an OTP on your number</p>
          <Button variant="contained">Continue</Button>
          <p className='text-muted'>Want to open an NRI account?</p>
          </Box>
          </div>
              </div>
              <p className='mt-5 text-muted'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.
             <br/>
              If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here. </p>
             
             
        </div>
     
     );
}

export default Signup;