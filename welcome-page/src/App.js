import './globalStyles.css';
import Welcome from './components/Welcome';
import TimeGreeting from './components/TimeGreeting';
import Preferences from './components/Preferences';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome Page</h1>
      </header>
      <main className="main-content">
        <TimeGreeting />
        <Welcome name="John" location="California" />
        <Preferences />
      </main>
    </div>
  );
}

export default App;