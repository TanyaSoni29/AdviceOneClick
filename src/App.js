
import { useState, useEffect } from 'react';
import './App.css';
import heroImg from "./images/Top-Free-PNG-Tips-Background-PNG-Image-removebg-preview.png"
import bgImg from "./images/sm_5b22ae71b1b46.png"

function App() {
const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0);

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1 );
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getAdvice()
},[])

  return (
    <div className="flex flex-col relative z-[10] gap-8 h-screen w-screen justify-center items-center text-center bg-black">
    <img src={bgImg} loading='lazy' className='w-screen h-screen absolute z-[-2]'/>
    <img src={heroImg} loading='lazy' width={400} alt='Img'/>
    <h1 className='text-white text-3xl w-[40%] flex flex-wrap justify-center items-center'>{advice}</h1>
    <button onClick={getAdvice} className='border border-white p-2 rounded-md text-white'>Your Advise</button>
    <p className='text-white'>Your Advise Number is {count}</p>
     
    </div>
  );
}

export default App;
