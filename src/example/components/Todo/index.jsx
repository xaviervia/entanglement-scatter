import React from 'react'

export default function Todo ({ messages }) {
  return (
    <div>
      <input type='text' />
      <ul>
        {messages.map(({ value }, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h1>
        This is a pretty hipster app
      </h1>

      <ul>
        <li>
          Powered by a service workers that manages the state with a Redux store
        </li>

        <li>
          Stateless React components used for view layer
        </li>

        <li>
          Rendered remotely thanks to React Entanglement
        </li>
      </ul>
    </div>
  )
}
