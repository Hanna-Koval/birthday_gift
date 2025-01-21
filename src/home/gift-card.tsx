import React from 'react';

interface PropsBox {
  className?: string;
}

const GiftCard = ({ className }: PropsBox) => {
  return (
    <div className={className ? `${className} style-card` : 'style-card'}>
      <div className="flex-col">
        <span className="text-on-cardh1">A gift card</span>
        <span className="text-on-cardh2">for you</span>
      </div>
      <div className="container-with-hr">
        <span className="text-on-cardh1 smaller-text">
          Recommendations to use:
        </span>
        <span className="text-on-cardh1 smaller-text">
          1.{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.amazon.pl/LEGO-Chryzantema-Zbudowania-Milo%C5%9Bnik%C3%B3w-10368/dp/B00CALHYF6/ref=sr_1_10?dib=eyJ2IjoiMSJ9.zYok0leYgXZXTbiuHKV2KsJxfjFKfqtv2JC_KPpYXyK4Zh2vqNq5jEf85i0V9X5C7vktqDZfqFBh3_mM_ZFoUx88ekChEByM2KdXMxbeYs2YQy7qfUAkQucG7EWW-Cah3a4R8QlaVXRyAak0PNrUK9MvpC0SAQtvrePn643_h0ipJBqwRRLITNx1m9LeI3azeoLC5x5GldSvP_LKJ61W9B0LsggcJLasTl-BorR98Z0Bkvmp8KmVjwCqUWxlJYPixT7gR1FsYyBp7l4hBoi3QUFfXh7HDI_e9wNT_KEweUt7OwFRqWHvXy3mJhLbDAbrnFCjyFbrseDkWWj3wuUGQQbP84jM0y5DMT0ejrHL1gUJNgIMI2e6_VRBwuIEc_DVRknJsxJ8AiCCOLfTb0K6H4_cQTilzhmdTb8NAbbJqcAK6Ep4BAAzbc7MvRdiUVWt.XX4eyfxYgUOACnyZuPTJbX7BYGJAmSxFIXzOWDZJADg&dib_tag=se&keywords=lego&qid=1737383225&sr=8-10"
          >
            Lego
          </a>
        </span>
        <span className="text-on-cardh1 smaller-text">2. Книжочки</span>
        <span className="text-on-cardh1 smaller-text">
          3. Що забажає твоя душенька
        </span>
        <hr className="style-hr"></hr>
        <span className="text-on-cardh1 smaller-text">AMOUNT: 25€</span>
        <hr className="style-hr"></hr>
      </div>
    </div>
  );
};

export default GiftCard;
