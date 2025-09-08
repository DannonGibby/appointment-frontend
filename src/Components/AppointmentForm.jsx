import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
    const [client, setClient] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client || !date || !time) return;
        addAppointment({ client, date, time });
        setClient("");
        setDate("");
        setTime("");
    };

    return (
        <section className="mt-8">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow-xl max-w-lg mx-auto border border-gray-200"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800"> Add Appointment</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Client Name"
                            value={client}
                            onChange={(e) => setClient(EventTarget.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pruple-500 focus:border-purple-500"
                        />
                        <input  
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                        <button
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-purple-700 hover:to-blue-700 transition"
                        >
                            Add Appointment
                        </button>
                    </div>
                </form>
        </section>
    );
};

export default AppointmentForm;