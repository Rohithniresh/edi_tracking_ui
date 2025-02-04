import React, { useState, useEffect } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulating real-time alert updates (in a real-world scenario, this would come from a backend)
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        message: "Transaction TXN67890 has failed due to missing acknowledgment.",
        type: "error",
      };
      setAlerts((prevAlerts) => [newAlert, ...prevAlerts].slice(0, 5)); // Keep only the last 5 alerts
    }, 10000); // Simulating new alerts every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-6">
      <h2 className="text-xl font-semibold mb-4">Alerts</h2>
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={`p-3 mb-2 rounded-lg ${
                alert.type === "error" ? "bg-red-50 text-red-700" : "bg-green-100 text-green-700"
              }`}
            >
              {alert.message}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No new alerts.</p>
      )}
    </div>
  );
}
