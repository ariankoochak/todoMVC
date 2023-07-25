import React from "react";
import AddWorks from "./components/AddWorks/AddWorks";
import RenderWorks from "./components/RenderWorks/RenderWorks";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

export default function App() {
  const works = useSelector((state) => state.works.works);
    return (
        <div>
            <div id="todoapp" className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <AddWorks />
                </header>
                <section className="main">
                    <ul className="todo-list">
                        <RenderWorks />
                        {works.length > 0 && <Footer/>}
                    </ul>
                </section>
            </div>
        </div>
    );
}
