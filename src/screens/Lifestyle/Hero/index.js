import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
// import History from "./History";
import Item from "./Item";
import ScrollParallax from "../../../components/ScrollParallax";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "../../../Store/BlogActions";


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  
  const { Blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs("hello"));
  }, [dispatch]);


  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("hero", styles.title)}>Fit4Sure Weight Loss Guide</h2>
        <div className={styles.info}>
        Explore insightful articles and expert tips on our Fit4Sure blog section. From weight loss strategies to nutrition advice and workout routines, we've got you covered. Stay informed, motivated, and inspired on your fitness journey with our engaging blog content. Start reading now and take the next step towards a healthier lifestyle! 

        </div>
        {/* <History /> */}
        <div className={styles.nav}>
          {Blogs.length>0&&Blogs.map((x, index) => (
            <button
              className={cn(styles.btn, {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {x.title}
            </button>
          ))}
        </div>
        <div className={styles.list}>
          {Blogs.length>0&&Blogs[activeIndex].items.map((x, index) => (
            <ScrollParallax className={styles.box} key={index}>
              <Item item={x} className={styles.item} />
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
