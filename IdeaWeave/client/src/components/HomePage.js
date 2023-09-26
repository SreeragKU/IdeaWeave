import React, { useState, useEffect } from 'react';
import styles from '../styles/HomePage.module.css'; 

import background from '../assets/HomePage/Background.png';
import tree from '../assets/HomePage/Central_Tree.png';
import flower1 from '../assets/HomePage/Flower_1.png';
import flower2 from '../assets/HomePage/Flower_2.png';
import globe from '../assets/HomePage/Globe_.png';
import fly from '../assets/HomePage/Flying_books.png';
import logo from '../assets/HomePage/Logo.png';
import title from '../assets/HomePage/Title.png';
import sun from '../assets/HomePage/Sun_Rays.png';

function HomePage() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  useEffect(() => {
    function update(cursorPosition) {
      const parallaxElements = document.querySelectorAll(`.${styles.parallax}`);
      parallaxElements.forEach((el) => {
        const speedx = el.dataset.speedx;
        const speedy = el.dataset.speedy;
        const speedz = el.dataset.speedz;
        const isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        const zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;
        el.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px)) perspective(9000px) translateZ(${zValue * speedz}px)`;
      });
    }

    update(0);

    function handleMouseMove(e) {
      setXValue(prevXValue => e.clientX - window.innerWidth / 2);
      setYValue(prevYValue => e.clientY - window.innerHeight / 2);
      update(e.clientX);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xValue, yValue]);

  return (
    <div className={styles.HomePage}> 
      <header>
        <nav>
          <img src={logo} alt="IdeaWeave Logo" className={styles.logo} /> 
          <ul>
            <li>
              <a href="/username">Login</a>
            </li>
            <li>
              <a href="/register">Sign Up</a>
            </li>
            <li className={styles.hamburger}>
              <a href="#">
                <div className={styles.bar}></div> 
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.vignette}></div> 
        <img
          src={background}
          alt="Background Image"
          data-speedx="0.006"
          data-speedy="0.008"
          data-speedz="0"
          className={`${styles.parallax} ${styles.bgImg}`}
        />
        <img
          src={tree}
          alt="Central Tree"
          data-speedx="0.037"
          data-speedy="0.07"
          data-speedz="0"
          className={`${styles.parallax} ${styles.tree}`} 
        />
        <img
          src={flower1}
          alt="Flower 1"
          data-speedx="0.0195"
          data-speedy="0.0305"
          data-speedz="0"
          className={`${styles.parallax} ${styles.flower1}`} 
        />
        <img
          src={flower2}
          alt="Flower 2"
          data-speedx="0.025"
          data-speedy="0.028"
          data-speedz="0"
          className={`${styles.parallax} ${styles.flower2}`} 
        />
        <img
          src={globe}
          alt="Globe"
          data-speedx="0.16"
          data-speedy="0.105"
          data-speedz="0.3"
          className={`${styles.parallax} ${styles.globe}`} 
        />
        <img
          src={title}
          alt="Title"
          data-speedx="0.125"
          data-speedy="0.115"
          data-speedz="0.2"
          className={`${styles.parallax} ${styles.title}`} 
        />
        <img
          src={fly}
          alt="Flying Books"
          data-speedx="0.1"
          data-speedy="0.11"
          data-speedz="0.16"
          className={`${styles.parallax} ${styles.fbooks}`} 
        />
        <img src={sun} alt="Sun Rays" className={styles["sun-rays"]} /> 
      </main>
    </div>
  );
}

export default HomePage;
