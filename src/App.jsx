
import './App.css'

function App() {
  const handelSubmitUser = event => {
    event.preventDefault()
    const form = event.target
    const name = form.Name.value
    const email = form.email.value
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('User dded successfully')
        form.reset()
      }
    })
  }

  return (
    <>
      <h1>Simple crud</h1>
      <form onSubmit={handelSubmitUser}>
        <input type="text" name="Name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add Users" />
      </form>
    </>
  )
}

export default App
