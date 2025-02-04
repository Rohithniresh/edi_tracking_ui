import React, { useState } from "react";
import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import Alerts from "../components/Alerts";


export default function Home() {
  const [filters, setFilters] = useState({});

  return (
    <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">EDI Transaction Monitor</h1>
      <Filters setFilters={setFilters} />
      <Alerts />
      <TransactionTable filters={filters} />
    </div>
  );
}
