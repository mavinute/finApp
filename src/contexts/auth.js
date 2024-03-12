import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: "Matheus Vinute"
  })

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}