import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

const CustomerList = ({ customers, setCustomers }) => {
  // delete customer
  const handleDelete = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id));
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => {
        return (
          <CustomerItem
            key={customer.id}
            customer={customer}
            handleDelete={handleDelete}
          ></CustomerItem>
        );
      })}
    </ul>
  );
};

export default CustomerList;
