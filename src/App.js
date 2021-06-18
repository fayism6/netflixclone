
import './App.css';
import Banner from './Banner';
import Header from './Header';
import Rowpost from './Rowpost';
import {orginals , action, comedy, horror, romance} from './urls'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner/>
      <Rowpost url={orginals} title="Netflix Orginals" />
      <Rowpost url={action} title="Action Movies" name="issmall" />
      <Rowpost url={comedy} title="Comedy Movies" name="issmall" />
      <Rowpost url={horror} title="Horror Movies" name="issmall" />
      <Rowpost url={romance} title="Romanace Movies" name="issmall" />
      
      </div>
  );
}

export default App;
