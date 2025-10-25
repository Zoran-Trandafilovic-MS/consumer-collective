import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ElementMccExplorerPath = (): JSX.Element => {
  const navigate = useNavigate();
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    // Small delay to ensure initial state is rendered before animation starts
    const animationTimer = setTimeout(() => {
      setShowGlobe(true);
    }, 50);

    // Navigate to next screen after animation completes
    const navigationTimer = setTimeout(() => {
      navigate("/x11u45-mcc-u45-explorer-path");
    }, 2500); // 2.5 second delay to allow animation to complete

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div
      className="relative w-[1920px] h-[1080px] bg-white block overflow-hidden"
      data-model-id="394:17372"
    >
      {/* Background container with rounded corners */}
      <div className="absolute top-[calc(50.00%_-_509px)] left-[calc(50.00%_-_934px)] w-[1868px] h-[1018px] rounded-[60px] overflow-hidden bg-[#1a1a1a]">
        {/* Animated globe image */}
        <img
          className={`absolute top-[277px] w-[670px] h-[664px] aspect-[1.01] object-cover transition-all duration-1000 ease-out ${
            showGlobe ? 'opacity-100 left-[860px] scale-100' : 'opacity-0 left-[150%] scale-[2]'
          }`}
          alt="Globe"
          src="/img/image-152.png"
        />
      </div>

      <header className="flex w-[1802px] items-center justify-between absolute top-[60px] left-[60px]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[83px] h-[52px] aspect-[1.62]">
            <div className="relative h-full">
              <img
                className="absolute w-[27.09%] h-[78.60%] top-[10.71%] left-[36.39%]"
                alt="Fill"
                src="/img/fill-1.svg"
              />

              <img
                className="absolute w-[49.94%] h-[99.97%] top-0 left-0"
                alt="Fill"
                src="/img/fill-2-3.svg"
              />

              <img
                className="absolute w-[50.06%] h-full top-0 left-[49.94%]"
                alt="Fill"
                src="/img/fill-4.svg"
              />
            </div>
          </div>

          <div className="relative w-fit [font-family:'Mark_Offc_For_MC-Medium',Helvetica] font-medium text-canvas-colorswhite text-2xl tracking-[0] leading-[normal]">
            Consumer Collective
          </div>
        </div>

        <nav className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-2.5 px-[18px] py-[13px] relative bg-accent-colorsgold-200 rounded-[999px]">
            <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Mark_Offc_For_MC-Bold',Helvetica] font-bold text-[#141413] text-[22px] tracking-[0] leading-[normal]">
              T
            </div>
          </div>

          <button className="relative w-8 h-8" aria-label="Menu">
            <div className="relative h-full">
              <img
                className="absolute top-[calc(50.00%_-_7px)] left-[calc(50.00%_-_13px)] w-[27px] h-[3px]"
                alt=""
                src="/img/vector-stroke-6.svg"
              />

              <img
                className="absolute top-[calc(50.00%_+_5px)] left-[calc(50.00%_-_13px)] w-[27px] h-[3px]"
                alt=""
                src="/img/vector-stroke-7.svg"
              />
            </div>
          </button>
        </nav>
      </header>
    </div>
  );
};
