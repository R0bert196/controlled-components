import { useRef, useState } from "react";

function Uncontrolled() {
    const name = useRef("robert");
    const skill = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const developerName = name.current.value;
    const desctiption = document.querySelector("#desctiption").value;
    console.log("name: " + developerName);
    console.log("desctiption: " + desctiption);
    console.log("Limbaj preferat: " + getRadioValue().value)
    console.log("Skill: " +  skill.current.value)
  };
    
    
    const getRadioValue  = () => {
      const elements = document.getElementsByName("fav-language");

      for (let i = 0; i < elements.length; i++) {
          if (elements[i].checked) {
              return elements[i];
          }
      }
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        {/* Folosind ref  */}
        <input ref={name} placeholder='Nume developer' type='text' required />
        {/* Folosind queySelector */}
        <textarea id='desctiption' placeholder='Aptitudini' required />
              
        <select ref={skill}>
          <option value='junior'>junior</option>
          <option value='senior'>senior</option>
        </select>
        {/* In cazul radio buttons */}
        <div>
          <div>
            <label>Java</label>
            <input type='radio' name='fav-language' value='java' />
          </div>
          <div>
            <label>C#</label>
            <input type='radio' name='fav-language' value='c#' />
          </div>
          <div>
            <label>JS</label>
            <input type='radio' name='fav-language' value='JS' />
          </div>
        </div>

        <button type='submit'>Continua</button>
      </form>
    </div>
  );
}

export default Uncontrolled;
