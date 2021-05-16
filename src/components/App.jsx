import React from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
import Experience from "./Experience";
import Project from "./Project";
import ToolsOfTrade from "./ToolsOfTrade";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (<div>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Project />
    <ToolsOfTrade />
    <Contact />
    <Footer />
    </div>);
}

export default App;