import { useState } from "react";
import { addList } from "../redux/listsSlice";
import { useDispatch } from "react-redux";
import { randomColor } from "randomcolor";
import { nanoid } from "@reduxjs/toolkit";

function NewListModal({ show, handleClose }) {
  const [newList, setNewList] = useState("");
  const dispatch = useDispatch();

  const handleAddList = (event) => {
    event.preventDefault();
    dispatch(
      addList({
        id: nanoid(),
        name: newList,
        bg_color: "Black",
        items: [],
        createdAt: new Date().toLocaleDateString(),
      })
    );
    setNewList("");
    handleClose();
  };

  return (
    <>
      <div
        className="modal-container"
        style={{ display: show ? "flex" : "none" }}
        onHide={handleClose}
      >
        <div className="row">
          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-8 modal-body">
            <i className="bi bi-x cancel" onClick={handleClose}></i>
            <form action="" onSubmit={handleAddList}>
              <input
                className=""
                type="text"
                name="newList"
                id="newList"
                placeholder="Create a list"
                onChange={(e) => setNewList(e.target.value)}
              />
            </form>
            <i className="bi bi-check2 create" onClick={handleAddList}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewListModal;
