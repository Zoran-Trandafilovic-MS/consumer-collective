import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Generation } from "../Generation";
import { SelectedGeneration } from "../SelectedGeneration";

export const ElementMccExplorerPathScreen = (): JSX.Element => {
  const navigate = useNavigate();
  const [showGlobe, setShowGlobe] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [canadaHovered, setCanadaHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);
  const [showGenerationContent, setShowGenerationContent] = useState(false);
  const [showSelectedGeneration, setShowSelectedGeneration] = useState(false);
  const [hideSelectedGeneration, setHideSelectedGeneration] = useState(false);

  const segmentationOptions = [
    { id: 1, label: "Generation" },
    { id: 2, label: "Behaviors & Attitudes" },
    { id: 3, label: "Product Usage" },
    { id: 4, label: "Affluence" },
  ];

  useEffect(() => {
    // Trigger globe animation immediately
    setShowGlobe(true);

    // Trigger country labels fade-in after globe animation
    const timer = setTimeout(() => {
      setShowCountries(true);
    }, 1800); // Start after globe flies in

    return () => clearTimeout(timer);
  }, []);

  const handleCanadaClick = () => {
    console.log("Canada clicked - starting transition");
    setIsTransitioning(true);

    // Show new content after globe animation
    setTimeout(() => {
      setShowNewContent(true);
    }, 1000);

    // No navigation - everything happens on x11
  };

  const handleGenerationClick = () => {
    console.log("Generation clicked - moving content");
    setShowGenerationContent(true);
  };

  const handleMillennialsClick = () => {
    console.log("Millennials clicked - transitioning to SelectedGeneration");
    setShowSelectedGeneration(true);
  };

  const handleSupportCardClick = () => {
    console.log("Support card clicked - navigating to LoadingPersonas");
    setHideSelectedGeneration(true);

    // Navigate to LoadingPersonas after animation completes
    setTimeout(() => {
      navigate("/loading-personas");
    }, 1500);
  };

  return (
    <div
      className="relative w-[1920px] h-[1080px] bg-[#ffffff] overflow-hidden"
      data-model-id="394:17813"
    >
      {/* Chair background - always visible underneath */}
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

      {/* Universe background - fades out */}
      <div className={`absolute top-[calc(50.00%_-_509px)] left-[calc(50.00%_-_934px)] w-[1868px] h-[1018px] rounded-[60px] overflow-hidden transition-opacity ${showGenerationContent ? 'opacity-0 duration-[1500ms]' : 'opacity-100'}`}>
        <img
          className="absolute top-[9167px] left-[-2825px] w-[1868px] h-[1018px]"
          alt="Rectangle"
          src="/img/rectangle-986.svg"
        />

        <img
          className="absolute top-0 left-0 w-[1868px] h-[1018px] aspect-[1.78] object-cover"
          alt="Chair grey"
          src="/img/chair-grey.svg"
        />

        {/* Small globe - flies in on mount, transforms on transition */}
        <img
          className={`absolute aspect-[1.01] object-contain pointer-events-none ${
            showGenerationContent
              ? 'opacity-100 left-[2500px] top-[1500px] w-[1868px] h-[726px] rotate-[12.35deg] scale-[5.44]'
              : isTransitioning
              ? 'opacity-0 left-[750px] top-[1900px] w-[1868px] h-[726px] rotate-[12.35deg] scale-[5.44]'
              : showGlobe
              ? 'opacity-100 left-[860px] top-[277px] w-[670px] h-[664px]'
              : 'opacity-0 left-[150%] top-[277px] w-[670px] h-[664px] scale-[2]'
          }`}
          style={{
            transition: isTransitioning
              ? 'left 1500ms ease-in-out, top 1500ms ease-in-out, width 1500ms ease-in-out, height 1500ms ease-in-out, transform 1500ms ease-in-out, opacity 500ms ease-in-out 1000ms'
              : 'all 1500ms ease-in-out'
          }}
          alt="Globe small"
          src="/img/image-152.png"
        />

        {/* Large globe - fades in during transition */}
        <img
          className={`absolute w-[1868px] h-[726px] aspect-[1.01] object-cover transition-all ease-in-out pointer-events-none ${
            showGenerationContent ? 'opacity-0 left-[2500px] top-[1500px] duration-[1500ms]' : isTransitioning ? 'opacity-100 left-0 top-[292px] duration-[500ms] delay-[1000ms]' : 'opacity-0 left-0 top-[292px] duration-[500ms] delay-[1000ms]'
          }`}
          alt="Globe large"
          src="/img/image-152-1.png"
        />

        <div
          className={`absolute top-[408px] transition-all ease-in-out origin-center flex items-center gap-3 ${
            isTransitioning ? 'opacity-0 left-[1076px] duration-500' : !showCountries ? 'opacity-0 scale-90 left-[1076px] delay-[1000ms] duration-500' : canadaHovered ? 'opacity-100 scale-[0.7] left-[1050px] duration-500' : 'opacity-100 scale-100 left-[1076px] duration-500'
          }`}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.96" cy="24.96" r="14.4" fill="white"/>
            <circle cx="24.96" cy="24.96" r="24" stroke="white" strokeWidth="1.92"/>
          </svg>
          <span className="font-['Poppins'] font-semibold text-[26px] leading-[100%] text-white whitespace-nowrap">
            United States
          </span>
        </div>

        <div
          className={`absolute top-[727px] transition-all ease-in-out origin-center flex items-center gap-3 ${
            isTransitioning ? 'opacity-0 left-[1337px] duration-500' : !showCountries ? 'opacity-0 scale-90 left-[1337px] delay-[1000ms] duration-500' : canadaHovered ? 'opacity-100 scale-[0.7] left-[1322px] duration-500' : 'opacity-100 scale-100 left-[1337px] duration-500'
          }`}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.96" cy="24.96" r="14.4" fill="white"/>
            <circle cx="24.96" cy="24.96" r="24" stroke="white" strokeWidth="1.92"/>
          </svg>
          <span className="font-['Poppins'] font-semibold text-[26px] leading-[100%] text-white whitespace-nowrap">
            Brazil
          </span>
        </div>

        <div
          className={`absolute top-[599px] transition-all ease-in-out origin-center flex items-center gap-3 ${
            isTransitioning ? 'opacity-0 left-[1198px] duration-500' : !showCountries ? 'opacity-0 scale-90 left-[1198px] delay-[1000ms] duration-500' : canadaHovered ? 'opacity-100 scale-[0.7] left-[1173px] duration-500' : 'opacity-100 scale-100 left-[1198px] duration-500'
          }`}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.96" cy="24.96" r="14.4" fill="white"/>
            <circle cx="24.96" cy="24.96" r="24" stroke="white" strokeWidth="1.92"/>
          </svg>
          <span className="font-['Poppins'] font-semibold text-[26px] leading-[100%] text-white whitespace-nowrap">
            Colombia
          </span>
        </div>

        <div
          className={`absolute top-[478px] transition-all ease-in-out origin-center flex items-center gap-3 ${
            isTransitioning ? 'opacity-0 left-[996px] duration-500' : !showCountries ? 'opacity-0 scale-90 left-[996px] delay-[1000ms] duration-500' : canadaHovered ? 'opacity-100 scale-[0.7] left-[1005px] duration-500' : 'opacity-100 scale-100 left-[996px] duration-500'
          }`}
        >
          <span className="font-['Poppins'] font-semibold text-[26px] leading-[100%] text-white whitespace-nowrap">
            Mexico
          </span>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24.96" cy="24.96" r="14.4" fill="white"/>
            <circle cx="24.96" cy="24.96" r="24" stroke="white" strokeWidth="1.92"/>
          </svg>
        </div>

        <div
          className={`absolute cursor-pointer transition-all ease-in-out flex items-center gap-3 ${
            isTransitioning ? 'opacity-100 top-[867px] left-[1456px] duration-[1350ms]' : !showCountries ? 'opacity-0 scale-90 top-[345px] left-[1124px] delay-[1000ms] duration-500' : canadaHovered ? 'opacity-100 scale-[1.3] top-[344px] left-[1139px] duration-500' : 'opacity-100 scale-100 top-[345px] left-[1124px] duration-500'
          }`}
          onMouseEnter={() => setCanadaHovered(true)}
          onMouseLeave={() => setCanadaHovered(false)}
          onClick={handleCanadaClick}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r={canadaHovered || isTransitioning ? "8" : "14.4"}
              className="transition-all duration-700 ease-in-out"
              fill={canadaHovered || isTransitioning ? '#F38B00' : 'white'}
            />
            <circle
              cx="25"
              cy="25"
              r="24"
              className="transition-all duration-700 ease-in-out"
              stroke={canadaHovered || isTransitioning ? '#F38B00' : 'white'}
              strokeWidth="1.92"
            />
          </svg>
          <span
            className={`font-['Poppins'] font-semibold text-[26px] leading-[100%] transition-colors duration-700 whitespace-nowrap ${
              canadaHovered || isTransitioning ? 'text-[#F38B00]' : 'text-white'
            }`}
          >
            Canada
          </span>
        </div>

        <img
          className="absolute top-[436px] left-[1791px] w-[45px] h-[45px] aspect-[1]"
          alt="Heroicons outline"
          src="/img/heroicons-outline-arrow-left-circle-4.svg"
        />

        <img
          className="absolute top-[492px] left-[1791px] w-[45px] h-[45px] aspect-[1]"
          alt="Heroicons outline"
          src="/img/heroicons-outline-arrow-left-circle-5.svg"
        />

        <img
          className={`absolute top-[109px] left-[550px] w-[769px] h-[183px] transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          alt="Market SELECT"
          src="/img/market-select-1.png"
        />

        <img
          className={`absolute top-[333px] left-[1281px] w-[50px] h-[50px] transition-opacity ease-in-out ${
            isTransitioning ? 'opacity-0 duration-500' : !showCountries ? 'opacity-0 delay-[1000ms] duration-500' : 'opacity-100 duration-500'
          }`}
          alt="Component"
          src="/img/component-1-1.svg"
        />

        <img
          className="absolute top-[934px] right-8 w-[60px] h-[60px]"
          alt="Ai assistant"
          src="/img/ai-assistant.svg"
        />
      </div>

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

          <div className={`relative w-fit [font-family:'Mark_Offc_For_MC-Medium',Helvetica] font-medium text-2xl tracking-[0] leading-[normal] transition-colors duration-[1500ms] ${
            showGenerationContent ? 'text-[#141413]' : 'text-canvas-colorswhite'
          }`}>
            Consumer Collective
          </div>
        </div>

        <div className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-2.5 px-[18px] py-[13px] relative bg-accent-colorsgold-200 rounded-[999px]">
            <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Mark_Offc_For_MC-Bold',Helvetica] font-bold text-[#141413] text-[22px] tracking-[0] leading-[normal]">
              T
            </div>
          </div>

          <div className={`relative w-8 h-8 transition-all duration-[1500ms] ${
            showGenerationContent ? 'invert' : ''
          }`}>
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

      {/* New content - Audience selection (fades in after transition) */}
      <main className={`flex flex-col w-[769px] items-start gap-11 absolute left-[calc(50.00%_-_384px)] transition-all ${
        showGenerationContent ? 'top-[-1200px] opacity-0 duration-[1500ms]' : showNewContent ? 'top-64 opacity-100 duration-700' : 'top-64 opacity-0 pointer-events-none duration-700'
      }`}>
        <div className="relative w-[771px] h-[183px] mr-[-2.00px]">
          <div className="inline-flex items-center gap-3 absolute top-0 left-0">
            <div
              className="relative w-3 h-3 bg-orange-03 rounded-md"
              aria-hidden="true"
            />

            <p className="relative w-fit mt-[-1.00px] font-eyebrow-01 font-[number:var(--eyebrow-01-font-weight)] text-canvas-colorswhite text-[length:var(--eyebrow-01-font-size)] tracking-[var(--eyebrow-01-letter-spacing)] leading-[var(--eyebrow-01-line-height)] whitespace-nowrap [font-style:var(--eyebrow-01-font-style)]">
              EXPLORATION PATHWAY&nbsp;&nbsp;/&nbsp;&nbsp;AUDIENCE
            </p>
          </div>

          <h2 className="absolute top-[55px] left-0 w-[769px] font-display-03 font-[number:var(--display-03-font-weight)] text-canvas-colorswhite text-[length:var(--display-03-font-size)] tracking-[var(--display-03-letter-spacing)] leading-[var(--display-03-line-height)] [font-style:var(--display-03-font-style)]">
            Choose a way to segment your audience
          </h2>
        </div>

        <p className="relative self-stretch font-body-01 font-[number:var(--body-01-font-weight)] text-canvas-colorswhite text-[length:var(--body-01-font-size)] tracking-[var(--body-01-letter-spacing)] leading-[var(--body-01-line-height)] [font-style:var(--body-01-font-style)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div
          className="flex flex-col w-[462px] items-start gap-3 relative flex-[0_0_auto]"
          role="group"
          aria-label="Audience segmentation options"
        >
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {segmentationOptions.slice(0, 2).map((option) => (
              <button
                key={option.id}
                className="inline-flex items-center justify-center gap-[18px] px-[30px] py-5 relative flex-[0_0_auto] bg-white hover:bg-[#F38B00] rounded-[50px] outline-none transition-all duration-300"
                type="button"
                aria-label={`Select ${option.label} segmentation`}
                onClick={option.label === "Generation" ? handleGenerationClick : undefined}
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-canvas-colorsmc-black text-xl tracking-[0] leading-[normal]">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            {segmentationOptions.slice(2, 4).map((option) => (
              <button
                key={option.id}
                className="inline-flex items-center justify-center gap-[18px] px-[30px] py-5 relative flex-[0_0_auto] bg-white hover:bg-[#F38B00] rounded-[50px] outline-none transition-all duration-300"
                type="button"
                aria-label={`Select ${option.label} segmentation`}
              >
                <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-canvas-colorsmc-black text-xl tracking-[0] leading-[normal]">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Generation content - moves to center when Generation is clicked, flies out top when Millennials clicked */}
      <div className={`absolute left-[calc(50.00%_-_384px)] transition-all duration-[1500ms] ease-out ${
        showSelectedGeneration
          ? 'top-[-1200px] opacity-0 pointer-events-none'
          : showGenerationContent
          ? 'top-[calc(50.00%_-_412px)] opacity-100'
          : 'top-[1200px] opacity-0 pointer-events-none'
      }`}>
        <Generation onMillennialsClick={handleMillennialsClick} />
      </div>

      {/* SelectedGeneration content - flies in from bottom when Millennials is clicked, flies out top when card clicked */}
      <div className={`absolute left-[calc(50.00%_-_384px)] transition-all duration-[1500ms] ease-out ${
        hideSelectedGeneration
          ? 'top-[-1200px] opacity-0 pointer-events-none'
          : showSelectedGeneration
          ? 'top-[calc(50.00%_-_412px)] opacity-100'
          : 'top-[1200px] opacity-0 pointer-events-none'
      }`}>
        <SelectedGeneration onCardClick={handleSupportCardClick} />
      </div>
    </div>
  );
};
