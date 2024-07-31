import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminView from './Components/AdminView';
import PatientSignIn from './Components/PatientsSignIn';
import PatientView from './Components/PatientView';

const App = () => (
    <Router>
        <div>
            <Routes>//every route for the app
                <Route path="/admin" element={<AdminView />} />
                <Route path="/signin" element={<PatientSignIn />} />
                <Route path="/view" element={<PatientView />} />
                <Route path="/" element={<h1>Welcome to Hospital Triage</h1>} />
            </Routes>
        </div>
    </Router>
);

export default App;
