import React, { useContext, useState, createContext } from 'react';
import IssueContext from '../../store/IssueContext';

const defaultIssue = {
    label: "",
    status: "New",
    priority: "High"
};

const IssueForm = () => {

    const store = useContext(IssueContext);

    const [issue, setIssue] = useState(defaultIssue);

    const handleUpdate = (key, value) => {
        setIssue(prevState => ({
            ...prevState,
            [key]: value
        }))
    };

    const handleCreate = () => {
        store.addIssue(issue);
        setIssue(defaultIssue)
    }

    return (
        <div className="container">
            <h3>Create an Issue: </h3>

            <div>
                <label htmlFor="issue-label">Issue's label: </label>
                <input 
                    id="issue-label" 
                    type="text" 
                    placeholder="Label..."
                    onChange={event => handleUpdate("label", event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="issue-status">Issue's status: </label>
                <input 
                    id="issue-status" 
                    type="text" 
                    placeholder="Status..."
                    onChange={event => handleUpdate("status", event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="issue-priority">Issue's priority</label>
                <input 
                    id="issue-priority" 
                    type="text" 
                    placeholder="Priority..."
                    onChange={event => handleUpdate("label", event.target.value)}
                />
            </div>

            <div>
                <button onClick={handleCreate}>Create Issue</button>
            </div>

        </div>
    );
}

export default IssueForm;