import { useState } from "react";


export default function NewTaskModal(props) {

    const {
        isHidden,
        toggleModal
    } = props;

    const [isDueDateActive, setIsDueDateActive] = useState(false);
    const [isDueTimeActive, setIsDueTimeActive] = useState(false);
    const [title, setTitle] = useState("");
    const [time, setTime] = useState({
        hour: "1",
        minutes: "00",
        amOrPm: "pm"
    });
    const [date, setDate] = useState(null);
    const [newDescription, setNewDescription] = useState("");


    function getMinutes() {
        const minutes = [];

        for (let i = 0; i < 60; i++) {
        const minute = i < 10 ? `0${i}` : `${i}`;
        minutes.push(minute);
        }
        
        return minutes.map((numStr)=><option key={numStr} value={numStr}>{numStr}</option>)
    }

    function handelSubmit(e) {
        e.preventDefault();
        console.log(date, time, title);
    }

    return (
        <div className={`newTaskModal ${isHidden &&  "isHidden"}`}>
            <div className="newTaskModal--wrapper">

                <div className="newTaskModal--header">
                    <h2>Add new task</h2>
                    <button onClick={toggleModal}>close</button>
                </div>

                <div className="newTaskModal--content">
                    <form className="newTaskModal--form" onSubmit={handelSubmit}>

                        {/* TITLE */}
                        <label htmlFor="title">
                            Title: 
                        </label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

                        {/* DESCRIPTION */}
                        <label htmlFor="description">
                            description:
                        </label>
                        <textarea
                            id="description"
                            value={newDescription}
                            className="newTaskModal--description"
                            onChange={e=>setNewDescription(e.target.value)}
                            rows="5"
                        ></textarea>

                        {/* DUE DATE */}
                        <div className="newTaskModal--dueDate">
                            <span>Due date?</span>
                            <label htmlFor="dueDate" className="switch">
                                <input type="checkbox" name="hasDueDate" id="dueDate" onChange={()=>setIsDueDateActive(prev=>!prev)} />
                                <span className="slider"></span>
                            </label>

                            {isDueDateActive && (
                                <input type="date" value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                />
                            )}
                        </div>

                        {/* DUE TIME */}
                        <div className="newTaskModal--time">
                            <span>time?</span>
                            <label htmlFor="timeSlider" className="switch">
                                <input type="checkbox" name="timeSlider" id="timeSlider" onChange={()=>setIsDueTimeActive(prev=>!prev)} />
                                <span className="slider"></span>
                            </label>

                            {isDueTimeActive && (
                                <>
                                    <label htmlFor="hour">
                                        hour:
                                        <select name="hour" id="hour" onChange={(e) => setTime(prev => ({ ...prev,hour: e.target.value }))}>
                                            {
                                                Array.from({ length: 12 }, (num, i) => i+1).map((num) => {
                                                    return <option key={num} value={num}>{num}</option>;
                                                }
                                                )
                                            }
                                        </select>
                                    </label>

                                    <label htmlFor="minutes">
                                        minutes:
                                        <select name="minutes" onChange={(e) => setTime(prev => ({ ...prev, minutes: e.target.value }))}>
                                            {getMinutes()}
                                        </select>
                                    </label>

                                    <select name="amOrPm" onChange={(e) => setTime(prev => ({ ...prev, amOrPm: e.target.value }))}>
                                        <option value="am">am</option>
                                        <option value="pm">pm</option>
                                    </select>
                                </>
                                    )
                            }
                        </div>

                        

                        <button>add new task +</button>
                    </form>
                </div>
            </div>
        </div>
    )
}