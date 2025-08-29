import { useState } from 'react'
import Business from '../Business/Business'
import './App.css'

function App() {

  //placeholder for businesses
  const [businesses, setBusinesses] = useState({
    image:'https://foodish-api.com/images/butter-chicken/butter-chicken13.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },{
    image:'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },{
    image:'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },);


  return (
    <>
      <Business
        businesses={businesses}
      />
    </>
  )
}

export default App
