import React from "react";
import "./Body.css";
import { Col, Image, Row } from "react-bootstrap";

function Body() {
  return (
    <div className="maincontainer">
      {/* <Row className="row"> */}
        {/* <Col lg={6} className=""> */}
        <div className="maindivbody1">
          <div
            // style={{ marginLeft: "200px" }}
            className="firstcontainer b1"
          >
            <h1 style={{ color: "green" }}>Play And Learn</h1>
            <h4 style={{ color: "purple" }}>
              <b>World's First Augmented Reality</b>
            </h4>
            <p b style={{ color: "purple" }}>
              powered <b>TECH-ART KIT</b>{" "}
            </p>
            <p style={{ color: "purple" }}>for young innovators</p>
          </div>
          {/* </Col> */}
          {/* <Col lg={6} className="d-flex align-items-center"> */}
          {/* <div className="boy"> */}
            <Image
              style={{}}
              className="image1"
              src="https://i.postimg.cc/KcMxTLfs/Mask-Group-1-3x.jpg"
            />
          {/* </div> */}
        </div>
        {/* </Col> */}
      {/* </Row> */}

      <div className="b2">
        <img
          src="https://i.postimg.cc/gJPFqtNS/Group-639.jpg"
          alt=""
          style={{ width: "200px", height: "200px" }}
        />

        <img
          className="ms-5 mt-5"
          src="https://i.postimg.cc/htcnnCkR/Group-1.jpg"
          alt=""
          style={{ width: "380px", height: "60px" }}
        />
      </div>

      <div>
        <div className="videoimage">
        <img
          className="w-50 b3"
          src="https://i.postimg.cc/25tGGzMw/child-865116-1920.jpg"
          alt=""
        />
        <img
          className="b4"
          src="https://i.postimg.cc/d1bjr4pt/Polygon-3.jpg"
          alt=""
          style={{position:"absolute"}}
        />
        </div>
        <p className="b5">
          Specially crafted{" "}
          <b style={{ color: "orange" }}>
            <b style={{ color: "green" }}>STEAM </b>( Science, Technology,
            Engineering, Arts, Maths )
          </b>{" "}
          <br /> activity projects for kids to explore the concepts with a
          hands-on experience at home.
        </p>
        <div className="buytodaybutton">
        <img
          className="b6"
          src="https://i.postimg.cc/fT3XN623/Group-723.jpg"
          alt=""
        />
        </div>
      </div>
      <br />
      <br />

      <div>
        <img src="https://i.postimg.cc/w3Yz7Hxz/Group-703.jpg" alt="" style={{    height: "350px"}}/>
        <div className="buytodaybutton">
        <img
          className="b6"
          src="https://i.postimg.cc/fT3XN623/Group-723.jpg"
          alt=""
        />
        </div>
        <p className="b5">Get a flat 20% launch discoun</p>
      </div>

      <div className="b7">
        <div className="b8 ninocontainer">
          <div className="twocardcontainer" style={{ justifyContent:"flex-end", gap:"10px"}}>
          <div className="b9">
            <img src="https://i.postimg.cc/nrm7Fj4P/Layer-5-Image.jpg" alt="" />
            <div className="cardbody">
            <h2>Nino Kit-1</h2>
            <p>
              Lorem ipsum dolor sit 
            </p>
            <div className="buttonsection">
            <h5>View More</h5>
            <button type="button" class="btn btn-primary" disabled>
              Add to cart
            </button>
            </div>
            </div>
          </div>
          <div className="b9">
            <img src="https://i.postimg.cc/nrm7Fj4P/Layer-5-Image.jpg" alt="" />
            <div className="cardbody">
            <h2>Nino Kit-1</h2>
            <p>
              Lorem ipsum dolor sit 
            </p>
            <div className="buttonsection">
            <h5>View More</h5>
            <button type="button" class="btn btn-primary" disabled>
              Add to cart
            </button>
            </div>
            </div>
          </div>
          </div>
          <div className="twocardcontainer"style={{ justifyContent:"flex-start", gap:"10px"}}>
          <div className="b9">
            <img src="https://i.postimg.cc/nrm7Fj4P/Layer-5-Image.jpg" alt="" />
            <div className="cardbody">
            <h2>Nino Kit-1</h2>
            <p>
              Lorem ipsum dolor sit 
            </p>
            <div className="buttonsection">
            <h5>View More</h5>
            <button type="button" class="btn btn-primary" disabled>
              Add to cart
            </button>
            </div>
            </div>
          </div>
          <div className="b9">
            <img src="https://i.postimg.cc/nrm7Fj4P/Layer-5-Image.jpg" alt="" />
            <div className="cardbody">
            <h2>Nino Kit-1</h2>
            <p>
              Lorem ipsum dolor sit 
            </p>
            <div className="buttonsection">
            <h5>View More</h5>
            <button type="button" class="btn btn-primary" disabled>
              Add to cart
            </button>
            </div>
            </div>
            <div>
            </div>
          </div>
          </div>
        </div>
       <div className="buttonsectionbottom"> 
        <button  style={{backgroundColor:"red",     padding: "2px 45px", borderRadius: "5px", color: "white"}}>Go To Cart</button>
        <button style={{backgroundColor:"green",     padding: "2px 45px", borderRadius: "5px", color: "white"}}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
