import { useState } from "react"
import TaskContainer from "../components/TaskContainer"
import NewTaskModal from "../components/NewTaskModal";

export default function Dashboard() {
    const [isCreatingTask, setIsCreatingTask] = useState(false);

    return (
        <section className="dashboard">
            <button className="dashboard--addBtn" onClick={()=>setIsCreatingTask(prev=>!prev)}>add a task</button>
            <TaskContainer  />
            <NewTaskModal isHidden={!isCreatingTask} toggleModal={()=>setIsCreatingTask(prev=>!prev)}  />
        </section>
    )
}