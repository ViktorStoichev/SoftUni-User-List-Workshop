import Pagination from "./Pagination";
import Search from "./Search";
import UserList from "./UserList";

export default function Main() {
    return (
        <>
            <main className="main">
                {/* Section component  */}
                <section className="card users-container">
                    {/* Search bar component */}
                    <Search />
                    {/* Table component */}
                    <UserList />
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