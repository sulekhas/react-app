import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import HomeView from './routes/Home/HomeView';
import QuizView from './routes/Quiz/QuizView';
import LeaderBoardView from './routes/LeaderBoard/LeaderBoardView';

ReactDOM.render(
<Router>
    <div class="container">

      <nav class="navbar navbar-default">
        <div class="container-fluid">

          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
                <li><NavLink to="/leaderborad">LeaderBoard</NavLink></li>
            </ul>
        </div>
        </div>
      </nav>
      <Route exact path="/" component={HomeView}/>
      <Route path="/quiz" component={QuizView}/>
      <Route path="/leaderborad" component={LeaderBoardView}/>
    </div>
</Router>, 
document.getElementById('root'));
registerServiceWorker();
