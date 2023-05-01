import { useRef, useEffect } from "react";

export const Scroll = (props) => {
const scrollingDivRef = useRef(null);

     useEffect(() => {
        const scrollingDiv = scrollingDivRef.current;

        const handleScroll = () => {
            const scrollPosition = scrollingDiv.scrollHeight - scrollingDiv.scrollTop;
            if (scrollPosition === scrollingDiv.clientHeight ) {
                scrollingDiv.scrollTop = 0;
            }
        }

        scrollingDiv.addEventListener("scroll", handleScroll);
        return () => scrollingDiv.removeEventListener("scroll", handleScroll);

     }, []);



     return (
        <div ref={scrollingDivRef} >
            {props.children}
        </div>
     )
}