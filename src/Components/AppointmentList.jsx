import React from "react";

const AppointmentList = ({ appointments, editAppointment, deleteAppointment }) => {

    const handleEdit = (appt) => {
        const updatedClient = prompt("Edit client name:", appt.client);
        const updatedDate = prompt("Edit date (YYYY-MM-DD):", appt.date);
        const updatedTime = prompt("Edit time (HH:MM AM/PM):", appt.time);
        if (updatedClient && updatedDate && updatedTime) {
            editAppointment(appt.id, { client: updatedClient, date: updatedDate, time: updatedTime });
        }
    };

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="py-2 px-4">Client</th>
                        <th className="py-2 px-4">Date</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {appointments.map((appt) => (
                        <tr key={appt.id} className="text-center border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{appt.client}</td>
                            <td className="py-2 px-4">{appt.date}</td>
                            <td className="py-2 px-4">{appt.time}</td>
                            <td className="py-2 px-4 space-x-2">
                                <button
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                    onClick={() => handleEdit(appt)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    onClick={() => deleteAppointment(appt.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentList;
