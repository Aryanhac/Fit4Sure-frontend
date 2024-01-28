import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero} id='hero'>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>
                        Train smarter. get stronger
                    </div>
                    <h1 className={cn("h1", styles.title)}>
                        Achieve Your Dream Fitness Goals Affordably & Effectively With Fit4Sure!
                    </h1>
                    <div className={styles.text}>
                        With budget-friendly pricing, our online fitness coaching matches you to your own personal trainer who designs a customized workout plan tailored to your body, goals, and lifestyle needs.
                    </div>
                    <div className={styles.btns}>
                        <Link
                            className={cn("button", styles.button)}
                            to='https://wa.me/9897446147?text="Hello Are you from Fit4Sure?"'
                        >
                            WhatsApp Us
                        </Link>
                        <Link
                            className={cn("button-stroke", styles.button)}
                            onClick={() => window.location.replace("/#consultancy")}
                        >
                            Get Consultancy
                        </Link>
                    </div>
                </div>
                <ScrollButton
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/watch@2x.png 2x"
                            srcSetDark="/images/content/watch-dark@2x.png 2x"
                            src="/images/content/watch.png"
                            srcDark="/images/content/watch-dark.png"
                            alt="Watch"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball@2x.png 2x"
                            src="/images/content/ball.png"
                            alt="Ball"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/bottle@2x.png 2x"
                            src="/images/content/bottle.png"
                            alt="Bottle"
                        />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball-black@2x.png 2x"
                            src="/images/content/ball-black.png"
                            alt="Ball black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
