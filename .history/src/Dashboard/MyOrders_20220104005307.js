import { faLongArrowAltLeft, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MyOrders = () => {
const cart = useSelector((state) => state.cart);

    return (
        <div>
                
        </div>
    );
};

export default MyOrders;