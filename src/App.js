import React from 'react';
import './App.css';

import Toolbar from "./toolbar/Toolbar";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Productlist from "./productlist/Productlist";
import Footer from "./footer/Footer";
import mockData from "./mockdata";

function App() {
  return (
    <div className="App">
        <Toolbar />
        <Header {...mockData.header} />
        <div className="main-content">
        	<Sidebar {...mockData.sidebar} />
        	<Productlist products={mockData.products} />
        </div>
        <Footer searches={mockData.footer.searches} />
    </div>
  );
}

export default App;
