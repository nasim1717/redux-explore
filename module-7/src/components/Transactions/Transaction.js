import React from "react";
import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";
import { useDispatch } from "react-redux";
import { editActive, removeTransactions } from "../../feature/transaction/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

const Transaction = ({ transaction }) => {
  const { name, amount, type, id } = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransactions(id));
  };

  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className="right">
          <p>৳ {numberWithCommas(amount)}</p>
          <button onClick={handleEdit} className="link">
            <img alt="Edit" className="icon" src={editImage} />
          </button>
          <button className="link" onClick={handleDelete}>
            <img alt="Delete" className="icon" src={deleteImage} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Transaction;
