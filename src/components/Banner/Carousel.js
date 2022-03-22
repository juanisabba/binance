import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles.css'
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Carousel() {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchData = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [currency]);

  const items = trending.map((coin) => {
    const profit = coin.price_change_percentage_24h > 0 
    return (
      <Link to={`/coins/${coin.id}`} className='carousel__item' > 
        <img src={coin?.image} alt={coin.name} />
        <div className='carousel__item__info'>
          <span>{coin?.symbol}</span> &nbsp;
          <span className={profit ? 'price-up' : 'price-down'}>{profit && '+'}{coin.price_change_percentage_24h.toFixed(2)}%</span>
        </div>
        <h2>{symbol}{numberWithCommas(coin?.current_price.toFixed(2))}</h2>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className='carousel__list'>
      <AliceCarousel
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
        disableButtonsControls
      />
    </div>
  );
}

export default Carousel;
