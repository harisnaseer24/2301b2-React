import React, { useState } from "react";

const FormHandling = () => {
    const [skills,setSkills]=useState([]);
    const [showNewInput,setNewInput]=useState(false);



    const handleCheckbox=(e)=>{
console.log(e.target.value)
console.log(e.target.checked)

if(e.target.checked){
    setSkills([...skills,e.target.value])
}else{                                                  
    let filteredSkills= skills.filter((skill,index)=>skill !==e.target.value)  //php,react
    setSkills(filteredSkills)
}


    }

    const handleOthers=(e)=>{
        
setNewInput(!showNewInput)
    }

    // const handleOtherSkills=(e)=>{
    //     let otherskills= e.target.value.split(',');
    //     console.log(otherskills)
    //     setSkills([...skills,...otherskills])

    // }

    const addOtherSkills=(e)=>{
        e.preventDefault();
        let otherskills= document.getElementById('additonalSkill').value.split(',');
        console.log(otherskills)
        setSkills([...skills,...otherskills])

    }
    

  return (
   
    <form action="">
      <h2>Select Skills</h2>
      {/* <input type="checkbox" name="" id="php" className="form-control"/>
      <label htmlFor="php">PHP</label> */}
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check mx-2" id="btncheck1" autocomplete="off" value={"PHP"} onChange={(e)=>{
    handleCheckbox(e)
  }}/>
  <label class="btn btn-outline-primary" for="btncheck1">PHP</label>

  <input type="checkbox" class="btn-check mx-2" id="btncheck2" autocomplete="off" value={"flutter"} onChange={(e)=>{
    handleCheckbox(e)
  }}/>
  <label class="btn btn-outline-primary" for="btncheck2">Flutter</label>

  <input type="checkbox" class="btn-check mx-2" id="btncheck3" autocomplete="off" value="react" onChange={(e)=>{
    handleCheckbox(e)
  }}/>
  <label class="btn btn-outline-primary" for="btncheck3">React</label>

  <input type="checkbox" class="btn-check mx-2" id="others" autocomplete="off" value="others" onChange={(e)=>{
 
    handleOthers(e)
  }}/>
  <label class="btn btn-outline-primary" for="others">Others</label>
</div>
<br />
{ 
showNewInput && 
<>
<input type="text" id="additonalSkill"
//  onChange={(e)=>{handleOtherSkills(e)}} 
 placeholder="Please specify add , separated skills" />
<button onClick={(e)=>{addOtherSkills(e)}}>Add</button>
</> 

}
<h1>{skills}</h1>
    </form>
  );
};

export default FormHandling;
