import React from 'react'

function Select({ register, options, name }) {
  return (
    <select {...register} >
      {options.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

export default Select