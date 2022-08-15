import { useContext, useState , useRef, useEffect} from "react";
import { ColorsContext } from "../Context/ColorsContext";
import styled from "styled-components";

import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import { AiOutlineLock,AiOutlineUnlock , AiFillLock} from "react-icons/ai"
import { MdOutlineClear } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import ActionBar from "./ActionBar";


const ColorPalette = () => {

const {colors, setColors,
    type, setType,
    loading, setLoading,
    isLiked, setIsLiked,
    isLocked, setIsLocked,
    iconSize, setIconSize,
    fetchColors,
    btnRef
     } = useContext(ColorsContext);

  const [palette, setPalette] = useState([]);

// remove color from the palette
const removeColor = (index) => {
    colors.splice(index,1)
};

console.log("colors" , colors);




if (loading === false) {
    <div>loading</div>
}


    return (
    <Wrapper>
       <Wrap>  
        {colors?.splice(0,5).map((color,index)=> {
           
            const name = color.substring(1);
            return (<>
            <Color color={color}>
                {/* <ActionBar color={color}/> */}
                <ColorName color={color}>{name}</ColorName>

                <StyeldIoIosAddCircleOutline  onClick={removeColor} size={iconSize}/>

            </Color> 
                </>)

        })}
        </Wrap>
    </Wrapper>)
       
}


const StyeldIoIosAddCircleOutline = styled(IoIosAddCircleOutline)`
position: relative;
display: none;
`;

const SpaceBar = styled.button`
position: relative;
`;

const Wrapper = styled.div`
width: 100%;

`;
const Wrap = styled.div`
display: flex;
height: calc(100vh - 150px);
`;


const ColorName = styled.div`
font-size:24px;
font-weight: bold;
margin: 5px;
padding: 10px;
text-transform: uppercase;
letter-spacing: 0.03em;
border-radius: 10px;
:hover{

    border: 1px solid ${props => props.color ? props.color : "none"};
    background-color: white;
    opacity: 50%;
}
`;

const Color = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.color ? props.color : "none"};
width: 20%;
height: 100%;
top: 0px;
left: 0%;
transform: translate3d(0px, 0px, 0px);
`;




export default ColorPalette;