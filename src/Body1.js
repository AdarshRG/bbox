import React from "react";
import "./Body1.css";
import { Col, Image, Row } from "react-bootstrap";


function Body1() {
  return (
    <div className="">
      <div className="c1">
        <div className="c2 container p-5">
          <h1>
            Ignite your ideas with <br />
            Lumino Lamp
          </h1>
          <br />
          <br />
          <button type="button" class="btn btn-success">
            GET IT
          </button>
        </div>
      </div>

      <div className="c3 ">
        <Row className="div1">
          <div className="maindivbody1">
            <div className="boy">
              <Image
                style={{}}
                className="boyimage"
                src="https://i.postimg.cc/ydhy469K/ben-white-4-K2l-IP0zc-k-unsplash.jpg"
              />
            </div>
            <div className="boytext">
              <p>
                <b> Your child will learn</b> the basic <br /> concepts of
                electronics and mechanical <br /> joints by creating their own
                table lamp. <br /> using a few electronic components like <br />{" "}
                battery, switches, LEDs
              </p>
            </div>
          </div>
        </Row>
      </div>
      <div className="c4 container ">
        <div className="c6">
          <div className="ash"></div>
          <br />
          <p className="c7">lorem ipsum</p>
        </div>
        <div className="c6">
          <div className="ash"></div>
          <br />
          <p className="c7">lorem ipsum</p>
        </div>
        <div className="c6">
          <div className="ash"></div>
          <br />
          <p className="c7">lorem ipsum</p>
        </div>
      </div>

      <div className="c8">
      <Row>
      <div className="div360">
          <Image
            style={{ height: "350px"}}
            className="typeimage"
            src="https://i.postimg.cc/rFLvKfFf/Group-620.jpg"
          />
          <div className="textsection">
          <h4>
                <b>Lorem Ipsum is simply dummy text <br /> of the</b> </h4>
                <p>
                printing and typesetting
                industry. Lorem Ipsum has been theindustry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </p>
    </div>
        </div>
      </Row>
      </div>
      <div className="c11" >
      <button style={{ textAlign: "center", padding: "5px 70px" }} type="button" className="btn btn-success">Buy Today</button>
      <p style={{ margin: "5px 0 0 0"}}>Get a flat 20% launch discount</p>
      </div>
      

    </div>
  );
}

export default Body1;
