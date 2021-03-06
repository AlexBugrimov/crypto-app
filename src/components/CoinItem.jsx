import React from 'react'
import {AiOutlineStar} from "react-icons/ai";
import {Sparklines, SparklinesLine} from "react-sparklines";

const CoinItem = ({coin}) => {
  const {id, image, name, market_cap_rank, current_price, price_change_percentage_24h, sparkline_in_7d: {price}, total_volume, market_cap, symbol} = coin
  return (
    <tr className='h-[80px] border-b overflow-hidden'>
      <td><AiOutlineStar/></td>
      <td>{market_cap_rank}</td>
      <td>
        <div className='flex items-center'>
          <img className='w-6 mr-2 rounded-full' src={image} alt={id}/>
          <p className='hidden sm:table-cell'>{name}</p>
        </div>
      </td>
      <td>{symbol.toUpperCase()}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>{
        (price_change_percentage_24h > 0)
        ? (<p className='text-green-600'>{price_change_percentage_24h.toFixed(2)}%</p>)
        : (<p className='text-red-600'>{price_change_percentage_24h.toFixed(2)}%</p>)
      }
      </td>
      <td className='w-[180px] hidden md:table-cell'>${total_volume.toLocaleString()}</td>
      <td className='w-[180px] hidden sm:table-cell'>${market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={price}>
          <SparklinesLine color='teal'/>
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinItem;