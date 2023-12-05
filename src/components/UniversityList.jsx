
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {
            universities.map(item =>(
                <UniversityItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default UniversityList