import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingPersonas = (): JSX.Element => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger fade in immediately (no delay)
    const fadeTimer = setTimeout(() => {
      setShowContent(true);
    }, 0);

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
    <div className="relative w-[1920px] h-[1080px] bg-[#ffffff]">
      {/* Background Images */}
      <div className="absolute top-[calc(50%-509px)] left-[calc(50%-934px)] w-[1868px] h-[1018px] rounded-[60px] overflow-hidden">
        <img
          className="absolute top-0 left-0 w-[1868px] h-[1018px]"
          alt="Rectangle"
          src="/img/rectangle-986.svg"
        />
        <img
          className="absolute top-0 left-0 w-[1868px] h-[1018px] object-cover"
          alt="Chair grey"
          src="/img/chair-grey-1.svg"
        />
      </div>

      {/* Top Navigation */}
      <div className="flex w-[1802px] items-center justify-between absolute top-[60px] left-[60px]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-[83px] h-[52px] aspect-[1.62]">
            <div className="relative h-full">
              <img
                className="absolute w-[27.09%] h-[78.60%] top-[10.71%] left-[36.39%]"
                alt="Fill"
                src="/img/fill-1-1.svg"
              />

              <img
                className="absolute w-[49.94%] h-[99.97%] top-0 left-0"
                alt="Fill"
                src="/img/fill-2-3.svg"
              />

              <img
                className="absolute w-[50.06%] h-full top-0 left-[49.94%]"
                alt="Fill"
                src="/img/fill-4-1.svg"
              />
            </div>
          </div>

          <div className="relative w-fit [font-family:'Mark_Offc_For_MC-Medium',Helvetica] font-medium text-[#141413] text-2xl tracking-[0] leading-[normal]">
            Consumer Collective
          </div>
        </div>

        <div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-2.5 px-[18px] py-[13px] relative bg-accent-colorsgold-200 rounded-[999px]">
            <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Mark_Offc_For_MC-Bold',Helvetica] font-bold text-[#141413] text-[22px] tracking-[0] leading-[normal]">
              T
            </div>
          </div>

          <div className="relative w-8 h-8 invert">
            <div className="relative h-full">
              <img
                className="absolute top-[calc(50.00%_-_7px)] left-[calc(50.00%_-_13px)] w-[27px] h-[3px]"
                alt="Vector stroke"
                src="/img/vector-stroke-6.svg"
              />

              <img
                className="absolute top-[calc(50.00%_+_5px)] left-[calc(50.00%_-_13px)] w-[27px] h-[3px]"
                alt="Vector stroke"
                src="/img/vector-stroke-7.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
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
