import Sidebar from './components/sideBar/Sidebar'
import HomePage from './components/homePage/homePage';

function App() {
  return (
    <div>
      <div className="row div-main" style={{margin:"0px"}}>
        <div className="col-lg-2"><Sidebar/></div>
        <div className="col-lg-10"><HomePage/>
        
        </div>
      </div>
    </div>
  );
}

export default App;


