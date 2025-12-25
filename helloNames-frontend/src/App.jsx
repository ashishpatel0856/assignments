import React from 'react'
import NameList from './pages/NameList'
import { useNames } from "./hooks/useNames";
import NameForms from './pages/NameForms';

const App = () => {
   const { names, addName, loading } = useNames();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Hello Names </h1>
         <NameForms onSubmit={addName} loading={loading} />
        <NameList names={names} />
      </div>
      
    </div>
    
  )
}

export default App