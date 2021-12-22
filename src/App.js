import React, {useState} from "react";
import Navigation from "./components/Navigation";
import LoginPage from "./components/Login";
import SignupAdmin from './components/SignupAdmin';
import SignupCustomer from './components/SignupCustomer';

import Container from '@mui/material/Container';

const App = ()=>
{
    const [showLogin, setShowLogin] = useState(true);
    const [showSignupAdmin, setShowSignupAdmin] = useState(false);
    const [showSignupCustomer, setShowSignupCustomer] = useState(false);
    const [signed, setSigned] = useState(false);
    const [userType, setUserType] = useState("");
    
    return(
        <div>
            <Container maxWidth="lg">
                <Navigation showLoginContent={(boolValue) => setShowLogin(boolValue)} 
                            showSignupCustomer={val => setShowSignupCustomer(val)}
                            showSignupAdmin={val => setShowSignupAdmin(val)}
                            signed={signed}/>
                {showLogin && <LoginPage 
                                    showLoginContent={(boolValue) => setShowLogin(boolValue)} 
                                    showSignupAdmin={val => setShowSignupAdmin(val)}
                                    showSignupCustomer={val => setShowSignupCustomer(val)}/>}
                {showSignupAdmin && <SignupAdmin
                                            signed={boolValue => setSigned(boolValue)}
                                            userType={type =>setUserType(type)}/>}
                {showSignupCustomer && <SignupCustomer
                                            signed={boolValue => setSigned(boolValue)}
                                            userType={type =>setUserType(type)}/>}
            </Container>
        </div>
    )
}

export default App;