import React, {useState} from 'react';
import './App.css';
import UserInfoStepper from "./components/UserInfoStepper";

function App() {
    const [isStepperOpen, setIsStepperOpen] = useState(false);

    const toggleStepper = () => {
        setIsStepperOpen(!isStepperOpen);
    };

    const closeStepper = () => {
        setIsStepperOpen(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={toggleStepper}>
                    <h1>Click Me</h1>
                </button>
            </header>
            {
                isStepperOpen && <div className="overlay" onClick={closeStepper}>
                    <div className="stepper-popup" onClick={e => e.stopPropagation()}>
                        <UserInfoStepper/>
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
