import Button from "./Button"
import './UserList.css';
const UserList = (props) => {
    const users = props.userList;
    const removeUser = (userId) => {
        props.removeUserData(userId);
    }
    return (

        users.map((user,key) => {
                return (
                    <>
                        <div className="UserList" key={user.id}>
                            <h1>UserName:<b>{ user.username }</b></h1>
                            <h1>password:<b>{ user.password }</b></h1>
                         <Button type='button' className='btn-btn' onClick={()=>removeUser(user.id)}>Remove</Button>
                        </div>
                    </>
                )

           })

    )
}

export default UserList;