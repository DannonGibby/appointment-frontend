import React from "react";

const AppointmentList = ({ appointments }) => {
    if (!appointments || appointments.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-6">
                No appointments yet. Start by adding one above ⬆️
            </p>
        );
    }

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Upcoming Appointments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appointments.map((appt) => (
                    <div 
                        key={appt.id} 
                        className="bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-xl transition"
                    >
                        <h3 className="text-lg font-bold text-gray-700">
                            {appt.client}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                            {appt.date} • {appt.time}
                        </p>
                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="bg-green-500 text-white px-3 py-1 rounded-lg shadow hover:bg-green-600 transition">
                                Edit
                            </button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AppointmentList;
