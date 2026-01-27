import { useState, useEffect, useCallback } from "react";
import { useApiCall } from "../hooks/api";

function Table() {
    const [user, setUser] = useState([]);
    const {data,err} = useApiCall("https://jsonplaceholder.typicode.com/users", true)
    useEffect(() => {
        setUser(data);
    }, [data]);
    const sortData = useCallback(
        (val) => {
            const sorted = [...user].sort((a, b) => {
                const aVal = val === "company" ? a.company.name : a[val];
                const bVal = val === "company" ? b.company.name : b[val];

                return aVal.localeCompare(bVal);
            });
            setUser(sorted);
        },
        [user]
    );
    return (
        <table border={1}>
            <caption>User Details</caption>
            <thead>
                <tr>
                    <td onClick={() => sortData("name")}>Name</td>
                    <td onClick={() => sortData("email")}>Email</td>
                    <td onClick={() => sortData("company")}>Company</td>
                    <td onClick={() => sortData("zip")}>Zipcode</td>
                </tr>
            </thead>
            <tbody>
                {user?.length > 0 ? (
                    user.map((val) => (
                        <tr key={val.id}>
                            <td>{val?.name}</td>
                            <td>{val?.email}</td>
                            <td>{val?.company?.name}</td>
                            <td>{val?.address?.zipcode}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No data</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;
