import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBlogFunction } from "../redux/Action";
const Admin = () => {
  const blogs = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hello admin</h1>
      <button>add new blog +</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item) => {
            return (
              <>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>
                    <img src={item.image} alt="" style={{ width: "120px" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-warning">edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeBlogFunction(item.id))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
