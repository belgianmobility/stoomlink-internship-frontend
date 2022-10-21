import { useEffect, useState } from "react"

function Clock() {
    //const [today, setToday] = useState(new Date())
    const [today, setToday] = useState(0)
    console.log(today);
    console.log("le type est" ,typeof today);
    
    
    // useEffect(() => {
    //     console.log("test into useEffect");
        
    //     const timer = setTimeout(() => {
    //       console.log('This will run after 3 second!')
    //     }, 3000);
    //     return () => clearTimeout(timer);
    //   }, []);

    function refreshClock() {
      setToday(new Date())
    }

    useEffect (() => {
      console.log("test into useEffect");
      // const timerId = setInterval(refreshClock, 1000)
      // return function cleanup() {
      //   clearInterval(timerId)
      // }
    }, [today])
    console.log(useEffect)
    
    // let hour = today.getHours()
    // let minute = today.getMinutes()
    // let seconde = today.getSeconds()
    
    return (
        //<div>{hour}:{minute}:{seconde}</div>
        <div>
          <button onClick={()=> {setToday(1)}}>push</button>
          <h1>{today}</h1>
        </div>
        
    )
    
}

export default Clock