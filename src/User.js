import { useState } from "react";
import AddNewUser from "./AddNewUser";
import UserList from "./UserList";
const User = () => {
    const [userList, setUserList] = useState([]);
    const addNewUser = (newUserData) => {
        setUserList((prevState) => {
            return [...prevState, newUserData];
        });
    }

//remove user
    const removeUserData = (userId) => {
        const filterUser = userList.filter((allUser) => {
            //console.log(allUser);
            return allUser.id !== userId;
        });
        console.log(filterUser);
        setUserList(filterUser);
    }

    return (
        <>
        <h2>Main user page</h2>
            <AddNewUser addNewUser={addNewUser} />
            <UserList userList={userList} removeUserData={removeUserData}/>
       </>)
}
export default User;