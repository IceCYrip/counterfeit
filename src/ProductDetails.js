import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import backendServerURL from "./url";
import "./styles/ProductDetails.css";
import "./styles/SweetAlert2.css";

import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});

  const routeTo = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`${backendServerURL}/product/getProduct`, {
        productID: id,
      })
      .then((res) => {
        console.log("resData", res.data);
        setProductDetails(res.data);
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          customClass: {
            confirmButton: "btnError",
          },
          buttonsStyling: false,
        })
      );
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="productDetailsWrapper">
        <div className="productDetailsContainer">
          <h1>PRODUCT DETAILS</h1>
          <table>
            <tbody>
              <tr className="tableRow">
                <td>Brand</td>
                <td>:</td>
                <td>{productDetails?.brand}</td>
              </tr>
              <tr className="tableRow">
                <td>Product ID</td>
                <td>:</td>
                <td>{productDetails?.productID}</td>
              </tr>
              <tr className="tableRow">
                <td>Batch No</td>
                <td>:</td>
                <td>{productDetails?.batchNo}</td>
              </tr>
              <tr className="tableRow">
                <td>Price</td>
                <td>:</td>
                <td>{productDetails?.price}</td>
              </tr>
              <tr className="tableRow">
                <td>Date of Manufacture</td>
                <td>:</td>
                <td>{productDetails?.dateOfManufacture}</td>
              </tr>
            </tbody>
          </table>
          <button className="homeBttn" onClick={() => routeTo("/")}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
