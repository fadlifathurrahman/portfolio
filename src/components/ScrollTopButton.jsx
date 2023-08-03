import { useRef } from "react";
import { GrLinkTop } from "react-icons/gr";

export default function ScrollTopButton() {
  const scrollTopCount = useRef(0);

  const countingScrollTop = () => {
    scrollTopCount.current++;
    console.log(scrollTopCount.current);
  };

  return (
    <button
      id="back-to-top-button"
      className="sticky bottom-6 left-6 bg-slate-400 p-2 opacity-75"
      onClick={() => countingScrollTop()}
    >
      <a href="#top" className="text-white">
        <GrLinkTop size={20} />
      </a>
    </button>
  );
}
