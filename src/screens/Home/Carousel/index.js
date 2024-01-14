import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./Carousel.module.sass";

const items = [
    {
        url: "/article",
        title: "Stories From Our Community: Kohaku & Moyo Shiro",
        content:
            "Track your workouts, get better results, and be the best version of you. Less thinking",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        url: "/article",
        title: "Stories From Our Community: Kohaku & Moyo Shiro",
        content:
            "Track your workouts, get better results, and be the best version of you. Less thinking",
        image: "url('/images/content/history-pic.png')",
        status: "green",
        statusContent: "yoga",
    },
    {
        url: "/article",
        title: "Stories From Our Community: Kohaku & Moyo Shiro",
        content:
            "Track your workouts, get better results, and be the best version of you. Less thinking",
        image: "url('/images/content/history-pic.png')",
        status: "pink",
        statusContent: "new",
    },
    {
        url: "/article",
        title: "Stories From Our Community: Kohaku & Moyo Shiro",
        content:
            "Track your workouts, get better results, and be the best version of you. Less thinking",
        image: "url('/images/content/history-pic.png')",
        status: "green",
        statusContent: "yoga",
    },
];

const Carousel = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    };

    return (
        <div className={cn("container", styles.container)} id='carousal'>
        <div className={styles.heading1}>Check out our features</div>
        <div className={styles.heading2}>Check out the different services offered</div>
        <div className={styles.history}>
        {/* <div className={styles.backgroundImage}>
                <img src="/images/CarousalBg.svg" alt="carousal-bg" className={styles.carousalBg}></img>
                <img src="/images/CarousalsmallBg.svg" alt="carousal-bg" className={styles.carousalsmallBg1}></img>
                <img src="/images/CarousalsmallBg.svg" alt="carousal-bg" className={styles.carousalsmallBg2}></img>
        </div> */}
            <div className={styles.wrap}>
                <Slider className="history-slider" {...settings}>
                    {items.map((x, index) => (
                        <div className={styles.slide} key={index}>
                            <div className={cn("history-item", styles.item)}>
                                <div
                                    className={styles.preview}
                                    style={{ backgroundImage: x.image }}
                                ></div>
                                <div className={styles.details}>
                                    <div
                                        className={cn(
                                            {
                                                "status-pink":
                                                    x.status === "pink",
                                            },
                                            {
                                                "status-green":
                                                    x.status === "green",
                                            },
                                            styles.status
                                        )}
                                    >
                                        {x.statusContent}
                                    </div>
                                    <div className={styles.title}>
                                        {x.title}
                                    </div>
                                    <div className={styles.content}>
                                        {x.content}
                                    </div>
                                </div>
                                <div className={styles.position}>
                                    {x.position}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </div>
    );
};

export default Carousel;
