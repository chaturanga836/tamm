import React, {useState} from 'react';
import withMouseOver from './withMouseOver';

const colorPalette = [
    "#9b5de5",
    "#f15bb5",
    "#fee440",
    "#00bbf9",
    "#00f5d4"
];

interface ITextCompProps{
    mouseOver?: boolean
}

const TextComp =(props:ITextCompProps, ref:React.Ref<HTMLParagraphElement>) =>{

   const { mouseOver } = props;
    const [textColor , setTextColor] = useState( colorPalette[0]);

    const onClickText:React.MouseEventHandler<HTMLParagraphElement> =(e):void =>{

        let random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
        setTextColor(colorPalette[random]);
    }

    return(
        <React.Fragment>
            <p ref={ref} style={{color:textColor}} onClick={onClickText}>{ mouseOver ? "Mouse Enter" : "Mouse Leave"}</p>
        </React.Fragment>
    )
}

const forwardRef = React.forwardRef(TextComp);

export default withMouseOver(forwardRef);