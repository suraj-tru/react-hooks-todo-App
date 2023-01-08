import { useState } from "react";
import Button from "./Button";
const AddNewUser = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
        const changeUsername = (e) => {
            setUsername(e.target.value);
        }

    const changePassword = (e) => {
       setPassword(e.target.value);
        }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0) {
            alert("Please fill the username first");
            //return
        }
         if (password.length === 0) {
             alert("Please fill the password first")
             return
        }
        const UserData = {
            id:Math.floor(Math.random() * 100),
            username: username,
            password: password
        }
        props.addNewUser(UserData);
        setUsername('');
        setPassword('');
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                    UserName:<input type="text" value={username} onChange={ changeUsername} />
                    Password:<input type="text" value={password} onChange={changePassword }/>
                    <Button type="submit" className="btn-btn">Add User</Button>
            </form>

        </div>
        </>
    )
}

export default AddNewUser;