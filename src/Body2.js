import React from "react";
import "./Body2.css";

function Body2() {
  return (
    <div>
      <div className="cardsdiv">
        <div className="d1 container">
          <div className="d3">
            <img src="https://i.postimg.cc/Gt5VSZ5k/Layer-5-Image.jpg" alt="" />
            <div className="">
              <h5>Lorem Ipsum</h5>
              <p>Lorem ipsum is simply dummy</p>
            </div>
          </div>
          <div className="d3">
            <img src="https://i.postimg.cc/Gt5VSZ5k/Layer-5-Image.jpg" alt="" />
            <div className="">
              <h5>Lorem Ipsum</h5>
              <p>Lorem ipsum is simply dummy</p>
            </div>
          </div>
          <div className="d3">
            <img src="https://i.postimg.cc/Gt5VSZ5k/Layer-5-Image.jpg" alt="" />
            <div className="">
              <h5>Lorem Ipsum</h5>
              <p>Lorem ipsum is simply dummy</p>
            </div>
          </div>
          <div className="d3">
            <img src="https://i.postimg.cc/Gt5VSZ5k/Layer-5-Image.jpg" alt="" />
            <div className="">
              <h5>Lorem Ipsum</h5>
              <p>Lorem ipsum is simply dummy</p>
            </div>
          </div>
        </div>
        <div className="ordersummarymain">
          <p>Order Summary</p>
        </div>
      </div>
      <div className="button1">
        <button
          style={{ padding: "5px 65px" }}
          type="button"
          class="btn btn-success"
        >
          Checkout
        </button>
      </div>

      <div className="g1">
        <div className="parentdiv container w-50 p-5">
          <form className="">
            <label htmlFor="name">Full Name</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="name"
              name="name"
              required
            />
            <br />

            <label htmlFor="address1">Address Line 1</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address1"
              name="address1"
              required
            />
            <br />

            <label htmlFor="address2">Address Line 2</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />

            <label htmlFor="mobile">Mobile Number</label>
            <br />
            <input
              className="mt-2"
              type="tel"
              id="mobile"
              name="mobile"
              required
            />
            <br />

            <label htmlFor="address2">city</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />

            <label htmlFor="address2">Zip Code</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />
          </form>

          <form className="">
            <label htmlFor="name">Billing Address</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="name"
              name="name"
              required
            />
            <br />

            <label htmlFor="address1">Address Line 1</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address1"
              name="address1"
              required
            />
            <br />

            <label htmlFor="address2">Address Line 2</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />

            <label htmlFor="mobile">Mobile Number</label>
            <br />
            <input
              className="mt-2"
              type="tel"
              id="mobile"
              name="mobile"
              required
            />
            <br />

            <label htmlFor="address2">city</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />

            <label htmlFor="address2">Zip Code</label>
            <br />
            <input
              className="mt-2"
              type="text"
              id="address2"
              name="address2"
              required
            />
            <br />
          </form>
        </div>
        <p style={{ textAlign: "center" }}>
          Billing Address Same as Shipping Address
        </p>
        <div className="button1">
          <button
            style={{ padding: "5px 65px" }}
            type="button"
            class="btn btn-success"
          >
            Proceed for payment
          </button>
        </div>
      </div>
      <div className="f3">
        <div className="container f4">
          <h1>
            <b>Payment</b>
          </h1>
          <p>Choose payment method below</p>
          <div className="innerdiv">
            <div className="smalldiv"></div>
            <div className="smalldiv"></div>
            <div className="smalldiv"></div>
          </div>

          <label htmlFor="name">CARD NUMBER</label>
          <br />
          <input
            className=""
            type="text"
            id="name"
            name="name"
            required
            placeholder="1234  5648  2457  5478"
          />
          <br />
          <label htmlFor="name">CARD HOLDER NAME</label>
          <br />
          <input className="" type="text" id="name" name="name" required />
          <br />
          <label htmlFor="name">EXPIRE DATE</label>
          <br />
          <input
            className=""
            type="text"
            id="name"
            name="name"
            required
            placeholder="05/21"
          />
          <br />
          <label htmlFor="name">CVV</label>
          <br />
          <input
            className=""
            type="text"
            id="name"
            name="name"
            required
            placeholder="123"
          />
          <br />
        </div>
        <div className="f5">
        <button
          style={{ padding: "5px 65px" }}
          type="button"
          class="btn btn-success"
        >
          Place Order
        </button>
      </div>
      </div>
    </div>
  );
}

export default Body2;
