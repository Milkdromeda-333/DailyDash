export default function Task(props) {
    const {
        title,
        dueDate,
        goalTitle,
        description,
        progressStatus
    } = props;
    
    function updateProgress(newStatus) {

    }

    return (  
        <div className="task">
            <div className="task--top">
                <div className="task--header">
                    <span>{title}</span>
                    <span>{ goalTitle }</span>
                    <span>{dueDate && dueDate}</span>
                </div>

                <button>options</button>
            </div>

            <div className="task--bottom">
                <p>Description: {description}</p>
                <select name="progress" onChange={updateProgress}>
                    <option selected={progressStatus === "not in progress" && "selected"} value="not in progress">not in progress</option>
                    <option value="in progress"  selected={progressStatus === "in-progress" && "selected"} >in progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>
    )
}