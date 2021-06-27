import React, { useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import IssueContext from '../../store/IssueContext';

const IssueStoreContent = ({ children }) => {
    const issueStore = useLocalObservable(() => ({
        issues: [],
        addIssue: issue => {
            issueStore.issues.push(issue)
        },
        
        removeIssue: issue => {
            issueStore.issues = issueStore.issues.filter(i => i !== issue)
        },
        
        get issuesCount() {
            return issueStore.issues.length
        },

        get completedIssueCount() {
            return issueStore.issues.filter(i => i === 'done').length
        }
    }));

    return (
        <IssueContext.Provider value={issueStore}>{ children }</IssueContext.Provider>
    );
}


export default IssueStoreContent;