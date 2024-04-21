import dateService from "../services/dateService";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

export default function Task(props) {
    const {
        title,
        dueDate,
        goalTitle,
        description,
        progressStatus
    } = props;

    // const [newDescription, setNewDescription] = useState(description);
    
    function updateProgress(newStatus) {

    }

    return (  
        <div className="task card">
            <div className="task--top">
                <div className="task--header">
                    <span>{title}</span>
                    <span>{ goalTitle }</span>
                   {dueDate && <span>due: {dateService.getFormattedDate(dueDate)}</span>}
                </div>

                <button>options</button>
            </div>

            <div className="task--bottom">
                <p>Description: {description} </p>
                 {/* <MDEditor.Markdown source={description} /> */}
                
                <select name="progress" onChange={updateProgress}>
                    <option default={progressStatus === "not in progress" && "selected"} value="not in progress">not in progress</option>
                    <option value="in progress"  default={progressStatus === "in-progress" && "selected"} >in progress</option>
                    <option value="completed">completed</option>
                    <option value="roll-over">roll-over</option>
                </select>
            </div>
        </div>
    )
}