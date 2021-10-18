import React, {useState, useRef, useEffect} from 'react';

const withMouseOver = (WrapperComponent) =>(props) =>{

    const [mouseOver, setMouseState] = useState(false);
    const inputEl = useRef(null);


    useEffect(() => {
          
        const handleMouseEnter = () =>{
            if(!mouseOver){
                setMouseState(true);
            }

        }

        const handleMouseLeave = () =>{
            if(mouseOver){
                setMouseState(false);
            }
        }
        
        if(inputEl.current){
      
            inputEl.current.addEventListener('mouseenter', handleMouseEnter);
            inputEl.current.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            inputEl.current.removeEventListener('mouseenter', handleMouseEnter);
            inputEl.current.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [inputEl, mouseOver])

    return(
        <div ref={inputEl}>
            <WrapperComponent {...props} mouseOver={mouseOver}/>
        </div>
    );
}

export default withMouseOver;