import React from 'react'

function Uncontrolled() {
  return (
      <div>
          <form className='form'>
              <input
                  type="text"
                  required
              />
              <textarea
                  required
              />
              <select>
                  <option value="1">robert</option>
                  <option value="2">alex</option>
              </select>
              <button type='submit'>Continua</button>
          </form>  
    </div>
  )
}

export default Uncontrolled