import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NewListModal from "../components/NewListModal";
import { removeList } from "../redux/listsSlice";

function AllLists() {
  const lists = useSelector((state) => state.lists);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (list) => dispatch(removeList(list));

  return (
    <div>
      <NewListModal show={show} handleClose={handleClose} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-8 lists-body-home">
            <h2 className="mb-0">
              Organize & <br />
              Get things done!
            </h2>
            <i
              className="bi bi-plus-circle add-icon-home"
              alt=""
              onClick={handleShow}
            ></i>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-8 p-0">
            <ul className="list-group">
              {lists.map((list) => (
                <li
                  className=" d-flex justify-content-between list-name rounded-pill"
                  key={list.id}
                  style={{ backgroundColor: `${list.bg_color}` }}
                >
                  <Link to={`/list/${list.id}`}>{list.name}</Link>

                  <i
                    className="bi bi-x-lg close-icon"
                    alt=""
                    onClick={() => handleRemove(list)}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            <p>Helmuth Dyck</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllLists;
