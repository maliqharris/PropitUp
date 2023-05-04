import logo from './logo.svg';
import './App.css';

import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
     <MyNewComponent firstname = {"Jane"}
                      lastname = {"Doe"} 
                      age = {45}
                      haircolor = {"Black"}/>
    <MyNewComponent firstname = {"John"}
                      lastname = {"Smith"} 
                      age = {88}
                      haircolor = {"Brown"}/>
    <MyNewComponent firstname = {"Millard"}
                      lastname = {"Fillmore"} 
                      age = {50}
                      haircolor = {"Brown"}/>
    <MyNewComponent firstname = {"Maria"}
                      lastname = {"Smith"} 
                      age = {62}
                      haircolor = {"Brown"}/>


     </div>
  );
}

export default App;
