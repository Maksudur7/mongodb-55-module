import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const usersData = useLoaderData()
    const [users, setusers] = useState(usersData)
    const handelUserDelet = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = users.filter(user => user._id !== _id)
                    setusers(remaining)
                }
            })
    }
    return (
        <div>
            <h2>{users.length}</h2>
            {
                users.map(user => <p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Updet</button>
                    </Link>
                    <button onClick={() => handelUserDelet(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;