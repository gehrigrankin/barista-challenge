import NavbarContainer from './components/NavbarContainer';
import RegisterForm from './components/RegisterForm';
import InfoContainer from './components/InfoContainer';

import './App.scss';

function App() {
    return (
        <div className="App">
            <NavbarContainer />
            <div className="body">
                <InfoContainer />
                <RegisterForm />
            </div>
        </div>
    );
}

export default App;
