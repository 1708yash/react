import React, { useState } from 'react'
import './Searchs.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const Navigate= useNavigate();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <h2>Number of guests
        <PeopleIcon/>
      </h2>
      <input min={0}
      defaultValue={2}
      type="number"/>
      <Button onClick={() => Navigate('/search')}>Search Airbnb
      </Button>
    </div>
  )
}

export default Search