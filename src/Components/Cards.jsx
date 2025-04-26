import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="w-full h-screen  bg-zinc-900 flex items-center px-32 gap-5">
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#004D43]">
                    <img className='w-32 i' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute rounded-full text-[#CDEA68] border-[#CDEA68] px-5 py-1 border-2 left-10 bottom-10'> &copy;2019-20222 </button>
                </div>
            </div>
            <div className="cardcontainer flex  gap-5 h-[50vh] w-1/2">
            <div className="card relative flex items-center justify-center  w-1/2 rounded-xl h-full bg-[#0c1917]">
            <img className='w-32 i' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute rounded-full text-[#CDEA68] border-[#CDEA68] px-5 py-1 border-2 left-10 bottom-10'> &copy;2019-20222 </button>
            </div>
            <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#0c1917]">
            <img className='w-32 i' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute rounded-full text-[#CDEA68] border-[#CDEA68] px-5 py-1 border-2 left-10 bottom-10'> &copy;2019-20222 </button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Cards