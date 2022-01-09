import React, {useState} from "react";
import Navigation from "./components/Navigation";
import LoginPage from "./components/Login";
import SignupAdmin from './components/SignupAdmin';
import SignupCustomer from './components/SignupCustomer';
import ComplaintAll from './components/ComplaintAll';
import ComplaintCreate from './components/ComplaintCreate';
import Route from './routing/Route';

import Container from '@mui/material/Container';

const App = ()=>
{
    const [showLogin, setShowLogin] = useState(true);
    const [showSignupAdmin, setShowSignupAdmin] = useState(false);
    const [showSignupCustomer, setShowSignupCustomer] = useState(false);
    const [signed, setSigned] = useState(JSON.parse(localStorage.getItem("signed")));
    const [userType, setUserType] = useState(localStorage.getItem("role"));
    const [userID, setUserID] = useState(localStorage.getItem("id"));
    // console.log("type", userType);
    // console.log("showLogin", showLogin);
    // console.log('signed', signed, typeof signed);
    
    return(
        <div>
            <Container maxWidth="lg">
                <Navigation showLoginContent={(boolValue) => setShowLogin(boolValue)} 
                            showSignupCustomer={val => setShowSignupCustomer(val)}
                            showSignupAdmin={val => setShowSignupAdmin(val)}
                            signed={signed}
                            userType={userType}
                            setUserType={value => setUserType(value)}
                            setSigned={value => setSigned(value)}
                            />

                {!signed && showLogin && <LoginPage
                                                    showLoginContent={(boolValue) => setShowLogin(boolValue)} 
                                                    showSignupAdmin={val => setShowSignupAdmin(val)}
                                                    showSignupCustomer={val => setShowSignupCustomer(val)}
                                                    userType={type =>setUserType(type)}
                                                    signed={boolValue => setSigned(boolValue)}
                                                    userID = {value => setUserID(value)}/>} 

                {!signed && showSignupAdmin && <SignupAdmin
                                                    signed={boolValue => setSigned(boolValue)}
                                                    userType={type =>setUserType(type)}
                                                    userID = {value => setUserID(value)}/>}

                {!signed && showSignupCustomer && <SignupCustomer
                                                    signed={boolValue => setSigned(boolValue)}
                                                    userType={type =>setUserType(type)}
                                                    userID = {value => setUserID(value)}/>}
                

                {/* {userType === "customer" ? <ComplaintCreate/> : null}
                {userType === "admin" ? <ComplaintAll/> : null} */}

                {userType === "customer" ? <p>You are a customer, you can only create a complaint</p> : null}
                {userType === "admin" ? <p>You are an admin, you can see all complains and update them</p> : null}

                <Route path='/CreateComplaint'>
                    {/* {userType === "customer" ? console.log("customer page"): console.log("not customer")} */}
                    {userType === "customer" ? <ComplaintCreate  userType={userType} userID = {userID}/> : null}
                </Route>

                <Route path="/AllComplaints">
                    {/* {userType === "admin" ? console.log("admin page"): console.log("not admin")} */}
                    {userType === "admin" ? <ComplaintAll 
                                                    userType={userType} 
                                                    userID = {userID}
                                                    /> : null}
                </Route>

            </Container>
        </div>
    )

}

export default App;