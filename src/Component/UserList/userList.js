import { useEffect, useState } from "react";

const UserList = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const userList = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
            console.log(res);
            setUser(res);
        };
        userList();
    }, []);
    return (
        <>
            <div>User Details</div>
            <div>
                {user.length > 0 ? user?.map((u) => {
                    return <ul style={{ listStyle: 'none', margin: '10px', padding: '10px', border: '1px solid white', borderRadius: '5px' }} key={u.id}>
                        <li style={{ color: 'white' }}>{u.name}</li>
                        <li style={{ color: 'white' }}>{u.phone}</li>
                        <li style={{ color: 'white' }}>{u.username}</li>
                        <li style={{ color: 'white' }}>{u.website}</li>
                    </ul>
                }) : <div>No User Found</div>}
            </div>
        </>
    );
};
export default UserList;
