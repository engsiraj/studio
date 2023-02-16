import styled from 'styled-components'
import { Space, Top, Start, Bottom, End, Weight, textSize, Style, Align, Radius, textColor, backGround, Padding, PaddingStart, PaddingBottom, PaddingTop, PaddingEnd, Width, Border, columns } from './Common'
import { device } from '../library/Variable';

/* 
 todo: 
 - section box ✔
 - refine flexbox card ✔
 - refine columns card ✔
 - refine grid card ✔
*/

// todo: Section
export const Section = styled.div`
font-size:${textSize};
font-weight: ${Weight};
font-style: ${Style};
text-align: ${Align};
border-radius: ${Radius}; 
color: ${textColor};   
background-color: ${backGround}; 
${Border};
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//paddings
padding: ${Padding}; 
padding-top: ${PaddingTop}; 
padding-left: ${PaddingStart}; 
margin-right: ${PaddingEnd}; 
padding-bottom: ${PaddingBottom}; 
//width
width:${Width};
 @media ${device.phone} {
    width:100%;
 }
` 

// todo: flex card
// its works well really ok
const FlexStyles = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  align-items: ${p => p.alignItems};
  justify-content: ${p => p.justifyContent};
  width:${p=>p.width};
  height:${p=>p.height};
`
export const Flex = ({ 
    children,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
}) => {
    return (
        <FlexStyles
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            width={width}
            height={height}
        >{children}</FlexStyles>
    );
};

// todo: column
export const Column = styled.div`
//columns
width:${columns};
@media ${device.phone} {
    width:100%;
 }
//style
border-radius: ${Radius}; 
background-color: ${backGround}; 
${Border};
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//paddings
padding: ${Padding}; 
padding-top: ${PaddingTop}; 
padding-left: ${PaddingStart}; 
margin-right: ${PaddingEnd}; 
padding-bottom: ${PaddingBottom}; 

`
// todo: grid
export const Grid = styled.div`
//grid
width:${Width};
@media ${device.phone} {
    width:100%;
 }
//style
border-radius: ${Radius}; 
background-color: ${backGround}; 
${Border};
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//paddings
padding: ${Padding}; 
padding-top: ${PaddingTop}; 
padding-left: ${PaddingStart}; 
margin-right: ${PaddingEnd}; 
padding-bottom: ${PaddingBottom}; 
`

// todo: row card
const RowStyles = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection};
   @media ${device.phone} {
    flex-direction: column;
    }
  align-items: ${p => p.alignItems};
  justify-content: ${p => p.justifyContent};
  width:${p=>p.width};
  height:${p=>p.height};
`
export const Row = ({ 
    children,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
}) => {
    return (
        <RowStyles
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            width={width}
            height={height}
        >{children}</RowStyles>
    );
};