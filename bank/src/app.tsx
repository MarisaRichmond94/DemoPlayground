import './app.css';

import logo from './logo.png';
import Account from './features/account/account';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <span className="company-name">Richmond Bank</span>
      </div>
      <Account />
    </div>
  );
}

export default App;
