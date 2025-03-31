import React, { useRef, useState, useEffect } from "react";
import styles from "./MyCarousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MyCarousel = ({ items, headline }) => {
  const boxRef = useRef(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const carouselItems = items;

  useEffect(() => {
    if (boxRef.current) {
      const box = boxRef.current;
      const updateMaxScrollWidth = () => {
        setMaxScrollWidth(
          box.scrollWidth - box.clientWidth / 2 - box.offsetWidth / 2
        );
      };

      updateMaxScrollWidth();
      window.addEventListener("resize", updateMaxScrollWidth);

      return () => {
        window.removeEventListener("resize", updateMaxScrollWidth);
      };
    }
  }, [carouselItems]);

  const handleScroll = () => {
    if (boxRef.current) {
      const box = boxRef.current;
      setIsPrevDisabled(box.scrollLeft < 10);
      setIsNextDisabled(box.scrollLeft > maxScrollWidth - 10);
    }
  };

  const scrollTo = (direction) => {
    if (boxRef.current) {
      const box = boxRef.current;
      const x =
        direction === "next"
          ? box.offsetWidth / 2 + box.scrollLeft - 10
          : box.offsetWidth / 2 - box.scrollLeft - 10;

      box.scrollTo({
        left: direction === "next" ? x : -x,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e) => {
    const box = boxRef.current;
    box.sx = box.scrollLeft;
    box.mx = e.pageX - box.offsetLeft;
  };

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (box.mx) {
      const mx2 = e.pageX - box.offsetLeft;
      box.scrollLeft = box.sx + box.mx - mx2;
    }
  };

  const handleMouseUp = () => {
    const box = boxRef.current;
    if (box) box.mx = 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.hs__wrapper}>
        <div className={styles.hs__header}>
          <h2 className={styles.hs__headline}>{headline || "Headline"}</h2>
          <div className={styles.hs__arrows}>
            <button
              className={`${styles.arrow} ${
                isPrevDisabled ? styles.disabled : ""
              }`}
              onClick={() => scrollTo("prev")}
              disabled={isPrevDisabled}
              aria-label="Previous items"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className={`${styles.arrow} ${
                isNextDisabled ? styles.disabled : ""
              }`}
              onClick={() => scrollTo("next")}
              disabled={isNextDisabled}
              aria-label="Next items"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <ul
          className={styles.hs}
          ref={boxRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {carouselItems.map((item) => (
            <li key={item.id} className={styles.hs__item}>
              <div className={styles.hs__item__image__wrapper}>
                <img
                  className={styles.hs__item__image}
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.hs__item__description}>
                <span className={styles.hs__item__title}>{item.title}</span>
                <span className={styles.hs__item__subtitle}>
                  {item.subtitle}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyCarousel;
