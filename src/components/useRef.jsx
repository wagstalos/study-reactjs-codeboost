import { useEffect, useRef } from "react"

export default function HookuseRef(){
    const titleOne  = useRef()
    const titleTwo  = useRef()

    useEffect(()=> {
        let elemTitle = titleOne.current;
        let elemSubTitle = titleTwo.current;

        elemTitle.textContent = 'Wagner Silva'
        elemSubTitle.textContent = 'Frontend'
    },[])
    return(
        <>
            <h2>useRef</h2>
            <h4 ref={titleOne}>Heading 4 teste</h4>
            <h3 ref={titleTwo}>Heading 3</h3>
        </>
    )
}