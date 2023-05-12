import React from 'react'
import Image from 'next/image'

const images = [
    '/six.jpg',
    '/four.jpg',
    '/one.jpg',
    '/two.jpg',
    '/three.jpg',
];

const Gallery = () => {
    return (
    <main className='mt-[4rem] '  style={{marginTop: '4rem', }} >
            <div className='flex flex-col justify-center' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <h1 className='self-center font-bold text-[34px] ' style={{fontSize: '34px', alignSelf: 'center', fontWeight: 'bold', }}>Image Gallery</h1>
                <div className='lg:flex flex-wrap justify-center align-center ' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', }}>
                    {images.map((imageUrl, i) => (
                        <div className='m-8 ' key={i} style={{margin: '1rem'}} >
                            <Image src={imageUrl} alt={`Image ${i}`} width={400} height={350} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Gallery