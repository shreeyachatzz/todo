
import MainPage from "./Main Page/MainPage";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <Routes>
    //   <Route path ='/' element ={<Login/>} />
    //   <Route path ='/main' element = {<MainPage/>}/>
    //   <Route path='/logout' element={<Logout/>}/>
    // </Routes>
    <div>
     <MainPage/>
     {/* <Login /> */}
    </div>
  );
}

export default App;
