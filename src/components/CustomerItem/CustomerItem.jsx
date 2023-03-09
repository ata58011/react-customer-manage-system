import React from "react";

const CustomerItem = ({ customer, handleDelete }) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-button" onClick={() => handleDelete(customer)}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
