import React, { useEffect } from "react";

import "./flexboxgrid.min.css";
import "./layout.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

// import loadable from "@loadable/component";

const Layout = ({ activePage, children }) => {
  useEffect(() => {
    getAnimatedElements();
    getLazyLoadedImages();
  });

  const getAnimatedElements = () => {
    let $elements = document.querySelectorAll("[data-settings]");
    if ($elements.length > 0) {
      window.addEventListener(
        "scroll",
        throttle(checkForAnimations, 500, $elements)
      );
    } else {
      setTimeout(getAnimatedElements, 1000);
    }
  };

  const getLazyLoadedImages = () => {
    let $elements = document.querySelectorAll("[bg-src]");
    if ($elements.length > 0) {
      window.addEventListener(
        "scroll",
        throttle(checkForLazyImages, 100, $elements)
      );
    } else {
      setTimeout(getLazyLoadedImages, 1000);
    }
  };

  const checkForLazyImages = (elements) => {
    let threshold = 200;
    for (const el of elements) {
      if (isScrolledIntoView(el, threshold) === true) {
        if (el.hasAttribute("bg-src")) {
          let src = el.getAttribute("bg-src");
          el.style.backgroundImage = `url("${src}")`;
          el.style.opacity = 1;
        }
      }
    }
  };

  const checkForAnimations = (elements) => {
    let threshold = 200;
    for (const el of elements) {
      if (isScrolledIntoView(el, threshold) === true) {
        if (
          el.classList.contains("animated") &&
          !el.classList.contains("already-animated")
        ) {
          let settings = JSON.parse(el.dataset.settings);
          if (settings.animation !== null) {
            el.classList.add(settings.animation);
          }
          el.classList.add("already-animated");
        }
      }
    }
  };

  const throttle = (fn, delay, parameter) => {
    let last, timer;
    return function () {
      var now = +new Date();
      if (last && now < last + delay) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn(parameter);
        }, delay);
      } else {
        last = now;
        fn(parameter);
      }
    };
  };

  const isScrolledIntoView = (el, threshold) => {
    threshold = 0;
    if (el !== null) {
      const top = el.getBoundingClientRect().top;
      return top + threshold >= 0 && top - threshold <= window.innerHeight;
    }
    return false;
  };

  // const Background = loadable(() =>
  //   import(/* webpackChunkName: "Background" */ "../components/Background")
  // );

  return (
    <>
      <a href="#content" className="sr-only skipto">
        Skip to main content
      </a>
      <Header />
      <main className="wrapper" id="content">
        {children}
        {/* <Background /> */}
      </main>
      <Footer activePage={activePage} />
    </>
  );
};

export default Layout;