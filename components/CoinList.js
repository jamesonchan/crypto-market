import React from 'react'
import Coin from './Coin'


function CoinList({results}) {
    return (
        <div className='bg-gray-700 mt-10 max-w-7xl mx-auto rounded-xl'>
            {results.data.coins.map(result=>(
                <Coin key={result.id} {...result}/>
            ))}
        </div>
    )
}

export default CoinList
