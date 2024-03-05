

export default function Settings() {

    return (
        <div className="settings">
            <h2>settings</h2>

            <div className="settings--content">
                {/* THEMES */}
                <div className="settings--themes">
                    <span>themes</span>
                    <select name="theme" id="theme">
                        <option value="plain as day">plain as day</option>
                        <option value="plain night">plain night</option>
                        <option value="daisy">daisy</option>
                        <option value="cotton candy">cotton candy</option>
                        <option value="forest floor">forest floor</option>
                        <option value="oh, the horror">oh, the horror</option>
                        <option value="pink!">pink!</option>
                        <option value="purple!">purple!</option>
                        <option value="red!">red!</option>
                    </select>
                    <button>save</button>
                </div>

                <button>delete account</button>
                
            </div>
        </div>
    )
}