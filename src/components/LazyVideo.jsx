import { useRef, useState, useEffect } from "react";

export default function LazyVideo({ src }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    });

    obs.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className="w-full flex justify-center items-center my-4">
      {visible && (
        <video
          src={src}
          className="w-full max-w-xl rounded-lg"
          loop
          muted
          autoPlay
          preload="none"
          playsInline
        />
      )}
    </div>
  );
}
