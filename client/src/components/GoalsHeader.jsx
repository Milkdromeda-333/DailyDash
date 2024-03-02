import { useState } from 'react';

export default function GoalsHeader() {

    const [filter, setFilter] = useState("none");
    const [name, setName] = useState("");
    return (
        <div>
            <div>
                <span>goals completed: 1/3</span>
            </div>
            <select name="filter" onChange={e=>setFilter(e.target.value)}>
                <option value="in-progress">filter: in progress</option>
                <option value="not in-progress">filter: not in progress</option>
                <option value="completed">filter: completed</option>
                <option selected={"selected"} value="none">filter: none</option>
            </select>

            <label htmlFor="search">
                Search
                <input type="text" name="search" id='search' value={name} onChange={e => setName(e.target.value)} />
            </label>
        </div>
    )
}