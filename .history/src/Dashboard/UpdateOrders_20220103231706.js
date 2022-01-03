import React, { useEffect, useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {  useLocation, useNavigate} from "react-router-dom";
// import Footer from "../Shared/Footer";
import {useParams} from "react-router-dom";
// import useOrders from "../../hook/useOrders";
// import useData from "../../hook/useData";

const UpdateOrders = () => {
//   const { data } = useData();
  // console.log( useParams());
  const { updateOrder,id2 } = useParams();
  // console.log(updateOrder,id2);

  const { register, handleSubmit, reset } = useForm();
  
  
  const matchData = data.find(item => item.productId === id2)
  // console.log(matchData);
  const [manageOrders, setManageOrders] = useState({});
  const location = useLocation();
  const history = useNavigate();


  const redirect_uri = location.state?.from || "/dashboard";
 

  useEffect(() => {
  
    const url = `https://fathomless-shelf-34125.herokuapp.com/orders/${updateOrder}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          setManageOrders(data);
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>;
        } else {
          setManageOrders(data);
        }
      })
    .catch()
  }, [updateOrder]);



  const onSubmit = (data) => {
    const url = `https://fathomless-shelf-34125.herokuapp.com/orders/${updateOrder}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setManageOrders(data);
        if (data.modifiedCount > 0) {
          alert("Successfully Update one document.");
          setManageOrders({});
          reset();
        } else {
          alert("No documents matched the query. Update 0 documents.");
          history.push(redirect_uri);
        }
      });
  };

  return (
    <div>
      <div className="px-3 container">
        <h2 className="text-center mt-2 product-title ">UPDATE ALL ORDERS </h2>
        <Row className="mt-5 ">
      
          <Col className="pe-5" xs={12} md={6}>
            
            <h2> Product Id:  {manageOrders?.productId} </h2>
            <h2>Name:  {manageOrders?.productName} </h2>
           <Image className="w-75" src={matchData?.productImg} />
          </Col>

          <Col className=" booking-form  px-3 mb-5" xs={12} md={6}>
            <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center mt-2 price-header">
                <p>
                  {" "}
                  Starts From :{" "}
                  <span className="fs-4 text-warning fw-bold">
                    {manageOrders?.productPrice}
                  </span>
                </p>
              </div>
              <h3 className="mt-2 text-center ">
                <span className="categories">{manageOrders?.name}</span>{" "}
                <span className="">UPDATE ORDERS</span>{" "}
              </h3>

              <Row className="mb-3">
                <Col>
                  <h5>Package Name *</h5>
                  <input
                    className="w-100 h-75"
                    defaultValue={manageOrders?.productName}
                    {...register("productName")}
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <h5>Email *</h5>
                  <input
                    className="w-100 h-75"
                    defaultValue={manageOrders?.email}
                    {...register("email")}
                  />
                </Col>
                <Col>
                  <h5>Name *</h5>
                  <input
                    className="w-100 h-75"
                    defaultValue={manageOrders?.buyerName}
                    {...register("buyerName")}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5>Status *</h5>
                  <input
                    className="w-100 h-75"
                    // placeholder="Status"
                    defaultValue={manageOrders?.status}
                    {...register("status")}
                  />
                </Col>
                <Col>
                  <h5>Address *</h5>
                  <input
                    className="w-100 h-75"
                    defaultValue={manageOrders?.Address}
                    {...register("Address")}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h5>Date *</h5>
                  <input
                    type="date"
                    placeholder="Date"
                    className="w-100 h-75"
                    {...register("date")}
                  />
                </Col>
                <Col>
                  <h5>Mobile *</h5>
                  <input
                    defaultValue={manageOrders?.mobile}
                    className="w-100 h-75"
                    {...register("mobile")}
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <h5>Your Message</h5>
                  <textarea
                    className="w-100 h-100"
                    defaultValue={manageOrders?.message}
                    {...register("message")}
                  />
                </Col>
              </Row>

              <input className="mt-5 bookingBtn w-100" type="submit" />
            </form>
          </Col>
        </Row>
      </div>
      
    </div>
  );
};

export default UpdateOrders;
