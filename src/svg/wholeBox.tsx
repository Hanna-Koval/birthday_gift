import React from 'react';

interface PropsBox {
  className: string;
}

const WholeBox = ({ className }: PropsBox) => {
  return (
    <div style={{ width: '38vw', height: '38vh', zIndex: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
        className={className}
        style={{ overflow: 'visible' }}
        // xml:space="preserve"
      >
        <defs></defs>
        <g
          style={{
            stroke: 'none',
            strokeWidth: 0,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 10,
            fill: 'none',
            fillRule: 'nonzero',
            opacity: 1,
          }}
          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
          <path
            d="M 79.154 88.599 H 10.846 c -2.439 0 -4.415 -1.977 -4.415 -4.415 V 32.711 h 77.139 v 51.473 C 83.569 86.623 81.593 88.599 79.154 88.599 z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'rgb(153,230,252)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <rect
            x="6.43"
            y="32.71"
            rx="0"
            ry="0"
            width="77.14"
            height="9.79"
            className="shadow"
            transform=" matrix(1 0 0 1 0 0) "
          />
          <path
            className="cover"
            d="M 86.741 36.528 H 3.259 c -1.8 0 -3.259 -1.459 -3.259 -3.259 V 23.154 c 0 -1.8 1.459 -3.259 3.259 -3.259 h 83.482 c 1.8 0 3.259 1.459 3.259 3.259 v 10.115 C 90 35.069 88.541 36.528 86.741 36.528 z"
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
          />
          <path
            d="M 64.939 20.124 H 45 c -0.838 0 -1.586 -0.522 -1.876 -1.308 c -0.29 -0.786 -0.059 -1.669 0.578 -2.213 L 58.866 3.656 c 2.811 -2.397 6.639 -2.925 9.99 -1.381 c 3.354 1.547 5.438 4.802 5.438 8.495 C 74.294 15.927 70.097 20.124 64.939 20.124 z M 50.423 16.124 h 14.517 c 2.952 0 5.354 -2.402 5.354 -5.354 c 0 -2.146 -1.163 -3.963 -3.112 -4.862 c -1.951 -0.898 -4.087 -0.603 -5.718 0.79 L 50.423 16.124 z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'rgb(254,118,168)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            className="cover"
          />
          <path
            d="M 45 20.124 H 25.06 c -5.158 0 -9.354 -4.196 -9.354 -9.354 c 0 -3.693 2.083 -6.948 5.437 -8.494 c 3.354 -1.546 7.182 -1.017 9.99 1.38 l 15.165 12.947 c 0.637 0.544 0.867 1.427 0.577 2.213 C 46.587 19.602 45.838 20.124 45 20.124 z M 25.096 5.395 c -0.761 0 -1.533 0.169 -2.278 0.513 c -1.948 0.898 -3.112 2.716 -3.112 4.862 c 0 2.952 2.401 5.354 5.354 5.354 h 14.517 L 28.536 6.698 C 27.528 5.837 26.326 5.395 25.096 5.395 z"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'rgb(254,118,168)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            strokeLinecap="round"
            className="cover"
          />
          <rect
            x="39.24"
            y="18.71"
            rx="0"
            ry="0"
            width="11.51"
            height="18.0"
            style={{
              stroke: 'none',
              strokeWidth: 1,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'rgb(254,118,168)',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform=" matrix(1 0 0 1 0 0) "
            className="cover"
          />
          <rect
            className="ribbon"
            x="39.24"
            y="37"
            rx="0"
            ry="0"
            width="11.51"
            height="51.6"
            transform=" matrix(1 0 0 1 0 0) "
          />
        </g>
      </svg>
    </div>
  );
};

export default WholeBox;
