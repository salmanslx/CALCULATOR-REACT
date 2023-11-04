import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const click = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(input);
        setResult(calculatedResult);
        setInput("");
      } catch (error) {
        setInput("");
        setResult("Error");
      }
    } else if (value === "ALLCLEAR") {
      setInput("");
      setResult("0");
    } else if (value === "CLEAR") {
      var inp = input.slice(0, -1);
      setInput(inp);
    } else {
      setInput(input + value);
    }
  }
  return (
    <>
      <div style={{ height: '100vh' }} className='bg-dark p-5'>
        <div className='d-flex justify-content-center '>
          <div style={{ height: '480px', width: '340px' }} className=' bg-black rounded'>
            <h1 className='scroll text-light d-flex justify-content-end mt-5 me-4 '>{
              input.length>0?
              <span>{input}</span>:
              <span>{result}</span>
            }
            </h1>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={() => click("ALLCLEAR")} style={{ width: '55px', height: '55px' }} className='btn bg-secondary rounded-circle fs-5 fw-bold'>AC</button>
              <button onClick={() => click("CLEAR")} style={{ width: '55px', height: '55px' }} className='btn bg-secondary rounded-circle fs-5 fw-bold'>C</button>
              <button onClick={() => click("%")} style={{ width: '55px', height: '55px' }} className='btn bg-secondary rounded-circle fs-5 fw-bold'>%</button>
              <button onClick={() => click("/")} style={{ width: '55px', height: '55px' }} className='btn bg-warning text-light rounded-circle fs-5 fw-bold'>&#247;</button>
            </div>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={() => click("7")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>7</button>
              <button onClick={() => click("8")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>8</button>
              <button onClick={() => click("9")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>9</button>
              <button onClick={() => click("*")} style={{ width: '55px', height: '55px' }} className='btn bg-warning text-light rounded-circle fs-5 fw-bold'>&times;</button>
            </div>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={() => click("4")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>4</button>
              <button onClick={() => click("5")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>5</button>
              <button onClick={() => click("6")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>6</button>
              <button onClick={() => click("-")} style={{ width: '55px', height: '55px' }} className='btn bg-warning text-light rounded-circle fs-5 fw-bold'>-</button>
            </div>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={() => click("1")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>1</button>
              <button onClick={() => click("2")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>2</button>
              <button onClick={() => click("3")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>3</button>
              <button onClick={() => click("+")} style={{ width: '55px', height: '55px' }} className='btn bg-warning text-light rounded-circle fs-5 fw-bold'>+</button>
            </div>
            <div className='d-flex justify-content-evenly mt-3'>
              <button onClick={() => click("0")} style={{ width: '135px', height: '55px' }} className='btn bg-light rounded-pill fw-bold'>0</button>
              <button onClick={() => click(".")} style={{ width: '55px', height: '55px' }} className='btn bg-light rounded-circle fw-bold'>.</button>
              <button onClick={() => click("=")} style={{ width: '55px', height: '55px' }} className='btn bg-warning text-light rounded-circle fs-5 fw-bold'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
