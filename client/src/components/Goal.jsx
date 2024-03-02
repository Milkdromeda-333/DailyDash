

export default function Goal(props) {

    const {
        name,
        dueDate,
        progressStatus,
        description,
        nextTask
    } = props;

    return (
        <section>
            <h2>{name}</h2>
            <span>{dueDate} </span>
            <span>{progressStatus}</span>
            <p>description: {description}</p>
            <span>Next task:</span>
            <span>{nextTask.name}</span>
        </section>
    )
}