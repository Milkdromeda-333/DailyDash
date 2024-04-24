import { useState } from 'react';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function NewGoalModal({ isHidden, toggleModal }) {

    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [description, setDescription] = useState("");

    return (
        <div className={`${isHidden && "isHidden"} newGoalModal`}>
            <div className="newGoalModal--wrapper">

                <div className="newTaskModal--header">
                    <h2>add new goal</h2>
                    <button onClick={toggleModal}>close</button>
                </div>

                <form className='newGoalModal--form'>
                    <label htmlFor="title">
                        title:
                    </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    
                    <label htmlFor="dueDate">due date:</label>
                    <input type="date" min={ new Date().toJSON().slice(0, 10)} id="dueDate" value={dueDate} onChange={e=>setDueDate(e.target.value)} />

                     <label htmlFor="description">
                            description:
                    </label>

                        <textarea
                            id="description"
                            value={description}
                            className="newGoalModal--description"
                            onChange={e=>setDescription(e.target.value)}
                            rows="5"
                        ></textarea>
                    <button className='newGoalModal--form-btn'>create goal</button>
                </form>
            </div>
        </div>
    )
}