import { useState } from "react";
import dayjs from "dayjs"
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Task from "../components/Task";

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
        duration: "01:00:00",
        progressStatus: "not in progress",
        progressTime: "00:30:00",
        description: "Finish the project report for submission next week"
    }
];

export default function TaskContainer() {

    const [dateForTasks, setDateForTasks] = useState(getFormattedDate(new Date()));
    const [isDatePickerShown, setIsDatePickerShown] = useState(false);

    function isDateToday(date) {
         const formattedDate = getFormattedDate(date);
        const today = getFormattedDate(new Date());

        if (formattedDate === today) {
            return true;
        }

        return false;
    }

    function getFormattedDate(date) {
        return dayjs(date).format('MM-DD-YYYY')
    }

    // const tasks = taskData.map(task => <Task key={task.taskId} {...task} />);
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
            {/* TASK DATE PICKER */}
            <div className="taskContainer--taskDateContainer">
                <button className="taskContainer--taskDate" onClick={()=>setIsDatePickerShown(prev=>!prev)}>
                    {isDateToday(dateForTasks) ? <span>Today</span> : getFormattedDate(dateForTasks)}
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
            <section className="taskContainer--inProgressContainer">
                <h2>In Progress:</h2>
                {tasksInProgress}
            </section>

            {/* SCHEDULED TASKS  */}
            <section className="taskContainer--inProgressContainer">
                <h2>To Do:</h2>
                {tasks}
            </section>
        </section>
    )
}