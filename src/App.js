import { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];

function App() {
  // Your code here
  const [showSaleItemsOnly, setShowSaleItemsOnly] = useState(items);
  const [showAllItems, setshowAllItems] = useState(true);

  const handleFilter = () => {
    if (showAllItems) {
      const filtered = items.filter((item) => item.onSale === true);
      setShowSaleItemsOnly(filtered);
    } else {
      setShowSaleItemsOnly(items);
    }
    setshowAllItems(!showAllItems);
  };

  return (
    // <div className="container">
    //   <h3 className="fw bold mt-4 mb-3">Shopping Cart</h3>
    //   <button
    //     type="button"
    //     className="btn btn-primary mb-4 px-3"
    //     onClick={handleFilter}
    //   >
    //     nigga button
    //   </button>
    //   {showSaleItemsOnly.map((item) => (
    //     <h3>{item.name}</h3>
    //   ))}
    // </div>

    <div className="container">
      <h3 className="fw bold mt-5">Shopping Cart</h3>
      <button className="btn btn-primary my-3 mb-4" onClick={handleFilter}>
        {showAllItems ? "Show Sale Items Only" : "Show All Items Only"}
      </button>
      {showSaleItemsOnly.map((item) => (
        <p
          className="d-flex justify-content-between "
          key={item.id}
        >
          <div className="d-flex align-items-center">
            <h3>{item.name}</h3>
            {item.onSale && (
              <h4 className="badge bg-danger py-2 ms-3">On Sale!</h4>
            )}
          </div>
          <h3>${item.price}</h3>
        </p>
      ))}
    </div>
  );
}

export default App;
