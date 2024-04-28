import { useState } from "react";
import "../App.css";
const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Date.now(),
      date,
      amount: parseFloat(amount) || 0,
      description,
      category,
    };
    onSubmit(newTransaction);
    setDate("");
    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <div  className="input-container">
      <form 
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
          width: "550",
        }}
      >
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          style={{
            padding: "10px",
            border: "2px solid #ccc",
            marginRight: "10px",
            width: "300px",
          }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{
            padding: "10px",
            border: "2px solid #ccc",
            marginBottom: "10px",
            width: "300px",
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          style={{
            padding: "10px",
            border: "2px solid #ccc",
            marginBottom: "10px",
            width: "300px",
          }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          style={{
            padding: "10px",
            border: "2px solid #ccc",
            marginBottom: "10px",
            width: "250px",
          }}
        />
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          padding: "3px 15px",
          marginBottom: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default TransactionForm;
