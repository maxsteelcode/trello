// import Greeting from './Greeting';
// import UserGreeting from './UserGreeting';
// import MultiStateComponent from './MultiStateComponent';
// import './App.css';
import Board from './components/Board';
import './styles.css';


function App() {
  return (
    // <div className="App">
    //   {
    //   /* <h1>Hello World!</h1>
    //   <Greeting />
    //  <UserGreeting name="John Doe" age={30} location="New York" />
    //   <UserGreeting name="Jane Smith" age={25} location="London" />
    //   <UserGreeting name="Alice Johnson" age={35} location="Los Angeles" />
    //   <MultiStateComponent />  */}
    // </div>
    <div className="App">
    <h1>Trello-like Board</h1>
    <Board />
  </div>
  );
}

export default App;
