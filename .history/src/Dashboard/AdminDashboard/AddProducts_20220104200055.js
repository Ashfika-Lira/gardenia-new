import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const [status, setStatus] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [imageAdd, setImageAdd] = useState(null);

  const onSubmit = (data) => {
    if (!imageAdd) {
      return alert(" Please Add an image");
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("model", data.model);
    formData.append("status", data.status);
    formData.append("productId", data.productId);
    formData.append("date", data.date);
    formData.append("description", data.description);
    formData.append("imageAdd", imageAdd);

    fetch("https://fathomless-shelf-34125.herokuapp.com/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          console.log("Successfully added Products");
        }
        
        setStatus(!status);
        alert("Successfully Added A Product into database....  ");
        reset();
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="px-3 container add-products-form mb-5 ">
      <h3 className="mb-3 mt-3 product-title ">New Products Add to Database</h3>
      <Row xs={12} md={12}  className=" w-100">
        {/* <Col className=" booking-form  px-3 mb-5" xs={12} md={12} > */}
          <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
            <Row >
              <Col className="mt-4">
                <h5>Product Name *</h5>
                <input
                  required
                  type="text"
                  className="w-100"
                  placeholder="Products Name"
                  {...register("name")}
                />
              </Col>
              <Col className="mt-4">
                <h5>Product Price *</h5>
                <input
                  required
                  type="number"
                  className="w-100"
                  placeholder="Products Price"
                  {...register("price")}
                />
              </Col>
            </Row>

            <Row >
              <Col className="mt-4">
                <h5>Product Model*</h5>
                <input
                  required
                  className="w-100"
                  placeholder="Product Model"
                  {...register("model")}
                />
              </Col>
              <Col className="mt-4">
                <h5>Default Status *</h5>
                <input
                  required
                  defaultValue="Pending"
                className="w-100"
                  {...register("status")}
                />
              </Col>
            </Row>
            <Row >
              <Col className="mt-4">
                <h5>Product ID *</h5>
                <input
                  required
                  type="text"
                  className="w-100"
                  placeholder="Product Id"
                  {...register("productId")}
                />
              </Col>
              <Col className="mt-4">
                <h5>Date *</h5>
                <input
                  required
                  type="date"
                  placeholder="Date"
                className="w-100"
                  {...register("date")}
                />
              </Col>
            </Row>
            <Row >
              <Col className="mt-4">
                <h5>Product Img *</h5>
                <input
                  className="w-100"
                  accept="image/*"
                  required
                  type="file"
                  onChange={(e) => setImageAdd(e.target.files[0])}
                  // placeholder="Product Img URL"
                  // {...register("productImg")}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
                <h5>Description</h5>
                <textarea
                  placeholder="Products Description"
                className="w-100"
                  {...register("description")}
                />
              </Col>
            </Row>

            <input className="mt-5 bookingBtn " type="submit" />
          </form>
        {/* </Col> */}
      </Row>
    </div>
  );
};

export default AddProducts;
