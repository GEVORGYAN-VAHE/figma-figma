import React from 'react'
import { Sec2Part } from '../commonTags'
import { Pagination } from '@mui/material';


export default function Sec2() {
  return (
    <Sec2Part>
        <Pagination count={10} color="primary" />
             
    </Sec2Part>
  )
}
