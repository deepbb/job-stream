"use client"
import React, { useState } from 'react'
import "./Filter.css"

export default function Filter() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOnChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className='filters'>
        <div className='filter-headings'>
            <p className='filter-headings-text'>Filters</p>
            <p className='filter-headings-text2'>Clear all</p>
        </div>
        <hr style={{width:'90%',margin:'auto'}} />
        <div className='job-types'>
        <div className='filter-headings-card'>
            <p className='filter-headings-text-card'>Job experience</p>
            <p className='filter-headings-text-card2'>Clear</p>
        </div>
        <div className='check-container'>
        <div className="topping">
              <input
                 type="checkbox"
                id="topping1"
                name="topping"
                value="Entry Level"
                checked={selectedOption === 'Entry Level'}
              onChange={() => handleOnChange('Entry Level')}
                className='check-input'
                />
               <label htmlFor="topping1" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Entry Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping2">
              <input
                 type="checkbox"
                id="topping2"
                name="topping2"
                value="Intermediate Level"
                checked={selectedOption === 'Intermediate Level'}
              onChange={() => handleOnChange('Intermediate Level')}
                className='check-input'
                />
               <label htmlFor="topping2" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Intermediate Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping3">
              <input
                 type="checkbox"
                id="topping3"
                name="topping3"
                value="Expert"
                checked={selectedOption === 'Expert'}
              onChange={() => handleOnChange('Expert')}
                className='check-input'
                />
               <label htmlFor="topping3" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Expert</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        </div>
        <div className='job-types'>
        <div className='filter-headings-card'>
            <p className='filter-headings-text-card'>Job experience</p>
            <p className='filter-headings-text-card2'>Clear</p>
        </div>
        <div className='check-container'>
        <div className="topping">
              <input
                 type="checkbox"
                id="topping1"
                name="topping"
                value="Entry Level"
                checked={selectedOption === 'Entry Level'}
              onChange={() => handleOnChange('Entry Level')}
                className='check-input'
                />
               <label htmlFor="topping1" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Entry Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping2">
              <input
                 type="checkbox"
                id="topping2"
                name="topping2"
                value="Intermediate Level"
                checked={selectedOption === 'Intermediate Level'}
              onChange={() => handleOnChange('Intermediate Level')}
                className='check-input'
                />
               <label htmlFor="topping2" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Intermediate Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping3">
              <input
                 type="checkbox"
                id="topping3"
                name="topping3"
                value="Expert"
                checked={selectedOption === 'Expert'}
              onChange={() => handleOnChange('Expert')}
                className='check-input'
                />
               <label htmlFor="topping3" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Expert</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        </div>
        <div className='job-types'>
        <div className='filter-headings-card'>
            <p className='filter-headings-text-card'>Job experience</p>
            <p className='filter-headings-text-card2'>Clear</p>
        </div>
        <div className='check-container'>
        <div className="topping">
              <input
                 type="checkbox"
                id="topping1"
                name="topping"
                value="Entry Level"
                checked={selectedOption === 'Entry Level'}
              onChange={() => handleOnChange('Entry Level')}
                className='check-input'
                />
               <label htmlFor="topping1" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Entry Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping2">
              <input
                 type="checkbox"
                id="topping2"
                name="topping2"
                value="Intermediate Level"
                checked={selectedOption === 'Intermediate Level'}
              onChange={() => handleOnChange('Intermediate Level')}
                className='check-input'
                />
               <label htmlFor="topping2" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Intermediate Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping3">
              <input
                 type="checkbox"
                id="topping3"
                name="topping3"
                value="Expert"
                checked={selectedOption === 'Expert'}
              onChange={() => handleOnChange('Expert')}
                className='check-input'
                />
               <label htmlFor="topping3" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Expert</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        </div>
        <div className='job-types'>
        <div className='filter-headings-card'>
            <p className='filter-headings-text-card'>Job experience</p>
            <p className='filter-headings-text-card2'>Clear</p>
        </div>
        <div className='check-container'>
        <div className="topping">
              <input
                 type="checkbox"
                id="topping1"
                name="topping"
                value="Entry Level"
                checked={selectedOption === 'Entry Level'}
              onChange={() => handleOnChange('Entry Level')}
                className='check-input'
                />
               <label htmlFor="topping1" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Entry Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping2">
              <input
                 type="checkbox"
                id="topping2"
                name="topping2"
                value="Intermediate Level"
                checked={selectedOption === 'Intermediate Level'}
              onChange={() => handleOnChange('Intermediate Level')}
                className='check-input'
                />
               <label htmlFor="topping2" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Intermediate Level</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        <div className='check-container'>
        <div className="topping3">
              <input
                 type="checkbox"
                id="topping3"
                name="topping3"
                value="Expert"
                checked={selectedOption === 'Expert'}
              onChange={() => handleOnChange('Expert')}
                className='check-input'
                />
               <label htmlFor="topping3" style={{marginLeft:10,fontFamily:'Poppins',fontSize:12}}>Expert</label>
        </div>
      <div>
        <span style={{fontFamily:'Poppins',fontSize:12}}>225</span>
      </div>
      
        </div>
        </div>
        
    </div>
  )
}
