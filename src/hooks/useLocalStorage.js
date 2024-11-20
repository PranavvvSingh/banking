import { useState, useEffect } from "react"

function getStorageValue(key, defaultValue) {
   const saved = localStorage.getItem(key)
   if(saved===undefined) return defaultValue
   const initial = JSON.parse(saved)
   return initial
}

export const useLocalStorage = (key, defaultValue) => {
   const [value, setValue] = useState(() => {
      return getStorageValue(key, defaultValue)
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])

   return [value, setValue]
}
