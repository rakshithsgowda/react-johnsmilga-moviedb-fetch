import React, { useState, useContext } from 'react'
import useFetch from './useFetch'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')
  const { isLoading, error, data: movies } = useFetch(`&${query}`)

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        setQuery
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
