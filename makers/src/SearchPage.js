import React from 'react'
import "./SearchPage.css"
import { Button } from '@mui/material'
import SearchResult from './SearchResult'
function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>
               62 stays . 26 August to 30 August . 2 Guests
            </p>
            <h1>Stays Nearby</h1>
            <Button 
            variant="outlined">Cancellation Flexiblity</Button>
            <Button
            variant='outlined'>Type of place</Button>
            <Button 
            variant='outlined'>Price</Button>
            <Button variant='outlined'>Rooms and Beds</Button>
            <Button variant='outlined'>More</Button>
        
        </div>
        <SearchResult
              img="https://a0.muscache.com/im/pictures/ecea87c9-59ca-4470-9d6d-e434ff2bba62.jpg?im_w=720"
              location="Entire erntal unit in Mussoorie"
              title="Coxy mountain home woth terrace and Lawn"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
        />
          <SearchResult
              img="https://a0.muscache.com/im/pictures/miso/Hosting-48249479/original/2f337f8c-db6a-4104-b2ff-d6d8cc6b6fd2.jpeg?im_w=720"
              location="Entire erntal unit in Mussoorie"
              title="Coxy mountain home woth terrace and Lawn"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
          />
          <SearchResult
              img="https://a0.muscache.com/im/pictures/miso/Hosting-48249479/original/2f337f8c-db6a-4104-b2ff-d6d8cc6b6fd2.jpeg?im_w=720"
              location="Entire erntal unit in Mussoorie"
              title="Coxy mountain home woth terrace and Lawn"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
          />
          <SearchResult
              img="https://a0.muscache.com/im/pictures/miso/Hosting-48249479/original/2f337f8c-db6a-4104-b2ff-d6d8cc6b6fd2.jpeg?im_w=720"
              location="near pvr"
              title="sure to take"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
          />
          <SearchResult
              img="https://a0.muscache.com/im/pictures/5d227baa-b55e-448b-a125-cc8dd7ca638f.jpg?im_w=720"
              location="Main street"
              title="coxy chills"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
          />
          <SearchResult
              img="https://a0.muscache.com/im/pictures/eb5477db-2784-464f-9295-5a98b0d7779a.jpg?im_w=720"
              location="mall road"
              title="Get in love"
              description="3 guests . 3 bedrooms . 3 beds . wifi . kitchen . Parking "
              stars={4.77}
              price="₹300/night"
              total="₹900 total"
          />
    </div>
  )
}

export default SearchPage