import "./App.css";
import React, { useState } from "react";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import SearchField from "./components/Search";
import DisplayTitle from "./components/Title";

// app component
function App() {
  // this is a variable containing all the array of the objects
  const [transactions, setTransactions] = useState([
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99,
    },
    {
      date: "2019-12-06",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 8.75,
    },
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: -17.59,
    },
  ]);

  // a function to add a new transaction
  const addTransaction = (newTransaction) => {
    // after adding we are supposed to update the new transaction to the array
    setTransactions([...transactions, newTransaction]);
  };

  //another function to filter based on the searched query
  const searchDirect = (searchQuery) => {
    //filtering the transactions
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
    // for updating the state that have the filtered transactions
    setTransactions(filteredTransactions);
  };
  return (
    // rendering the diffrent components
    <div>
      <DisplayTitle />

      <SearchField searchTitle={searchDirect} />
      <TransactionForm onSubmit={addTransaction} />

      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
