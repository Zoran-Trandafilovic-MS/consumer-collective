import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DivWrapper = (): JSX.Element => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCanadaClick = () => {
    console.log("Canada button clicked - starting transition");
    setIsTransitioning(true);
    // Navigate after animation completes
    setTimeout(() => {
      console.log("Navigating to x13");
      navigate("/x13u45-mcc-u45-explorer-path");
    }, 1500); // Wait for globe animation to complete (1000ms) + fade (500ms)
  };

  return (
    <div
      className="relative w-[1920px] h-[1080px] bg-white"
      data-model-id="394:17854"
    >
      <div className="absolute top-[calc(50.00%_-_509px)] left-[calc(50.00%_-_934px)] w-[1868px] h-[1018px] rounded-[60px] overflow-hidden">
        <img
          className="absolute top-[9167px] left-[-5022px] w-[1868px] h-[1018px]"
          alt="Rectangle"
          src="/img/image.svg"
        />

        <img
          className="absolute top-0 left-0 w-[1868px] h-[1018px] aspect-[1.78] object-cover"
          alt="Chair grey"
          src="/img/chair-grey-2.svg"
        />

        <button
          className="absolute top-[436px] left-[1791px] w-[45px] h-[45px] aspect-[1] cursor-pointer"
          aria-label="Previous"
        >
          <img
            className="w-full h-full"
            alt="Heroicons outline"
            src="/img/heroicons-outline-arrow-left-circle-4.svg"
          />
        </button>

        <button
          className="absolute top-[492px] left-[1791px] w-[45px] h-[45px] aspect-[1] cursor-pointer"
          aria-label="Next"
        >
          <img
            className="w-full h-full"
            alt="Heroicons outline"
            src="/img/heroicons-outline-arrow-left-circle-5.svg"
          />
        </button>

        {/* Small globe - fades out and transforms during transition */}
        <img
          className={`absolute aspect-[1.01] object-cover transition-all duration-1000 ease-in-out pointer-events-none ${
            isTransitioning
              ? 'opacity-0 left-0 top-[292px] w-[1868px] h-[726px]'
              : 'opacity-100 left-[839px] top-[270px] w-[712px] h-[706px]'
          }`}
          alt="Globe small"
          src="/img/image-152-2.png"
        />

        {/* Large globe - fades in during transition */}
        <img
          className={`absolute left-0 top-[292px] w-[1868px] h-[726px] aspect-[1.01] object-cover transition-opacity duration-1000 ease-in-out pointer-events-none ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          alt="Globe large"
          src="/img/image-152-1.png"
        />

        <button
          className={`absolute top-[419px] left-[1079px] w-[178px] h-[37px] cursor-pointer transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-label="Select United States"
        >
          <img className="w-full h-full" alt="Usa" src="/img/usa-1.svg" />
        </button>

        <button
          className={`absolute top-[757px] left-[1346px] w-[100px] h-[37px] cursor-pointer transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-label="Select Brazil"
        >
          <img className="w-full h-full" alt="Brazil" src="/img/brazil-2.svg" />
        </button>

        <button
          className={`absolute top-[617px] left-[1202px] w-[143px] h-[37px] cursor-pointer transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-label="Select Colombia"
        >
          <img className="w-full h-full" alt="Brazil" src="/img/brazil-3.svg" />
        </button>

        <button
          className={`absolute top-[490px] left-[971px] w-[116px] h-[37px] cursor-pointer transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          aria-label="Select Mexico"
        >
          <img className="w-full h-full" alt="Mexico" src="/img/mexico-1.svg" />
        </button>

        <button
          onClick={handleCanadaClick}
          onMouseDown={() => console.log("Mouse down on Canada")}
          onMouseUp={() => console.log("Mouse up on Canada")}
          className="absolute top-[334px] left-[1111px] w-52 h-[70px] cursor-pointer bg-red-500 bg-opacity-20 border-2 border-red-500 p-0 z-50"
        >
          <img className="w-full h-full" alt="Canada" src="/img/canada-2.svg" />
        </button>

        <img
          className={`absolute top-[109px] left-[550px] w-[769px] h-[183px] transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          alt="Market SELECT"
          src="/img/market-select-1.png"
        />

        <img
          className="absolute top-[10293px] left-[calc(50.00%_-_5406px)] w-[769px] h-[475px]"
          alt="Audience"
          src="/img/audience.svg"
        />

        <img
          className="absolute top-[333px] left-[1311px] w-[50px] h-[50px]"
          alt="Component"
          src="/img/component-1-1.svg"
        />

        <button
          className="absolute top-[934px] right-8 w-[60px] h-[60px] cursor-pointer"
          aria-label="AI Assistant"
        >
          <img
            className="w-full h-full"
            alt="Ai assistant"
            src="/img/ai-assistant-2.svg"
          />
        </button>
      </div>

      <header className="flex w-[1802px] items-center justify-between absolute top-[60px] left-[60px]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div
            className="relative w-[83px] h-[52px] aspect-[1.62]"
            role="img"
            aria-label="Consumer Collective Logo"
          >
            <div className="relative h-full">
              <img
                className="absolute w-[27.09%] h-[78.60%] top-[10.71%] left-[36.39%]"
                alt="Fill"
                src="/img/fill-1-3.svg"
              />

              <img
                className="absolute w-[49.94%] h-[99.97%] top-0 left-0"
                alt="Fill"
                src="/img/fill-2-3.svg"
              />

              <img
                className="absolute w-[50.06%] h-full top-0 left-[49.94%]"
                alt="Fill"
                src="/img/fill-4-3.svg"
              />
            </div>
          </div>

          <h1 className="relative w-fit [font-family:'Mark_Offc_For_MC-Medium',Helvetica] font-medium text-canvas-colorswhite text-2xl tracking-[0] leading-[normal]">
            Consumer Collective
          </h1>
        </div>

        <nav className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]">
          <button
            className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-2.5 px-[18px] py-[13px] relative bg-accent-colorsgold-200 rounded-[999px] cursor-pointer"
            aria-label="User profile"
          >
            <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Mark_Offc_For_MC-Bold',Helvetica] font-bold text-[#141413] text-[22px] tracking-[0] leading-[normal]">
              T
            </span>
          </button>

          <button className="relative w-8 h-8 cursor-pointer" aria-label="Menu">
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
          </button>
        </nav>
      </header>
    </div>
  );
};
