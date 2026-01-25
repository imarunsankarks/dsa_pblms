import React, { useRef, useState } from 'react'

const Search = () => {
    const [searchVal, setSearchVal] = useState({ val: [], err: null })
    const [searchField, setSearchField] = useState('')
    let interval = useRef(0)
    const searchAuto = (val) => {
        setSearchField(val)
        clearTimeout(interval.current)
        interval.current = setTimeout(async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?name=${val}`);
                const data = await res.json();
                setSearchVal({ val: data, err: null })
            } catch (err) {
                setSearchVal({ val: [], err: 'No data found!' })
            }
        }, 600)

    }
    return (
        <div style={{ marginTop: '10px' }}>
            <h2>Search</h2>
            <input placeholder='Search here..' onChange={(e) => searchAuto(e.target.value)} value={searchField} />
            {searchVal?.val?.length > 0 && searchVal?.val[0]?.email}
        </div>
    )
}

export default Search
