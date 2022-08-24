import React, { useState } from 'react'

function Controlled() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [skill, setSkill] = useState("junior")
    const [favLanguage, setFavLanguage] = useState("java");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("nume: " + name);
        console.log("descriere: " + description);
        console.log("skill: " + skill);
        console.log("limbaj favorit: " + favLanguage);
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' required />
        <textarea id='desctiption' value={description} onChange={(e) => setDescription(e.target.value)}  placeholder='Aptitudini' required />

        {/* Folosind ref  */}
        <select value={skill} onChange={(e) => setSkill(e.target.value)}>
          <option value='junior'>junior</option>
          <option value='senior'>senior</option>
        </select>
        {/* In cazul radio buttons */}
        <div>
          <div>
            <label>Java</label>
            <input type='radio' checked={favLanguage === "java"} onChange={(e) => {setFavLanguage(e.target.value)}}  name='fav-language' value='java' />
          </div>
          <div>
            <label>C#</label>
                      <input type='radio' checked={favLanguage === "c#"} onChange={(e) => { setFavLanguage(e.target.value) }} name='fav-language' value='c#' />
          </div>
          <div>
            <label>JS</label>
                      <input type='radio' checked={favLanguage === "JS"} onChange={(e) => { setFavLanguage(e.target.value) }} name='fav-language' value='JS' />
          </div>
        </div>

        <button type='submit'>Continua</button>
      </form>
    </div>
  );
}

export default Controlled