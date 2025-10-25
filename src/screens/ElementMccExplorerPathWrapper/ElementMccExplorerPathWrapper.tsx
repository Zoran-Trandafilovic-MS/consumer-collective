import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ElementMccExplorerPathWrapper = (): JSX.Element => {
  const [showContent, setShowContent] = useState(false);

  const segmentationOptions = [
    { id: 1, label: "Generation" },
    { id: 2, label: "Behaviors & Attitudes" },
    { id: 3, label: "Product Usage" },
    { id: 4, label: "Affluence" },
  ];

  useEffect(() => {
    // Fade in content after component mounts
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500); // Start fade-in after globe animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-[1920px] h-[1080px] bg-white"
      data-model-id="394:17902"
    >
      <div className="absolute top-[calc(50.00%_-_509px)] left-[calc(50.00%_-_934px)] w-[1868px] h-[1018px] rounded-[60px] overflow-hidden">
        <img
          className="absolute top-[9167px] left-[-7219px] w-[1868px] h-[1018px]"
          alt="Rectangle"
          src="/img/rectangle-986-2.svg"
        />

        <img
          className="absolute top-0 left-0 w-[1868px] h-[1018px] aspect-[1.78] object-cover"
          alt="Chair grey"
          src="/img/chair-grey-1.svg"
        />

        <img
          className="absolute top-[292px] left-0 w-[1868px] h-[726px] aspect-[1.01] object-cover"
          alt="Image"
          src="/img/image-152-1.png"
        />

        <img
          className="absolute top-[10348px] left-[-6140px] w-[178px] h-[37px]"
          alt="Usa"
          src="/img/usa.svg"
        />

        <img
          className="absolute top-[10686px] left-[-5873px] w-[100px] h-[37px]"
          alt="Brazil"
          src="/img/brazil.svg"
        />

        <img
          className="absolute top-[10547px] left-[-6017px] w-[143px] h-[37px]"
          alt="Brazil"
          src="/img/brazil-4.svg"
        />

        <img
          className="absolute top-[10419px] left-[-6248px] w-[116px] h-[37px]"
          alt="Mexico"
          src="/img/mexico.svg"
        />

        <img
          className="absolute top-[867px] left-[1456px] w-[259px] h-[88px]"
          alt="Canada"
          src="/img/canada-1.svg"
        />

        <Link
          to="/x11u45-mcc-u45-explorer-path"
          aria-label="Go back to previous page"
        >
          <img
            className="absolute top-[436px] left-[1791px] w-[45px] h-[45px] aspect-[1] block"
            alt="Heroicons outline"
            src="/img/heroicons-outline-arrow-left-circle-4.svg"
          />
        </Link>

        <img
          className="absolute top-[492px] left-[1791px] w-[45px] h-[45px] aspect-[1]"
          alt="Heroicons outline"
          src="/img/heroicons-outline-arrow-left-circle-5.svg"
        />

        <img
          className="absolute top-[10330px] left-[calc(50.00%_-_7603px)] w-[769px] h-[824px]"
          alt="Generation"
          src="/img/generation.svg"
        />

        <img
          className="absolute top-[934px] right-8 w-[60px] h-[60px]"
          alt="Ai assistant"
          src="/img/ai-assistant-1.svg"
        />
      </div>

      <div className="absolute top-[74px] left-[1692px] w-[47px] h-6 bg-[url(/img/screenshot-2025-08-18-at-17-49-07-1.png)] bg-cover bg-[50%_50%]" />

      <header className="flex w-[1802px] items-center justify-between absolute top-[60px] left-[60px]">
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <div
            className="relative w-[83px] h-[52px] aspect-[1.62]"
            aria-label="Consumer Collective Logo"
          >
            <div className="relative h-full">
              <img
                className="absolute w-[27.09%] h-[78.60%] top-[10.71%] left-[36.39%]"
                alt=""
                src="/img/fill-1-3.svg"
              />

              <img
                className="absolute w-[49.94%] h-[99.97%] top-0 left-0"
                alt=""
                src="/img/fill-2-3.svg"
              />

              <img
                className="absolute w-[50.06%] h-full top-0 left-[49.94%]"
                alt=""
                src="/img/fill-4-3.svg"
              />
            </div>
          </div>

          <h1 className="relative w-fit [font-family:'Mark_Offc_For_MC-Medium',Helvetica] font-medium text-canvas-colorswhite text-2xl tracking-[0] leading-[normal]">
            Consumer Collective
          </h1>
        </div>

        <nav
          className="inline-flex items-center justify-end gap-4 relative flex-[0_0_auto]"
          aria-label="User navigation"
        >
          <button
            className="flex flex-col w-[50px] h-[50px] items-center justify-center gap-2.5 px-[18px] py-[13px] relative bg-accent-colorsgold-200 rounded-[999px]"
            aria-label="User profile"
            type="button"
          >
            <span className="relative w-fit mt-[-3.00px] mb-[-1.00px] [font-family:'Mark_Offc_For_MC-Bold',Helvetica] font-bold text-[#141413] text-[22px] tracking-[0] leading-[normal]">
              T
            </span>
          </button>

          <button
            className="relative w-8 h-8"
            aria-label="Open menu"
            type="button"
          >
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

      <main className={`flex flex-col w-[769px] items-start gap-11 absolute top-64 left-[calc(50.00%_-_384px)] transition-opacity duration-700 ${
        showContent ? 'opacity-100' : 'opacity-0'
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
            Сhoose a way to segment your audience
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
                className="inline-flex items-center justify-center gap-[18px] px-[30px] py-5 relative flex-[0_0_auto] bg-white rounded-[50px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-colorsorange-400 focus:ring-offset-2 transition-opacity"
                type="button"
                aria-label={`Select ${option.label} segmentation`}
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
                className="inline-flex items-center justify-center gap-[18px] px-[30px] py-5 relative flex-[0_0_auto] bg-white rounded-[50px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent-colorsorange-400 focus:ring-offset-2 transition-opacity"
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

        <div
          className="absolute top-[331px] -left-6 w-[50px] h-[50px]"
          aria-hidden="true"
        >
          <div className="absolute top-[19px] left-[19px] w-3 h-3 bg-accent-colorsorange-400 rounded-[6.25px]" />

          <div className="absolute top-[19px] left-[19px] w-3 h-3 bg-accent-colorsorange-400 rounded-[6.25px]" />

          <div className="absolute top-[19px] left-[19px] w-3 h-3 bg-accent-colorsorange-400 rounded-[6.25px]" />
        </div>
      </main>

      <div className="absolute top-[-212px] left-[550px] w-[771px] h-[183px] flex flex-col gap-[41px]">
        <div className="flex w-[290.24px] h-3.5 relative items-center gap-3">
          <div
            className="relative w-3 h-3 bg-orange-03 rounded-md"
            aria-hidden="true"
          />

          <p className="relative w-fit mt-[-1.00px] font-eyebrow-01 font-[number:var(--eyebrow-01-font-weight)] text-canvas-colorswhite text-[length:var(--eyebrow-01-font-size)] tracking-[var(--eyebrow-01-letter-spacing)] leading-[var(--eyebrow-01-line-height)] whitespace-nowrap [font-style:var(--eyebrow-01-font-style)]">
            MARKET SEGMENTATION
          </p>
        </div>

        <h2 className="w-[769px] h-32 font-display-03 font-[number:var(--display-03-font-weight)] text-canvas-colorswhite text-[length:var(--display-03-font-size)] tracking-[var(--display-03-letter-spacing)] leading-[var(--display-03-line-height)] [font-style:var(--display-03-font-style)]">
          Select the market of interest
        </h2>
      </div>
    </div>
  );
};
