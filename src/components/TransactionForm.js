// import React, { useState } from 'react';

// function TransactionForm({ onSubmit }) {
//   const [date, setDate] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('Income');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newTransaction = {
//       id: Date.now(),
//       date,
//       amount: parseFloat(amount) || 0,
//       description,
//       category,
//     };
//     onSubmit(newTransaction);
//     setDate('');
//     setAmount('');
//     setDescription('');
//     setCategory('Income');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Date:
//         <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//       </label>
//       <label>
//         Amount:
//         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <label>
//         Category:
//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="Income">Income</option>
//           <option value="Expense">Expense</option>
//         </select>
//       </label>
//       <button type="submit">Add Transaction</button>
//     </form>
//   );
// }

// export default TransactionForm;
import React from "react";

const TransactionForm = () => {
    return (
        <div>
            <form>
                <label>Date</label>
                <input type= "date"/>

                <label>Description</label>
                <input type= "text" placeholder="Description"/>

                <label>Category</label>
                <input type= "text" placeholder="Category"/>

                <label>Amount</label>
                <input type= "number" placeholder=""Amount/>

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
export default TransactionForm;