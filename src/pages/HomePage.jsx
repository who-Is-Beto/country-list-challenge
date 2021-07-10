import React, { useContext } from 'react'
import CountryList from "../components/CountryList";
import Input from "../components/Input";
import { StoreContext } from '../store/StoreProvider';
import '../styles/Home.css'

const HomePage = () => {
    const [store] = useContext(StoreContext)
    console.log(store.isLoad)
  return (
    <div className="home">
      <>
        <Input />
        <CountryList />
      </>
    </div>
  )
}

export default HomePage
