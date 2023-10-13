import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loded = useLoaderData()
    // console.log(loded._id)
    const handelUpdetUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        console.log(name, email)
        const user = { name, email }
        fetch(`http://localhost:5000/users/${loded._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount >0) {
                    alert('User updet successfully')
                    form.reset()
                }
            })
    }
    return (
        <div>
            <h1>updated information on {loded.name}</h1>
            <form onClick={handelUpdetUser}>
                <input type="text" name="name" defaultValue={loded?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loded?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;