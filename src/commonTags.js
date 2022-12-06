import NkarLearn from './Learn.png'
// import styled, { css } from 'styled-components'
export const HeaderPart = styled.header`
height:150px;
border:1px solid red;  
display:flex;
align-items:center
`


export const Container = styled.section`
width:80%;
height:80px;
display:flex;
justify-content:space-between;
align-items:center;
margin:0 auto;
border:1px solid green;
`
export const Sec1Part = styled(HeaderPart)`
width:100%;
height:567px;
border:1px solid black;
`
export const Sec1Cont= styled(Container)`
height:567px;
`
export const Sec2Part =styled(HeaderPart)`

`
export const DivLearn = styled.div`
width: 100%;
height: 240px;
border:1px solid red;
display:flex;
margin-top:36px
`
export const DivLearnLeft =styled.div`
width: 386px;
height: 240px;
border:1px solid red;
`
export const DivLearnRight = styled.div`
width: 50px;
height: 240px;
border:1px solid red;
`

export const Sec1Left= styled.div`
width:40%;
height:567px;
border:1px solid red;
display:flex;
flex-direction:column;
`
export const Sec1Right= styled.div`
width:60%;
height:567px;
border:1px solid purple;
`
export const ImgLearn =styled.img.attrs((props)=>
(
    {src:props.img || NkarLearn}
))`
width:60%;
height:567px;
`
// ??????????

export const H2Text= styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 64px;
`
// LEARN
export const H1Learn= styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 64px;
line-height: 80px;
`
/* or 125% */

// Skills
export const H3Text = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 80px;
`
// Speaking
export const H4Text = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 80px;
`

export const PText = styled.p`
font-family: 'Poppins';
color: #8F95A5;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
margin-top:40px;
`

//  B U T T O N
export const ButtonGet = styled.button` 
width: 292px;
height: 80px;
background: #263238;
border-radius: 5px;
margin-top:61px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
`
export const ButtonTalk = styled.button` 
width: 220px;
height: 70px;
border: 2px solid #263238;
border-radius: 5px;
background:none;

`
export const H4BtnTalk = styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
color: #000000;
`

export const ButtonPrice = styled.button`
width: 205px;
height: 45px;
left: 32px;
top: 2545px;
background: #EEEEEE;
border-radius: 5px;
`
export const UlHeader = styled.ul`
display:flex;
margin-left:167px
`

export const LiHeader = styled.li`
list-style:none;
`
export const H5List=styled.h5`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
margin-left:20px;
`