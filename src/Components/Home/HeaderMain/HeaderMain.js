import React from 'react';
import { Button } from 'react-bootstrap';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main style={{textAlign: 'left',height: '600px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}} >Your New Smile  <br></br> Starts Here</h1>
            <p className="text-secondary"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet ducimus, omnis similique dolorum officiis. </p>
            <Button>Get Appointment</Button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={chair} alt="chair" />
          </div>
        </main>
    );
};

export default HeaderMain;