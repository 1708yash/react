import React from 'react';
import './Home.css';
import Card from './Card'
import Banner from './Banner';
function Home() {
  return (
    <div className='home'>
    <Banner/>
<div className='home__section'>
      <Card 
          src="https://a0.muscache.com/im/pictures/e6d0198f-0c53-4ef7-bf09-b9cf7b84d1b0.jpg?im_w=720" alt='/'
          title="Cozy mountain home with terrace"
          description="A fully costum room  with old wood feel"
      />
      <Card 
          src="https://a0.muscache.com/im/pictures/e6d0198f-0c53-4ef7-bf09-b9cf7b84d1b0.jpg?im_w=720" alt='/'
          title="The Skydrift"
          description="1-bedroom holiday home with garden"
      />
      <Card 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-574277871411596249/original/269fac98-cd36-45f3-9d02-bc997b61be0d.jpeg?im_w=720" alt='/'
          title="White Jameson"
          description="A room made with delight"
      />
</div>

      <div className='home__section'>
        <Card
          src="https://a0.muscache.com/im/pictures/e6d0198f-0c53-4ef7-bf09-b9cf7b84d1b0.jpg?im_w=720" alt='/'
          title="Cozy mountain home with terrace"
          description="A fully costum room  with old wood feel"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/e6d0198f-0c53-4ef7-bf09-b9cf7b84d1b0.jpg?im_w=720" alt='/'
          title="The Skydrift"
          description="1-bedroom holiday home with garden"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-574277871411596249/original/269fac98-cd36-45f3-9d02-bc997b61be0d.jpeg?im_w=720" alt='/'
          title="White Jameson"
          description="A room made with delight"
        />
      </div>
    </div>
  );
}

export default Home