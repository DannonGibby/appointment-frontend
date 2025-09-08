import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [client, setClient] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client || !date || !time) return;

        // Call the addAppointment function passed from Dashboard
        addAppointment({ client, date, time });

        // Clear the form
        setClient("");
        setDate("");
        setTime("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mt-6 max-w-md mx-auto">
            <h2 className="text-lg font-bold mb-4">Add Appointment</h2>
            <input 
                type="text"
                placeholder="Client Name"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 mb-3 border rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Appointment</button>
        </form>
    );
};

export default AppointmentForm;
