import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { addItem, checkItem, removeItem } from "../redux/listsSlice";
import { useDispatch } from "react-redux";

function ListContent() {
  const params = useParams();
  const list = useSelector((state) =>
    state.lists.find((l) => l.id === params.id)
  );
  const dispatch = useDispatch();


  const [newItem, setNewItem] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addItem({
        listId: list.id,
        item: { id: nanoid(), product: newItem, checked: false },
      })
    );
    setNewItem("");
  };

  const handleChange = (item) =>
    dispatch(checkItem({ listId: list.id, itemId: item.id }));

  const handleRemove = (item) =>
    dispatch(removeItem({ listId: list.id, itemId: item.id }));

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-8">
            <div className="nav-title">
              <Link to="/" className="">
                <i class="bi bi-arrow-left"></i>
              </Link>

              <h4 className="list-title">{list.name}</h4>
            </div>

            <div
              className="list-body"
              style={{ backgroundColor: `${list.bg_color}` }}
            >
              <form action="" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="item"
                    className=""
                    id="item"
                    placeholder="Add Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                  />
                  <i
                    className="bi bi-check2 add-icon"
                    onClick={handleSubmit}
                  ></i>
                </div>
              </form>
              <ul className="list-group">
                {list.items.map((item) => (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={item.id}
                  >
                    <input
                      className="form-check-input"
                      name="item"
                      type="checkbox"
                      value={item.product}
                      id={item.id}
                      checked={item.checked}
                      onChange={() => handleChange(item)}
                    />
                    <div
                      className={
                        item.checked
                          ? "w-100 text-start text-decoration-line-through ms-2"
                          : "w-100 text-start ms-2"
                      }
                    >
                      {item.product}
                    </div>
                    <i
                      className="bi bi-x-lg delete-icon"
                      alt=""
                      onClick={() => handleRemove(item)}
                    ></i>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Helmuth Dyck</p>
        </div>
      </div>
    </div>
  );
}

export default ListContent;
