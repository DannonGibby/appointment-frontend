import React, { useState } from "react";
import AppointmentList from "./AppointmentList";
import AppointmentForm from "./AppointmentForm";

const Dashboard = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, client: "Alice", date: "2025-09-01", time: "10:00 AM" },
        { id: 2, client: "Bob", date: "2025-09-02", time: "2:00 PM" },
    ]);

    const addAppointment = (appt) => {
        const newAppt = { ...appt, id: appointments.length + 1 };
        setAppointments([...appointments, newAppt]);
    };

    const editAppointment = (id, updatedAppt) => {
        setAppointments(
            appointments.map((appt) =>
            appt.id === id ? { ...appt, ...updatedAppt } : appt
            )
        );
    };

    const deleteAppointment = (id) => {
        setAppointments(appointments.filter((appt) => appt.id !== id));
    };

    return (
        <div className="container mx-auto mt-6">
            <AppointmentForm 
                addAppointment={addAppointment} />
            <AppointmentList 
                appointments={appointments} 
                editAppointment={editAppointment}
                deleteAppointment={deleteAppointment}
            />
        </div>
    );
};

export default Dashboard;
