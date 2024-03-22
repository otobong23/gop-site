"use client";
import { useState } from 'react'
import { useToggleType } from '@/types/hooks.types';


const useToggle:useToggleType = (state) => {
  const [toggle, setToggle] = useState(state)
  const handleToggle = () => {
   setToggle(prevToggle => !prevToggle)
  }
  return [toggle, handleToggle]
}

export default useToggle