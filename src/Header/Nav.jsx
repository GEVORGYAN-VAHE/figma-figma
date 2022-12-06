import React from 'react'
import { UlHeader,LiHeader,H5List} from '../commonTags'

export default function Nav() {
const arr = ['Home','Sklilles','About Us','Prices','Contacts']
  return (
     <UlHeader>
           {
            arr.map((item,index)=>(
           <LiHeader key={index}>
              <H5List  key={index}> 
                  {item}
              </H5List>
           </LiHeader>
           ))
          } 
     </UlHeader>
  )
}
