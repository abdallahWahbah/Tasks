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
    

    const showLoginContent =(boolValue)=>
    {
        console.log('App', boolValue);
        setShowLogin(boolValue);
    }

    return(
        <div>
            <Container maxWidth="lg">
                <Navigation showLoginContent={showLoginContent} 
                            showSignupCustomer={val => setShowSignupCustomer(val)}
                            showSignupAdmin={val => setShowSignupAdmin(val)}/>
                {showLogin && <LoginPage 
                                    showLoginContent = {(boolValue) => setShowLogin(boolValue)} 
                                    showSignupAdmin={val => setShowSignupAdmin(val)}
                                    showSignupCustomer={val => setShowSignupCustomer(val)}/>}
                {showSignupAdmin && <SignupAdmin/>}
                {showSignupCustomer && <SignupCustomer/>}
            </Container>
        </div>
    )
}

export default App;