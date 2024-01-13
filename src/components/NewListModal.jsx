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
      <div className="modal-container" style={{ display: show ? "flex" : "none" }} onHide={handleClose}>
        <div className="modal-body">
          <h4>Create a new list</h4>
          <form action="">
            <input
              className="input"
              type="text"
              name="newList"
              id="newList"
              placeholder="Name it!"
              onChange={(e) => setNewList(e.target.value)}
            />
          </form>
          <div className="modal-actions">
            <button variant="light" onClick={handleClose}>
              Cancel
            </button>
            <button variant="secondary" onClick={handleAddList}>
              Create List
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewListModal;
