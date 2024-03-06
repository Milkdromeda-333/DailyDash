import Goal from "../components/Goal";
import GoalsHeader from "../components/GoalsHeader";

const goals =  [
    {
        name: "Get drivers licence",
        dueDate: "2019-03-06T00:00:00Z",
        id: "1",
        progressStatus: "in-progress",
        description: "Gotta learn to drive so i can get a job!",
        nextTask: { id:1, name: "Schedule test" },
    },
     {
        name: "Buy newest phone",
        dueDate: "2019-03-06T00:00:00Z",
        id: "2",
        progressStatus: "not in progress",
        description: "I want the new samsung phone but I should save up money first",
        nextTask: { id: 2, name: "Work all week" },
    }
]
export default function Goals() {

    const allGoalsData = goals.map(goal => {
        return <Goal {...goal} key={goal.id}  />
    })

    return (
        <div className="goals">
            <button className="goals--addBtn">Add a new goal</button>

            <GoalsHeader />
            
            <div className="goals--goalsContainer">{allGoalsData}</div>
        </div>
    )
}