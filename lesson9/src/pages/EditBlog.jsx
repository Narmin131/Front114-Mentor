import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editBlogFunction } from "../redux/Action";
const EditBlog = () => {
  const blogs = useSelector((store) => store.AppReducer);
  const { id } = useParams();
  const myBlog = blogs.find((item) => item.id === id);
  const [editedBlog, setEditedBlog] = useState(myBlog);

  const handleChange = (e) => {
    setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value });
  };

  const location = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlogFunction(editedBlog));
    location("/admin");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              disabled
              value={editedBlog.id}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={editedBlog.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Descriotion
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              defaultValue={editedBlog.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              name="image"
              defaultValue={editedBlog.image}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Edit / Update
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
