import { useRef, useState } from "react"


import { useEffectAfterMount } from "./useEffectAfterMount"

export const useDelay = () => {
    const [value, setValue] = useState()
    let timer: number

    const delaySearch = (e: React.ChangeEvent<HTMLInputElement>) => {

    }   

    useEffectAfterMount(() => {
        
    },[])

    return{
        delaySearch, 
        value
    }
}