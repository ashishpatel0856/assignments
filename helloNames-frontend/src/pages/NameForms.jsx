import React, { useState } from 'react'

const NameForms = ({onSubmit,loading}) => {
    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name.trim()) return;
        onSubmit(name);
        setName("");
    };

  return (
    <form onSubmit={handleSubmit} className='space-y-2'>
       <input
       type='text'
       placeholder='enter name'
       value={name}
       onChange={(e) => setName(e.target.value)}
       className='w-ful border rounded p-3 '
       />

       <button
       type='Submit'
       disabled={loading}
       className='w-full bg-blue-700 text-white py-2 rounded-2xl hover:bg-blue-900 disabled:opacity-50'
       >
        {loading ? "submitting " : "Submit"}
       </button>
    </form>
  )
}

export default NameForms