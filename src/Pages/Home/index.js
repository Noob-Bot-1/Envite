import { Grid } from '@mui/material';
import React from 'react'
import '../../Styles/Home/index.css'
const url_src = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220930T090052Z&X-Amz-Expires=86400&X-Amz-Signature=dc06c2d0333e9c887aaa4fc2f3164eb09b416c665acf4d38003d025f4ddc0223&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject';

function Home() {
  return (
    <Grid className='main-container' container columns= {12}>
      <Grid item xs = {12} md = {6}>
        <img className = "img2" src = {url_src} />
      </Grid>
      <Grid item xs = {12} md = {6}>
        <div className='written-content'>
          <div className='heading-main'>Imagine if</div>
          <div className='snapchat-heading'>Snapchat</div>
          <div className='heading-main'>had events.</div>
          <p className='subheading-main'>Easily host and share events with your friends across any social media.</p>
        </div>
        
        
        <div className='img1-div'>
          <img className = "img1" src = {url_src} />
        </div>
        <div className='button-div'>
          <button className='create-event-button'>🎉 Create my event</button>
        </div>
      
      </Grid>
    </Grid>
  )
}

export default Home