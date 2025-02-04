import React, { useState, useEffect } from "react";

export default function TransactionTable({ filters }) {
  const [transactions, setTransactions] = useState([
    {
      id: "TXN12345",
      sender: "Company A",
      receiver: "Company B",
      transactionId: "850",
      poNumber: "PO1234",
      asnNumber: "ASN5678",
      status: "Success",
      date: "2024-02-03",
    },
    {
      id: "TXN67890",
      sender: "Company C",
      receiver: "Company D",
      transactionId: "855",
      poNumber: "PO5678",
      asnNumber: "ASN91011",
      status: "Failed",
      date: "2024-02-02",
    },
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  useEffect(() => {
    let filteredData = transactions.filter((txn) => {
      return (
        (!filters.sender || txn.sender.includes(filters.sender)) &&
        (!filters.receiver || txn.receiver.includes(filters.receiver)) &&
        (!filters.transactionId || txn.transactionId.includes(filters.transactionId)) &&
        (!filters.poNumber || txn.poNumber.includes(filters.poNumber)) &&
        (!filters.asnNumber || txn.asnNumber.includes(filters.asnNumber)) &&
        (!filters.dateFrom || new Date(txn.date) >= new Date(filters.dateFrom)) &&
        (!filters.dateTo || new Date(txn.date) <= new Date(filters.dateTo))
      );
    });

    setFilteredTransactions(filteredData);
  }, [filters, transactions]);

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Transaction ID</th>
            <th className="border p-2">Sender</th>
            <th className="border p-2">Receiver</th>
            <th className="border p-2">PO Number</th>
            <th className="border p-2">ASN Number</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((txn) => (
              <tr key={txn.id} className="text-center">
                <td className="border p-2">{txn.transactionId}</td>
                <td className="border p-2">{txn.sender}</td>
                <td className="border p-2">{txn.receiver}</td>
                <td className="border p-2">{txn.poNumber}</td>
                <td className="border p-2">{txn.asnNumber}</td>
                <td
                  className={`border p-2 ${
                    txn.status === "Success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {txn.status}
                </td>
                <td className="border p-2">{txn.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="border p-2 text-center">
                No Transactions Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
