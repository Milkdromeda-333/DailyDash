import { useState } from "react";
import dateService from "../services/dateService";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Task from "../components/Task";
import TaskMetrics from "../components/TaskMetrics";

const taskData =  [
    {
        title: "Wash clothes",
        dueDate: "2024-02-25T02:00:00.000Z",
        goalId: "1",
        taskId: "1",
        repeat: false,
        duration: null,
        progressStatus: "not in progress",
        progressTime: null,
        description: "I need to wash clothes before taking the trip on Monday"
    },
    {
        title: "Buy groceries",
        dueDate: "2024-02-20T10:00:00.000Z",
        goalId: "2",
        taskId: "2",
        repeat: true,
        duration: null,
        progressStatus: "in-progress",
        progressTime: null,
        description: "Purchase ingredients for the dinner party on Friday"
    },
    {
        title: "Complete project report",
        dueDate: "2024-03-05T18:00:00.000Z",
        taskId: "3",
        goalId: "3",
        repeat: {frequency: "daily"},
        progressStatus: "not in progress",
        progressTime: "00:30:00",
        description: "Finish the project report for submission next week"
    }
];

export default function TaskContainer() {

    const [dateForTasks, setDateForTasks] = useState(dateService.getFormattedDate(new Date()));
    const [isDatePickerShown, setIsDatePickerShown] = useState(false);

    const tasks = taskData.map(task => {
        if (task.progressStatus !== "in-progress") {
            return <Task key={task.taskId} {...task} />
        } else {
            return;
        }
    });

    const tasksInProgress = taskData.map(task => {
        if (task.progressStatus === "in-progress") {
            return <Task key={task.taskId} {...task} />
        } else {
            return;
        }
    });

    return (
        <section className="taskContainer">
            <button className="taskContainer--addBtn">add a task</button>

            {/* METRICS */}
            <TaskMetrics />

            {/* TASK DATE PICKER */}
            <div className="taskContainer--taskDateContainer">
                <button className="taskContainer--taskDate" onClick={()=>setIsDatePickerShown(prev=>!prev)}>
                    <span>
                        {dateService.isDateToday(dateForTasks) ?
                            "Today" : dateService.getFormattedDate(dateForTasks)
                        }
                    </span>

                    {!isDatePickerShown ?
                        <FaCaretRight /> : <FaCaretLeft />
                    }
                </button>

                {isDatePickerShown &&
                    <input type="date" 
                        onChange={(event) => setDateForTasks(event.target.value)} 
                        value={dateForTasks}
                    />}
            </div>

            {/* IN PROGRESS TASKS  */}
            <section className="taskContainer-taskList">
                {/* <div className="taskContainer--list"> */}
                    <h2 className="taskContainer--listHeader">In Progress:</h2>
                    <div className="taskContainer--list">{tasksInProgress}</div>
                {/* </div> */}
            </section>

            {/* SCHEDULED TASKS  */}
            <section className="taskContainer-taskList">
                <h2>To Do:</h2>
                <div className="taskContainer--list">{tasks}</div>
            </section>
        </section>
    )
}