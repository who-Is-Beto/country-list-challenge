import React from 'react';
import CountryList from '../components/CountryList';
import Input from '../components/Input';
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <>
        <Input />
        <CountryList />
      </>
    </div>
  );
};

export default HomePage;
