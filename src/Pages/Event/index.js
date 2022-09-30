import { Grid } from '@mui/material';
import { MdOutlineDateRange } from 'react-icons/md';
import {GoLocation} from 'react-icons/go';
import React from 'react';
import '../../Styles/Event/index.css';
import url_src from "./static/Birthday.png";



function Event() {
  return (
    <Grid className='event-container' container columns= {12}>
      <Grid item xs = {12} md = {6}>
        <div className='img1-div'>
          <img className = "img1" src = {url_src} />
        </div>
        <div className='written-content'>
          <div className='heading-main-event'>Birthday Bash</div>
          <p className='subheading-main-event'>Hosted by <b className='bold-subhead'>Elysia</b></p>
        </div>
        <div>
          <div className='date-line'><span className='icon-event'><MdOutlineDateRange  /></span> <b className='bold-subhead-event'>18 August 6:00PM</b> to <b className='bold-subhead-event'>19 August 1:00PM</b> UTC +10</div>
          <div className='location-line'><span className='icon-event'><GoLocation /></span> <b className='bold-subhead-event'>Street name</b> Suburb, State, PostCode</div>
        </div>
      
      </Grid>
      <Grid item xs = {12} md = {6}>
        <img className = "img2" src = {url_src} />
      </Grid>
    </Grid>
  )
}

export default Event