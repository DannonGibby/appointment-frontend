import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto p-4">
                <Dashboard />
            </main>
            <Footer />
        </div>
    );
};

export default App;