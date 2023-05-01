import React from "react";
import Carousel from '@itseasy21/react-elastic-carousel';
import Item from "./Each";
import "./index.css";

const breakPoints = [
  { width: 1, ItemsToShow: 1 },
  { width: 550, ItemsToShow: 2 },
  { width: 768, ItemsToShow: 3 },
  { width: 1200,ItemsToShow:  2},
];

export default function HealthCarousel() {
  return (
    <> 
    <div className="health-corousel-component">
        <Carousel breakPoints={breakPoints} className="health-carousel">
          <Item ><img className="yoga-Item" src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682675913/mature-couple-meditating-lotus-positing-home_oawtfv.jpg' alt='yoga-image1'/></Item>
          <Item ><img className="yoga-Item" src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682872618/older-couple-outdoors-city-with-cup-coffee_twgqdi.jpg' alt='yoga-image1'/></Item>
          <Item ><img className="yoga-Item" src='https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682873126/senior-couple-training-together_b5xe3w.jpg' alt='yoga-image1'/></Item>
        
        </Carousel>
     </div>
    </>
  );
}

// const rootElement = documen3t.getElementById("root");
// ReactDOM.render(<App />, rootElement);