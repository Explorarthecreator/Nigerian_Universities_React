
import UniversityItem from "./UniversityItem"
import { useContext } from "react"
import UniversityContext from "./context/UniversityContext"


function UniversityList({universitylist}) {
    const {universities} = useContext(UniversityContext)
    if (!universities || universities.length ===0){
        return(
            <p>
                No items found
            </p>
        )
    }
  return (
    <>
        {
            universities.map(item =>(
                <UniversityItem key={item.id} item={item}/>
            ))
        }
    </>
  )
}

export default UniversityList