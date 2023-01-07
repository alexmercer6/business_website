import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Blurb } from './LandingPage';

type Props = {
  items: string[];
};

const FadeInOutList: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeInOut({
        opacity: 0,
      });
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % items.length);
        setFadeInOut({
          opacity: 1,
        });
      }, 1000);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <animated.div style={fadeInOut}>
        <Blurb>
            {items[currentIndex]}
        </Blurb>
    </animated.div>
  );
};

export default FadeInOutList;
