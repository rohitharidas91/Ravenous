import { useState } from 'react'
import './App.css'
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {

  //placeholder for businesses
  const [businesses, setBusinesses] = useState([{
    id: 1,
    image: 'https://foodish-api.com/images/butter-chicken/butter-chicken13.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 2,
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 3,
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 4,
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 5,
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  }, {
    id: 6,
    image: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Bodertown',
    state: 'NY',
    zipcode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  },
  ]);

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');
  const [query, setQuery] = useState({
    search: '',
    location: '',
    sortBy: '',
  })

  return (
    <>
      <h1 className='banner'>ravenous</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        sortBy={sortBy}
        setSortBy={setSortBy}
        query={query}
        setQuery={setQuery}
      />
      <BusinessList
        businesses={businesses}
      />
      <footer>Made with '3' by Blackheart</footer>
    </>
  )
}

export default App
