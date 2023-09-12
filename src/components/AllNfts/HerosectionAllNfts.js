import React from 'react'
import bg from '../../../public/explorebg.png'
const HerosectionAllNfts = () => {
  return (
    <div>
        <div
        className="pt-40 pb-40"        
        style={{
            backgroundImage:`url(${bg.src})`,
            backgroundRepeat:`no-repeat`,
            backgroundSize:`cover`,
            width:`100%`
        }
        }>
            <h1 className='text-white text-center text-4xl font-bold'>All NFT's</h1>
        </div>
    </div>
  )
}

export default HerosectionAllNfts