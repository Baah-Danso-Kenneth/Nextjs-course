import React from 'react'

type Props={
    params:{
        id:string
    },
    searchParams:{
        search:string
    }
}
function page({ params: { id}, searchParams: {search} }: Props) {
  return (
    <div>Search id is : {id} item search: {search}</div>
  )
}

export default page