import React from 'react';
import { ButtonGet, DivLearn, DivLearnLeft, DivLearnRight, H1Learn, ImgLearn, PText, Sec1Cont, Sec1Left, Sec1Part, Sec1Right } from '../../commonTags'
import TungstenIcon from '@mui/icons-material/Tungsten'


export default function Sec1() {
  return (
    <Sec1Part>
       <Sec1Cont>
         <Sec1Left>
         <DivLearn>
           <DivLearnLeft>
             <H1Learn>
                Learn <br/> Any Foreign <br/> Language
             </H1Learn>
           </DivLearnLeft>
           <DivLearnRight>   
             <TungstenIcon/>
           </DivLearnRight>
         </DivLearn>
         <PText>
                  With our teachers who write a program <br />
                  for each student, you will be able to make <br />
                  your first sketch after the first lesson.
         </PText>
         <ButtonGet>
          Get started
         </ButtonGet>
         </Sec1Left>

         <Sec1Right>
           <ImgLearn/>
         </Sec1Right>

       </Sec1Cont>

    </Sec1Part>
  )
}
