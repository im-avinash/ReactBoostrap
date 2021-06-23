import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <React.Fragment>
      <section id="header" className="header d-flex align-item-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1>
                    {props.name}{" "}
                    <strong className="brand-name">ReactJS </strong>
                  </h1>
                  <h2 className="my-3">
                    React Developers loves react library.
                  </h2>
                  <div className="mt-3">
                    <NavLink exact to={props.visit} className="btn-get-started">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Common;
