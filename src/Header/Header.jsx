import React from 'react'
import { Container ,HeaderPart, H2Text, ButtonTalk, H4BtnTalk} from '../commonTags'
import Nav from './Nav'


export default function Header() {
  return (
   <HeaderPart>
      <Container>
         <H2Text>
            BritLex
         </H2Text>
         <Nav></Nav>
         <ButtonTalk>
            <H4BtnTalk>
               Let's Talk
            </H4BtnTalk>
         </ButtonTalk>
      </Container>
   </HeaderPart>
  )
}
