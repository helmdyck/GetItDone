import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: [
    // {
    //   id: "5er55sr55e",
    //   name: "Verdulería",
    //   bg_color: "#99B080",
    //   items: [
    //     { id: "5fd5fd", product: "Frutilla", checked: false },
    //     { id: "5fd65h", product: "Pera", checked: false },
    //   ],
    // },
    // {
    //   id: "568978sr55e",
    //   name: "Carnicería",
    //   bg_color: "#F9B572",
    //   items: [{ id: "5ftr5h", product: "Milanesa", checked: false }],
    // },
  ],
  reducers: {
    addList(state, action) {
      state.push(action.payload);
    },
    removeList(state, action) {
      return state.filter((list) => list.id !== action.payload.id);
    },
    addItem(state, action) {
      const { listId, item } = action.payload;
      const targetList = state.find((item) => item.id === listId);
      targetList.items.push(item);
    },
    checkItem(state, action) {
      const { listId, itemId } = action.payload;
      const targetList = state.find((item) => item.id === listId);
      const targetItem = targetList.items.find((item) => item.id === itemId);
      targetItem.checked = !targetItem.checked;
    },
    removeItem(state, action) {
      const { listId, itemId } = action.payload;
      const targetList = state.find((item) => item.id === listId);
      const newLists = targetList.items.filter((item) => item.id !== itemId);
      targetList.items = newLists;
    },
  },
});

const { actions, reducer } = listsSlice;
export const { addList, removeList, addItem, checkItem, removeItem } = actions;
export default reducer;
