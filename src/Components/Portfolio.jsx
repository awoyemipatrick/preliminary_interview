import React from 'react'
import Image from 'next/legacy/image'


const items = [
    {
      id: 1,
      title: 'GPT-3',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680714128/GPT-3_ospwto.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://gpt3-7b.netlify.app',
    },
    {
      id: 2,
      title: 'Robofriends',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680726269/robofriend_bbcpys.png',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
      link: 'https://robots-buddies.netlify.app/',
    },
    {
      id: 3,
      title: 'Front-End Challenge',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680714108/snap_kvluqt.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
      link: 'https://nimble-challenge.netlify.app/',
    },
    {
      id: 4,
      title: 'Link-Tree',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680714121/linktree_xfkpa8.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: 'https://pre-training.netlify.app',
    },
    {
      id: 5,
      title: 'Analog- Clock',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680714132/clock_ybutdj.png',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
      link: 'https://digital-analog.netlify.app',
    },
    {
      id: 6,
      title: 'calculator',
      url: 'https://res.cloudinary.com/dxqw4xvb8/image/upload/c_scale,h_636,r_0,w_1572/v1680714137/calc_ily5iu.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
      link: 'https://calc-late.netlify.app',
    },
  ];


const Portfolio = () => {


  return (
    <main className='mt-8' style={{marginTop: '0.5rem' }} >
      <div className='flex flex-col justify-center' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
        <h1 className='self-center text-[24px] ' style={{fontSize: '24px', alignSelf: 'center', }}>Portfolio</h1>
        <div className='lg:flex flex-wrap justify-center align-center ' style={{display: 'flex', flexWrap: 'wrap',  alignItems: 'center', justifyContent: 'center', }}>
            {items.map((item, i) => (
                <div className='m-4 bg-gray-500' key={i} style={{margin: '1rem', background: 'gray'}}>
                    <Image src={item.url} alt={item.title}  width={400} height={200} />
                    <h2 className='my-4 text-black text-[1.2rem] font-bold ' style={{margin: '0 0.5rem', color: 'black',  fontSize: '1.2rem', fontWeight: 'bold', }} > {item.title } </h2>
                    {/* <p className='max-w-[75%] mb-4 ' > <span className='text-[#03989e] ' >Description:</span> {item.description}</p> */}
                    <a className='bg-blue-600 px-4 py-2 rounded mt-[1rem] ' style={{background: '#3768ee', padding: '5px 7px',  borderRadius: '5px', marginTop: '1rem', }} href={item.link} >View page</a>
                    
                </div>
            )) }
        </div>
      </div>
    </main>
  )
}


export default Portfolio