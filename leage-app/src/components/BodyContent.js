import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const imageItems = [
  {
    src: "img/tsm-bkg.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "img/fnatic-bkg.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "img/g2-bkg.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
];

const BodyContent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === imageItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? imageItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = imageItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div class="mt-2">
      <div class="col">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {/* <CarouselIndicators items={imageItems} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>

      <div className="media d-flex flex-wrap mx-auto my-5 home-media align-items-center align-content-center justify-content-center">
        <img className="col-md-6" src="img/stixxay.jpeg" alt="Stixxay" />
        <div className="media-body d-flex align-content-center flex-wrap">
          <h5 className="">Stixxay Breaks ADC Records.. AGAIN</h5>
          <p>
            Trevor Hayes, better known by the name Stixxay, is an American
            professional League of Legends player who is currently the AD Carry
            for Counter Logic Gaming of the North American League of Legends
            Championship Series. Stixxay started his League of Legends
            professional career as the starting ADC for CLG's Challenger NA team
            CLG Black and substitute ADC for Misfits. In the 2015 Spring
            Challenger Series, CLG Black and Stixxay finished 2-8. In November
            2015 he was elevated to the main team, replacing Peter "Doublelift"
            Peng at AD Carry..
            <br />
            <small>from alchetron.com/Stixxay</small>
          </p>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>

      <div className="row m-5">
        <h2>Recent Weeks</h2>
        <div className="row prev-matches ">
          <div className="col-md-4 p-5 ">
            <a href="" className="text-white">
              <img src="img/lcs-header.jpg" className="w-100" />
              <h3>What's happening during Week 1</h3>
            </a>
          </div>

          <div className="col-md-4 p-5">
            <a href="" className="text-white">
              <img src="img/lcs-header.jpg" className="w-100" />
              <h3>What to Look Forward to in Week 2</h3>
            </a>
          </div>

          <div className="col-md-4 p-5">
            <a href="" className="text-white">
              <img src="img/tsm-bkg.jpg" className="w-100" />
              <h3>Can TSM keep Reigning at the Top?</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
