import React, { createContext } from "react"
import Rating from "./Rating"
type contextType = {
    count: number
}
const LoggerContext = createContext<contextType | undefined>(undefined)
const Context: React.FC<{}> = () => {
   
    return(
        <>
        {/* <LoggerContext.Provider value={25}>
            <h1>Hello</h1>
        </LoggerContext.Provider> */}
        <LoggerContext.Provider value= {{count: 26}}>

        <Rating totalRatings = {20} defRatings={12}/>
        </LoggerContext.Provider>
        </>
    )
}
export {LoggerContext};
export default Context;