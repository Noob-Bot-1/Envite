import React, {useState} from 'react'
import { Grid,TextField,InputBase, Button } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import {
  LocalizationProvider,
  DesktopDatePicker,
  TimePicker
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import '../../Styles/Create/index.css'
import { Link } from "react-router-dom";

function Create() {
  const [value, setValue] = React.useState(
    dayjs('2014-08-18T21:11:54')
  )

  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <div className = "create-main-container">
      <Grid item container columns = {12} className = "input-container">
        <Grid item xs = {12}>
          <div className = "create-title">
            Create Event
          </div>
        </Grid>
        <Grid item xs = {12}>
          <TextField
            id="outlined-password-input"
            label="Event Name"
            type="event name"
            autoComplete="event-name"
            fullWidth
          />
        </Grid>
        <Grid item xs = {12} className = "mt">
          <TextField
            id="outlined-password-input"
            label="Host Name"
            type="host name"
            autoComplete="host-name"
            fullWidth
          />
        </Grid>
        <Grid item container columns = {12} className = "mt">
          <Grid item xs={6} className = 'pr-6'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className='w-100'
                label="Start Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} className = 'pl-6'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                className='w-100'
                label="End Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid item container columns = {12} className = "mt">
          <Grid item xs={6} className = 'pr-6'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                className='w-100'
                label="Start Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} className = 'pl-6'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                className='w-100'
                label="End Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs = {12} className = "mt">
            <TextField
              id="outlined-password-input"
              label="Location"
              type="location"
              autoComplete="location"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className = "mt">
            <Link to = '/event/' className = 'create-link-font'>
              <button className = "create-button">
                Create Event
              </button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Create