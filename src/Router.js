import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home'
import OurStory from './views/OurStory'
import Support from './views/Support'
import WebsiteLayout from './layouts/WebsiteLayout'
import Info from './views/account/Info';
import Investor from './views/Investor';
import SignIn from './views/forms/SignIn';
import SignUp from './views/forms/SignUp';
import AuthSignUp from './views/forms/AuthSignUp';
import AccountLayout from './layouts/AccountLayout';
import Auth from './firebase/Auth'

const Routers = (props) => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/*">
                        <WebsiteLayout {...props}>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/auth">
                                    <Auth />
                                </Route>
                                <Route exact path="/our-story">
                                    <OurStory />
                                </Route>
                                <Route exact path="/support">
                                    <Support />
                                </Route>
                                {/* <Route exact path="/info">
                  <Info />
                </Route> */}
                                <Route exact path="/investor">
                                    <Investor />
                                </Route>
                                <Route exact path="/signin">
                                    <SignIn />
                                </Route>
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route exact path="/auth/signup">
                                    <AuthSignUp />
                                </Route>
                                <Route exact path="/account">
                                    <Info />
                                </Route>
                                <Route exact path="/account/info">
                                    <Info />
                                </Route>
                                <Route path="*">
                                    <div className="tw-container text-center py-20">
                                        <h2 className="font-bold">404: Page Not Found</h2>
                                        <Link to="/" className="mt-5 btn w-max mx-auto">Return To Home</Link>
                                    </div>
                                </Route>
                            </Switch>
                        </WebsiteLayout>

                    </Route>

                </Switch>
            </Router>
        </>
    )
}

export default Routers
