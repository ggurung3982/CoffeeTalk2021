import { useEffect } from 'react';
import { ChatProvider } from 'context';
import 'semantic-ui-css/semantic.min.css';
import { useAuth, useResolved } from 'hooks';
import { Header, Login, Signup, Chat, Footer, Contact, Help } from 'components';
import { Switch, Route, useHistory } from 'react-router-dom';

export const App = () => {
  const history = useHistory();
  const { authUser } = useAuth();
  const authResolved = useResolved(authUser);

  // If the user is logged in it will prevent the
  // user from seeing the login/signup screens
  // by always redirecting to chat on auth change.
  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? '/' : '/login');
    }
  }, [authResolved, authUser, history]);


  return authResolved ? (
    <div>
      <Header />
      <ChatProvider authUser={authUser}>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Chat} />
            <Route path="/home" exact component={Chat} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/help" component={Help} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </ChatProvider>
      <Footer />
    </div>
  ) : (
    <>Loading...</>
  );
};
