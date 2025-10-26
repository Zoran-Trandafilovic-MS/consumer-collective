import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingPersonas = (): JSX.Element => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fade in the loading text
    const fadeTimer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Navigate to PersonaCarousel after 2 seconds
    const navTimer = setTimeout(() => {
      navigate("/persona-carousel");
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="relative w-[1920px] h-[1080px] bg-[#141413]">
      <div
        className={`absolute bottom-[100px] left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/img/loading-personas.svg"
          alt="Loading personas"
          className="w-[173px] h-[18px]"
        />
      </div>
    </div>
  );
};
