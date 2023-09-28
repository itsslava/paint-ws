// components
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import SettingBar from './components/SettingBar';
//
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// styles
import './styles/app.scss';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/:id">
            <Toolbar />
            <SettingBar />
            <Canvas />
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
