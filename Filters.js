import React, { useState } from "react";

export default function Filters({ setFilters }) {
  const [formValues, setFormValues] = useState({
    sender: "",
    receiver: "",
    transactionId: "",
    poNumber: "",
    asnNumber: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    setFilters(formValues);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl mb-6 border border-gray-300 backdrop-blur-md bg-opacity-80">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          name="sender"
          placeholder="Sender"
          value={formValues.sender}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="text"
          name="receiver"
          placeholder="Receiver"
          value={formValues.receiver}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="text"
          name="transactionId"
          placeholder="Transaction ID"
          value={formValues.transactionId}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="text"
          name="poNumber"
          placeholder="PO Number"
          value={formValues.poNumber}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="text"
          name="asnNumber"
          placeholder="ASN Number"
          value={formValues.asnNumber}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="date"
          name="dateFrom"
          value={formValues.dateFrom}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
        <input
          type="date"
          name="dateTo"
          value={formValues.dateTo}
          onChange={handleChange}
          className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" 

        />
      </div>
      <button
        onClick={applyFilters}
        className="mt-4 bg-blue-600 text-white p-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}
