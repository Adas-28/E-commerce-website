import React, { useEffect, useState } from 'react';
import '../css/order.css'
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const dummyOrders = [
        {
            id: 'ORD001',
            customer: 'Aniruddhya Das',
            amount: 1200,
            status: 'Pending',
            date: '2025-06-15T10:00:00Z',
        },
        {
            id: 'ORD002',
            customer: 'Kaustab Manna',
            amount: 780,
            status: 'Delivered',
            date: '2025-06-14T12:30:00Z',
        },
        {
            id: 'ORD003',
            customer: 'Ribhu Chakraborty',
            amount: 430,
            status: 'Cancelled',
            date: '2025-06-10T09:45:00Z',
        },
    ];

    useEffect(() => {
        setOrders(dummyOrders);
    }, []);

    const handleStatusChange = (id, newStatus) => {
        const updated = orders.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order
        );
        setOrders(updated);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredOrders = orders.filter(
        (order) =>
            order.customer.toLowerCase().includes(searchTerm) ||
            order.id.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-12 p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 p-0 m-0">
                    <Topbar />
                    <div className="p-6">
                        <h4 className="text-2xl font-bold mb-4">Admin Order Panel</h4>

                        <input
                            type="text"
                            placeholder="Search by Customer or Order ID"
                            className="border px-4 py-2 mb-4 w-full max-w-md rounded"
                            onChange={handleSearch}
                        />

                        <button
                            onClick={() => setOrders(dummyOrders)}
                            className="bg-blue-600 text-Black px-4 py-2 rounded mb-4 ml-2"
                        >
                            🔄 Refresh
                        </button>

                        <table className="min-w-full border">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-2 border">Order ID</th>
                                    <th className="p-2 border">Customer</th>
                                    <th className="p-2 border">Amount</th>
                                    <th className="p-2 border">Status</th>
                                    <th className="p-2 border">Date</th>
                                    <th className="p-2 border">Update Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="p-2 border">{order.id}</td>
                                        <td className="p-2 border">{order.customer}</td>
                                        <td className="p-2 border">₹{order.amount}</td>
                                        <td className="p-2 border">
                                            <span
                                                className={`px-2 py-1 rounded text-white ${order.status === 'Delivered'
                                                        ? 'bg-green-500'
                                                        : order.status === 'Pending'
                                                            ? 'bg-yellow-500'
                                                            : 'bg-red-500'
                                                    }`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="p-2 border">
                                            {new Date(order.date).toLocaleDateString()}
                                        </td>
                                        <td className="p-2 border">
                                            <select
                                                value={order.status}
                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                className="border rounded px-2 py-1"
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
