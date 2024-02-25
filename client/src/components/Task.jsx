export default function Task(props) {
    const {
        title,
        duration,
        description,
        progressStatus
    } = props;
    
    function updateProgress(newStatus) {

    }

    return (
        <div className="task">
            <span>{title}</span>
            <span>delete</span>
            <span>{duration ? duration : "0:00"}</span>
            <select name="progress" onChange={updateProgress}>
                <option selected={progressStatus === "not in progress" && "selected"} value="not in progress">not in progress</option>
                <option value="in progress"  selected={progressStatus === "in-progress" && "selected"} >in progress</option>
                <option value="completed">Completed</option>
            </select>
            <p>Dascription: {description}</p>
        </div>
    )
}