import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import { ReviewsDate } from './ReviewsDate';
import { ReviewItem } from './ReviewItem';
import styled from 'styled-components';

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};

export default function Review() {
  return (
    <CustomerReview>
      <OwlCarousel id='customer-review' className="owl-carousel owl-theme" {...options}>
        {ReviewsDate.map(reviewDetail => {
          return (
            <ReviewItem reviewDetail={reviewDetail} key={reviewDetail.name} />
          )
        })}
      </OwlCarousel>
    </CustomerReview>
  );
};

const CustomerReview = styled.div`
  padding-top: 10rem;
    .shadow-effect {
      background: #fff;
      padding: 20px;
      border-radius: 4px;
      text-align: center;
      border: 1px solid #ECECEC;
      box-shadow: 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.02);
    }
    .shadow-effect p {
      font-family: 'Righteous';
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      text-align: justify;
      color: rgba(0, 0, 0, 0.22);
      padding: 0 15px;
    }
    .img-circle {
      border-radius: 50%;
      vertical-align: middle;
      max-width: 90px;
      min-height: 90px;
      transform-style: preserve-3d;
      margin: 0 auto 17px;
    }
    .customer-name {
      margin: -17px auto 0;
      display: table;
      width: auto;
      background-color: #F17900;
      padding: 9px 35px;
      border-radius: 12px;
      text-align: center;
      color: #fff;
      box-shadow: 0px 9px 18px rgba(0,0,0,0.12), 0px 5px 7px rgba(0,0,0,0.5);
    }
    p.customer-rate{
      color: #000000;
      text-align: center;
    }
    .item {
      text-align: center;
      padding: 50px;
      margin-bottom: 0px;
      opacity: 0.2;
      transform: scale3d(0.8, 0.8, 1);
      transition: all 0.3s ease-in-out;
    }
    .owl-item.active.center .item {
      opacity: 1;
      transform: scale3d(1.0, 1.0, 1);
    }
      @media screen and (max-width: 800px){
        padding-top: 4rem;
      }
`;
