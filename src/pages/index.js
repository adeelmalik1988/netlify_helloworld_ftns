import React, { useEffect, useState } from "react"


const IndexPage = () => {

  const [data, setData] = useState("")

  useEffect(()=>{
    (
      async()=>{
        const response = await fetch('.netlify/functions/hello')
        const tempData = await response.json()
        console.log(tempData)
        setData(tempData)
      }
    )();
  },[]

  )


  return (
    <div>
      <h1>
        Hello World
      </h1>
      <h3>
        {data.message}
      </h3>
    </div>
  )
}

export default IndexPage
