import React from "react";

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold"> Appointment Dashboard</h1>
               <p className="text-lg mt-2 text-blue-100">
                Manage your schedule with ease and style. 
                </p>
            </div>
        </header>
    );
};

export default Header;