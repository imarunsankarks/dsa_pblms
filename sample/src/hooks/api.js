import React, { useEffect, useState } from "react";

export const useApiCall = (api, debouncedSearch = false) =>{
    const [data, setData] = useState([])
    const [err, setErr] = useState('No data found!')
    
    useEffect(()=>{
        async function fetchData(){
            if(!debouncedSearch) return null
            try{
                const resp = await fetch(api)
                let final = await resp.json()
                setData(final)
            }catch(error){
                setErr(error)
            }
            
        }
        fetchData()
        
    },[api])
    return {data,err}
}