import logo from './logo.svg';
import './App.css';
import Calc from "./components/Calc/Calc";
import Info from "./components/Info/Info";
import {useState} from "react";

function App() {
    const [question, setQuestion] = useState('')
    const [wrong, setWrong] = useState('')
  return (
    <div className={'conteiner'}>
      <Calc question={question} wrong={wrong} setQuestion={setQuestion} setWrong={setWrong} />
      <Info question={question} wrong={wrong} />
    </div>
  );
}

export default App;
