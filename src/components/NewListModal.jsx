import { useState } from "react";
import { addList } from "../redux/listsSlice";
import { useDispatch } from "react-redux";
import { randomColor } from "randomcolor";
import { nanoid } from "@reduxjs/toolkit";

function NewListModal({ show, handleClose }) {
  const [newList, setNewList] = useState("");
  const dispatch = useDispatch();

  const handleAddList = () => {
    dispatch(
      addList({
        id: nanoid(),
        name: newList,
        bg_color: "Black",
        items: [],
        createdAt: new Date().toLocaleDateString(),
      })
    );
    handleClose();
  };

  return (
    <>
      <div
        className="modal-container"
        style={{ display: show ? "flex" : "none" }}
        onHide={handleClose}
      >
        <div className="modal-body">
          <i className="bi bi-x cancel" onClick={handleClose}></i>
          <form action="">
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
    </>
  );
}

export default NewListModal;
