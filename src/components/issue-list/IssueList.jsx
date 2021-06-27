import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import IssueContext from '../../store/IssueContext';

const IssueList = observer(() => {

    const store = useContext(IssueContext);
    console.log("Here ", store.issues)
    return (
        <div>
            <h3>Issues</h3>
            <div>
                { store.issues.map( issue => (
                    <div>
                        <div>
                            <label>Label</label>
                            <div>{issue.label}</div>
                        </div>
                        <div>
                            <label>Status</label>
                            <div>{issue.status}</div>
                        </div>
                        <div>
                            <label>Priority</label>
                            <div>{issue.priority}</div>
                        </div>
                        <button onClick={issue.removeIssue(issue)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <strong>Issues Completed: {store.issues.completedIssueCount}</strong>
                <strong>Total Issues: {store.issues.issuesCount}</strong>
            </div>
        </div>
    );
});

export default IssueList;