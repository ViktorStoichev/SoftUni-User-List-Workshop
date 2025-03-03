import { useState } from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

export default function Main() {
    const [showAddUser, setShowAddUser] = useState(false);

    const createUserClickHandler = () => {
        setShowAddUser(true);
    }

    const closeCreateUserClickHandler = () => {
        setShowAddUser(false);
    }

    return (
        <>
            <main className="main">
                {/* Section component  */}
                <section className="card users-container">
                    {showAddUser && <CreateUser onClose={closeCreateUserClickHandler} />}
                    {/* Search bar component */}
                    <Search />
                    {/* Table component */}
                    <UserList />
                    {/* New user button  */}
                    <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
                    {/* Pagination component  */}
                    <Pagination />
                </section>
                {/* User details component  */}

                {/* Create/Edit Form component  */}

                {/* Delete user component  */}

            </main>
        </>
    );
}