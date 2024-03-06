

export default function Goal(props) {

    const {
        name,
        dueDate,
        progressStatus,
        description,
        nextTask
    } = props;

    return (
        <section className="goal">
            <div className="goal--header">
            <h2>{name}</h2>
            <span className="goal--dueDate"> by {dueDate} </span>
            <span>{progressStatus}</span>
            </div>
            <p>{description}</p>
            <div className="goal--nextTaskContainer">
                <div>
                    <span>Next task:</span>
                    <span>{nextTask ? nextTask.name : "not yet scheduled"}</span>
                </div>
                <button className="">schedule next task</button>
            </div>
        </section>
    )
}