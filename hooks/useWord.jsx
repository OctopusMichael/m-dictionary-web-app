'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation';




const useWord = () => {
  const [inputValue, setInputValue] = useState("")
  const router = useRouter();

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue == "")return 
    router.push(`/${inputValue}`)

    setInputValue("")
    form.reset()




  }

  const handleChange = (e) =>{
    setInputValue(e.target.value)
  }


  return { inputValue, setInputValue, handleSubmit, handleChange}
}

export default useWord