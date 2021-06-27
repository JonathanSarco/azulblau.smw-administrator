import IssueList from '../issue-list/IssueList';
import IssueForm from '../issue-form/IssueForm';
import './App.css';
import IssueStoreContent from '../issue-store-content/IssueStoreContent';
import LoginForm from '../login/LoginForm';

function App() {
  return (
    <IssueStoreContent>
    <div className="App">
      {/* <div>
        <IssueList />
        <IssueForm />
      </div> */}
      <LoginForm />
    </div>
    </IssueStoreContent>
  );
}

export default App;
