import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import slide1 from '../../assets/carousel/cheese-storage.jpg';
import slide2 from '../../assets/carousel/cheese-types.jpg';
import slide3 from '../../assets/carousel/cheese-board-with-wine.jpeg';

// Array of carousel items
const items = [
    {
        src: slide1,
        altText: 'Cheese Storage',
        captionHeader: 'How our cheese is stored',
        caption: 'Our cheese is stored in a temperature-controlled environment to ensure freshness and quality.'
    },
    {
        src: slide2,
        altText: 'Types of Cheese',
        captionHeader: 'Whats your favourite cheese?',
        caption: 'We have a wide range of cheeses to suit every taste!'
    },
    {
        src: slide3,
        altText: 'Cheese Board with Wine',
        captionHeader: 'What the best way the end a day?',
        caption: 'That\'s right - cheese and wine!'
    }
];

function HomePageCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    style={{
                        width: '100%',
                        height: '400px',     // Set height for the carousel
                        objectFit: 'cover'    // This crops the image to fit the container
                    }}
                />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.captionHeader}
                    className="custom-carousel-caption"/>
            </CarouselItem>
        );
    });
    

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default HomePageCarousel;
