import React, { useState } from 'react';
import data from './data';
import text from './data';
function App() {

  const[paragraph,setParagraph]=useState(text);
  const [index,setIndex]=useState();
  
  // function changeVal(e){
  //   setIndex(e.target.value)
  //   // const getVal=e.target.value
  //   // console.log(getVal);

  // }
  function btnFunc(e){
    // setIndex(e.target.value)
    // setIndex()
    
    setParagraph(text.slice(0,index))
  }
  
  return (
    <section className='section'>
       <article className='section-center'>
        <div className='title'><h2>Tired of Boring Lorem setup</h2></div>
        <div className='input'>
          <label >paragraph:</label>
          <input type='number' value={index} onChange={(e)=>{setIndex(e.target.value)}}/>
          <button className='btn' onClick={btnFunc}>Generate</button>
        </div>
       
        {/* <p >{paragraph}</p> */}
        <div >
          {paragraph.map((p,index)=>{
            return <p key={index}>{p}</p>
          })}
        </div>
  
    </article>
  
    </section>
   
    )
}

export default App;
