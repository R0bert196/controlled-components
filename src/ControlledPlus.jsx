import React, { useState } from "react";

const initialValues = {
  name: "",
  description: "",
  skill: "",
  favLanguage: "",
};

function ControlledPlus() {
  const [formFields, setFormFields] = useState(initialValues);

  const { name, description, skill, favLanguage } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nume: " + name);
    console.log("descriere: " + description);
    console.log("skill: " + skill);
    console.log("limbaj favorit: " + favLanguage);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          value={name}
          name='name'
          onChange={handleChange}
          type='text'
          required
        />
        <textarea
          id='desctiption'
          value={description}
          name='description'
          onChange={handleChange}
          placeholder='Aptitudini'
          required
        />

        {/* Folosind ref  */}
        <select value={skill} name='skill' onChange={handleChange}>
          <option value='junior'>junior</option>
          <option value='senior'>senior</option>
        </select>
        {/* In cazul radio buttons */}
        <div>
          <div>
            <label>Java</label>
            <input
              type='radio'
              checked={favLanguage === "java"}
              onChange={handleChange}
              name='favLanguage'
              value='java'
            />
          </div>
          <div>
            <label>C#</label>
            <input
              type='radio'
              checked={favLanguage === "c#"}
              onChange={handleChange}
              name='favLanguage'
              value='c#'
            />
          </div>
          <div>
            <label>JS</label>
            <input
              type='radio'
              checked={favLanguage === "JS"}
              onChange={handleChange}
              name='favLanguage'
              value='JS'
            />
          </div>
        </div>

        <button type='submit'>Continua</button>
      </form>
    </div>
  );
}

export default ControlledPlus;
