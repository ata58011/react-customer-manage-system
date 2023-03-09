import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setcustomerName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setcustomerName("");
  };
  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new  customer"
        className="customer-input"
        onChange={(e) => {
          setcustomerName(e.target.value);
        }}
        value={customerName}
      />
      <button>
        <i className=" bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
