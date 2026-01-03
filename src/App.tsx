import { useRef, useEffect, useState } from 'react'
import './App.css'

function App() {
    const Effect = useRef<HTMLAudioElement | null>(null);
    const TimeOut= useRef<HTMLAudioElement | null>(null);
    

    const [second, setSecond] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [BgColor, setBgColor] = useState("");
    const [Wrap, setWrap] = useState("Wrapper");
    const [Wrap2, setWrap2] = useState("Wrapper2");
    const [Wrap3, setWrap3] = useState("Wrapper3");
    const [PlayStop, setPlayStop] = useState("PlayStop");
    const [Wrapped, setWrapped] = useState("Wrapped3");
    const [Event, setEvent] = useState("Event");
    const [reset, setReset] = useState(0);

    useEffect(()=> {
      Effect.current = new Audio("./0103.mp3");
      TimeOut.current = new Audio("./Clock.mp3");
    },[])
    useEffect(()=> {
      if(!isRunning) return;
      const timer = setInterval(() => {
        setSecond(prev => {
          if(prev <= 0){
            TimeOut.current?.play();
            clearInterval(timer);
            return 0;
          }else{
            return prev - 1;
          }
        })
      }, 1000);
      return () => clearInterval(timer);
    }, [isRunning]);
    const minutes = Math.floor(second/60);
    const seconds = second % 60;

  function FormatTwoDigitMin(minutes:number){
    const formattedNum = String(minutes).padStart(2, '0');
    return (
      <span>
        {formattedNum}
      </span>
    )
  }
  function FormatTwoDigitSec(seconds:number){
    const formattedNumSec = String(seconds).padStart(2, '0');
    return (
      <span>
        {formattedNumSec}
      </span>
    )
  }
  useEffect(()=>{
    document.body.style.backgroundColor = BgColor;

  }, [BgColor])
  
  function CallBothFunctionRest(){
    Effect.current?.play();
    setIsRunning(false);
    setSecond(5*60);
    setReset(5*60);
    setBgColor("#3982b8")
    setWrap("WrapperRest")
    setWrap2("Wrapper2Rest")
    setWrap3("Wrapper3Rest")
    setPlayStop("PlayStopRest");
    setWrapped("Wrapped3Rest");
    setEvent("EventRest");
  
  }
  function CallBothFunctionLongRest(){
    Effect.current?.play();
    setIsRunning(false);
    setSecond(15 * 60);
    setReset(15*60);
    setBgColor("#2E6F40")
    setWrap("WrapperLongRest")
    setWrap2("Wrapper2LongRest")
    setWrap3("Wrapper3LongRest");
    setPlayStop("PlayStopLongRest")
    setWrapped("Wrapped3LongRest");
    setEvent("EventLongRest");
    
  }
  function CallBothFunctionFocusMode(){
    Effect.current?.play();
    setIsRunning(false);
    setSecond(25*60);
    setReset(25*60);
    setBgColor("rgb(167, 62, 62)")
    setWrap("Wrapper");
    setWrap2("Wrapper2");
    setWrap3("Wrapper3");
    setPlayStop("PlayStop");
    setWrapped("Wrapped3");
    setEvent("Event")
    
  }
  function Reset(){
    Effect.current?.play();
    setIsRunning(false);
    setSecond(reset);
  }
  function Start(){
    Effect.current?.play();
    setIsRunning(true);
  }
  function Pause(){
    Effect.current?.play();
    setIsRunning(false);
  }

  return (
    <>
      <h1 className='Title'>Pomodoro</h1>
      <div className={Wrap}>
        <button className={Event} onClick={CallBothFunctionRest}>Rest</button>
        <button className={Event} onClick={CallBothFunctionLongRest}>Long Rest</button>
        <button className={Event} onClick={CallBothFunctionFocusMode}>Focus Mode</button>
      </div>
      <div className={Wrap2}>
        <h1 className="Timer"style={{textAlign:'center'}}>{FormatTwoDigitMin(minutes)}:{FormatTwoDigitSec(seconds)}</h1>
          <div className={Wrap3}>
            <button onClick={Start}className={PlayStop}>Start</button>
            <button onClick={Pause} className={PlayStop}>Pause</button>
            <button onClick={Reset} className={PlayStop}>Reset</button>
        </div>
      </div>
      <div className={Wrapped}></div>
    </>
  )
}

export default App
