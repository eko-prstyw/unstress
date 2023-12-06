import React, { useState, useEffect } from "react";
import Image from "next/image";

import vector1 from "@/images/audio-img/vector-1.svg";
import vector2 from "@/images/audio-img/vector-2.svg";
import vector3 from "@/images/audio-img/vector-3.svg";

const images = [vector1, vector2, vector3];

export default function ImageSwapper() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <Image src={images[currentIndex]} alt={`Vector ${currentIndex + 1}`} />
    </div>
  );
}
