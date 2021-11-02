import React, {useState, useRef, useEffect} from 'react';

const withMouseOver= <P extends object>(WrapperComponent:React.ComponentType<P>): React.FC<P> =>({...props}) =>{
    const [mouseOver, setMouseState] = useState(false);
    const inputEl = useRef<HTMLElement>(null);


    useEffect(() => {
          
        const handleMouseEnter = (event: MouseEvent):void =>{
            if(!mouseOver){
                setMouseState(true);
            }

        }

        const handleMouseLeave = (event: MouseEvent): void =>{
            if(mouseOver){
                setMouseState(false);
            }
        }
        
        if(inputEl.current){
            
            const { current } = inputEl;
            current.addEventListener('mouseenter', handleMouseEnter);
            current.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if(inputEl !== null){
                const { current } = inputEl;
                current!.removeEventListener('mouseenter', handleMouseEnter);
                current!.removeEventListener('mouseleave', handleMouseLeave);
            }
  
        }
    }, [inputEl, mouseOver])

    return(
        <div >
            <WrapperComponent {...props} ref={inputEl} mouseOver={mouseOver}/>
        </div>
    );
}

export default withMouseOver;