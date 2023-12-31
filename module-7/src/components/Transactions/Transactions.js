import React from "react";
import Transaction from "./Transaction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactions } from "../../feature/transaction/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p className="error">There was an error ocured</p>;
  }

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction}></Transaction>
    ));
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transaction found!</p>;
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
};

export default Transactions;
