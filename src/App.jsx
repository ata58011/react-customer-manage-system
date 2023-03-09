import "./App.css";
import CustomerList from "./components/CustomerList/CustomerList";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import { useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer}></CustomerForm>

      {customers.length === 0 && "There are no customers.."}
      <CustomerList
        customers={customers}
        setCustomers={setCustomers}
      ></CustomerList>
    </div>
  );
}

export default App;
