import Goal from "../components/Goal";
import GoalsHeader from "../components/GoalsHeader";

const goals =  [
    {
        name: "Get drivers licence",
        dueDate: "2019-03-06T00:00:00Z",
        id: "1",
        progressStatus: "in-progress",
        description: "Gotta learn to drive so i can get a job!",
        nextTask: { id: 2, name: "Schedule test" },
    }
]
export default function Goals() {

    const allGoalsData = goals.map(goal => {
        return <Goal {...goal} key={goal.id}  />
    })

    return (
        <div>
            <h1>Goals</h1>

            <button>Add a new goal</button>

            <GoalsHeader />
            
            {allGoalsData}
        </div>
    )
}