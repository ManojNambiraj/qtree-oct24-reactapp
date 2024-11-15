import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import CreateUser from './CreateUser'
import EditUser from './EditUser'

const CRUDApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/createUser' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CRUDApp

// CRUD ---> Create Read Update Delete

// Http ---> POST   GET   PUT   DELETE