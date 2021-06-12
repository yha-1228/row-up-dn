import React, { useState } from 'react'

const initialValues = [
  { username: '', email: '' },
  { username: '', email: '' },
  { username: '', email: '' },
  { username: '', email: '' },
  { username: '', email: '' },
]

export default function FormList() {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event: React.ChangeEvent<any>) => {
    setValues((values) =>
      values.map((value, index) => {
        if (index === Number(event.target.dataset.index)) {
          return { ...value, [event.target.dataset.key]: event.target.value }
        }
        return value
      })
    )
  }

  const addUser = () => {
    setValues((values) => [...values, { username: '', email: '' }])
  }

  const deleteUser = (event: React.ChangeEvent<any>) => {
    setValues((values) => values.filter((_, index) => index !== Number(event.target.dataset.index)))
  }

  return (
    <div>
      <h1>Form List</h1>

      <form>
        <ul>
          {values.map((value, index) => (
            <li key={index}>
              <span>User {index}</span>
              <input
                type="text"
                data-index={index}
                data-key="username"
                name={`username.${index}`}
                value={value.username}
                onChange={handleChange}
                placeholder="username"
              />
              <input
                type="email"
                data-index={index}
                data-key="email"
                name={`email.${index}`}
                value={value.email}
                onChange={handleChange}
                placeholder="email"
              />
              <button data-index={index} type="button" onClick={deleteUser}>
                -
              </button>
            </li>
          ))}
        </ul>

        <button type="button" onClick={addUser}>
          New user
        </button>
      </form>
    </div>
  )
}
