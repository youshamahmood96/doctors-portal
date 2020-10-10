import React from 'react';

const ServiceDetail = (props) => {
    const {name,image} = props.service
    return (
        <div className="col-md-4">
            <img src={image} alt="services"/>
            <h5>{name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi.</p>
        </div>
    );
};

export default ServiceDetail;