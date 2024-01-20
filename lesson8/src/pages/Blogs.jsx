import React from "react";
import { useSelector } from "react-redux";
const Blogs = () => {
  const blogs = useSelector((store) => store.AppReducer);
  return (
    <>
      <div className="container">
        <div className="row">
          {blogs?.map((item) => {
            return (
              <div className="col-lg-3 p-3">
                <div className="card" style={{ width: "100%" }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h5 className="card-title">{item.description}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
