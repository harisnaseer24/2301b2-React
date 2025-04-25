import {useState, useTransition} from 'react'

const Test = () => {
    let [pending, startTransition] = useTransition(true);


// const [pending, setPending]= useState(false);
  
function handleButtonClick() {

  startTransition(async ()=>{
    await
    new Promise((resolve)=>{
        // setPending(true)
        setTimeout(()=>{
          //  setPending(false)
            console.log("data fetched")
            resolve();
            
        },2000)
  })
  })
 
 

    }

  return (
    <div>
{
    pending ? <img src="https://imgs.search.brave.com/XwDLlAAA8Mc_clSCLv9_EdAAoq-RsocN4ZJV9CEidGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhhWG96Y0hZeVoz/WmpkRGRsTWpCMGRX/ZHZhMmRoT1ROeWVY/Um1jbTVqTW5JMmEy/ZDVPR0owTnlabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vR2dmZEx5V2xI/ekttTWxwbzg5LzIw/MC5naWY.gif" alt="" />: <h1>Data Fetched</h1>
}
      <button onClick={handleButtonClick}>Fetch</button>
    </div>
  )
}

export default Test
