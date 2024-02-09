/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import React, { createContext, useState } from 'react'

interface MyContextProps {
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

const MyContextLocation = createContext<MyContextProps>({
  location: '',
  setLocation: () => {},
})

const MyContextLocationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [location, setLocation] = useState('home')

  return (
    <MyContextLocation.Provider value={{ location, setLocation }}>
      {children}
    </MyContextLocation.Provider>
  )
}

export { MyContextLocation, MyContextLocationProvider }
