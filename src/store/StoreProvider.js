import { createContext, useReducer } from 'react'
import storeReducer, { initialState } from './StoreReducer'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialState)

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext }
export default StoreProvider