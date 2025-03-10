import { useEffect, useState } from "react";
import userService from "../../services/userService";
import User from "./User";
import CreateUser from "./CreateUser";
import Details from "./Details";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [userIdInfo, setUserIdInfo] = useState(null);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [editUserId, setEditUserId] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(result => {
                setUsers(result);
            })
    }, []);

    const createUserClickHandler = () => {
        setShowAddUser(true);
    }

    const closeCreateUserClickHandler = () => {
        setShowAddUser(false);
    }

    const saveCreateUserClickHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const newUser = await userService.create(formValues);

        setUsers(state => [...state, newUser]);

        setShowAddUser(false);
    }

    const userInfoClickHandler = (userId) => {
        setUserIdInfo(userId);
    }

    const userInfoCloseHandler = () => {
        setUserIdInfo(null);
    }

    const userDeleteClickHandler = (userId) => {
        setDeleteUserId(userId);
    }

    const userDeleteCloseHandler = () => {
        setDeleteUserId(null);
    }

    const userDeleteHandler = async () => {
        await userService.delete(deleteUserId);

        setUsers(state => state.filter(user => user._id !== deleteUserId));

        setDeleteUserId(null);
    }

    const userEditClickHandler = (userId) => {
        setEditUserId(userId);
    }

    const closeUserEditClickHandler = () => {
        setEditUserId(null);
    }

    const saveEditUserHandler = async (e) => {
        e.preventDefault();

        const userId = editUserId;

        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const updatedUser = await userService.update(userId, formValues);

        setUsers(state => state.map(user => user._id === userId ? updatedUser : user));

        setEditUserId(null);
    }

    return (
        <>
            {showAddUser && (<CreateUser
                onClose={closeCreateUserClickHandler}
                onSave={saveCreateUserClickHandler} />)}

            {userIdInfo && (<Details userId={userIdInfo} onClose={userInfoCloseHandler}/>)}

            {deleteUserId && (<DeleteUser 
                onClose={userDeleteCloseHandler}
                onDelete={userDeleteHandler}
            />)}

            {editUserId && (<EditUser 
                userId={editUserId}
                onClose={closeUserEditClickHandler}
                onEdit={saveEditUserHandler}
            />)}
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>
                                First name
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Last name
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Email
                                <svg
                                    className="icon"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Phone
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Table row component */}
                        {users.map(user => <User
                            key={user._id} 
                            user={user} 
                            onInfoClick={() => userInfoClickHandler(user._id)}
                            onDeleteClick={userDeleteClickHandler}
                            onEditClick={() => userEditClickHandler(user._id)}
                        />)}
                    </tbody>
                </table>
            </div>
            {/* New user button  */}
            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
        </>
    );
}