import { createContext, useState, useEffect } from "react";


const UniversityContext = createContext()

export const UniversityProvider = ({children})=>{

    const [universities,setUniversities]= useState([])

    useEffect(()=>{
        fetchUniversities()
    },[])
    const fetchUniversities = async()=>{


        const response = await fetch('https://devilman-crybaby.onrender.com/api/v1')

        const data = await response.json()

        setUniversities(data)
        console.log(data);
    }

    return <UniversityContext.Provider value={{
        universities
    }}>
        {children}
    </UniversityContext.Provider>
}

export default UniversityContext