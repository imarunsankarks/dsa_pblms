import React, { useRef, useState } from 'react'
import { useApiCall } from '../hooks/api'

const Search = () => {
    // const [searchVal, setSearchVal] = useState({ val: [], err: null })
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [searchField, setSearchField] = useState('')
    const {data, err} = useApiCall(`https://jsonplaceholder.typicode.com/users?name=${debouncedSearch}`, !!debouncedSearch)
    let interval = useRef(0)
    const searchAuto = (val) => {
        setSearchField(val)
        clearTimeout(interval.current)
        interval.current = setTimeout(() => {
            setDebouncedSearch(val)
            // setSearchVal({ val: data, err: err })
        }, 600)

    }
    return (
        <div style={{ marginTop: '10px' }}>
            <h2>Search</h2>
            <input placeholder='Search here..' onChange={(e) => searchAuto(e.target.value)} value={searchField} />
            {data?.length > 0 ? data[0]?.email : err}
        </div>
    )
}

export default Search
