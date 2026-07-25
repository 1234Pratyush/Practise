import React from 'react'
import type { Chai } from '../types'
import Card from './Card'

interface ListProps {
    items : Chai[]
}

const List = ({items} :ListProps) => {
  return (
    <div>
        {
            items.map((item)=>(
            key={item.id}/>
            ))
        }
    </div>
  )
}

export default List
