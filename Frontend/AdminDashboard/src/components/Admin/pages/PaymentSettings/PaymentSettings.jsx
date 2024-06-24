import { AdminHome } from "../AdminHome/AdminHome"


import  { useState } from 'react';
import './payment.css';
import { NavBar } from "../AdminHome/navbar";

const PaymentSettings = () => {
  const [paymentSettings, setPaymentSettings] = useState({
    gateway: 'PayPal',
    plan: 'Basic',
    transactionHistory: [
      { id: 1, date: '2023-01-01', amount: '$10.00' },
      { id: 2, date: '2023-02-01', amount: '$15.00' },
      { id: 3, date: '2023-03-01', amount: '$20.00' },
    ],
  });

  const handleGatewayChange = (e) => {
    setPaymentSettings({ ...paymentSettings, gateway: e.target.value });
  };

  const handlePlanChange = (e) => {
    setPaymentSettings({ ...paymentSettings, plan: e.target.value });
  };

  return (
    <div className="settings-page">
        <AdminHome/>
    
        <div className="paymentpage">
            <div className="paymentnav">
            <NavBar/>
            </div>
     
      <div className="section">
        
        <h2>Payment Settings</h2>
        <div className="form-group">
          <label htmlFor="gateway">Payment Gateway:</label>
          <select id="gateway" value={paymentSettings.gateway} onChange={handleGatewayChange}>
            <option value="PayPal">PayPal</option>
            <option value="Stripe">Stripe</option>
            <option value="Square">Square</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="plan">Subscription Plan:</label>
          <select id="plan" value={paymentSettings.plan} onChange={handlePlanChange}>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
      </div>

      <div className="section">
        <h2>Transaction History</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentSettings.transactionHistory.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export{PaymentSettings};

