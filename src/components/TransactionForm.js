
import { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "40px" }}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          style={{ padding: "5px", border: "2px solid #ccc" }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{ padding: "10px", border: "2px solid #ccc" }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          style={{ padding: "10px", border: "2px solid #ccc" }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          style={{ padding: "10px", border: "2px solid #ccc" }}
        />

        <button type="submit" style={{ padding: "20px" }}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
