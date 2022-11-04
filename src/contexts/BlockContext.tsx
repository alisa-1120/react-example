import React, {useState,useEffect,useRef} from "react"

const BlockContext = React.createContext(0)

const BlockContextProvider = ({children}) => {
    const previousBlock = useRef(0)
    const [block,setBlock] = useState(0)
}