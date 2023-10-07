import React from "react"

type userType = {
  id: number
  name: string
  email: string
}

export default async function Users() {
  //   const res = await fetch("http://localhost:3000/api/users")
  //   const users = await res.json()

  const users = [{ id: 1, name: "name - 1", email: "email__1@gmail.com" }]

  //   console.log(users)

  const user = users.map((user: userType) => {
    const { id, name, email } = user
    return (
      <div className="user" key={id}>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  })

  return <div className="users">{user}</div>
}
