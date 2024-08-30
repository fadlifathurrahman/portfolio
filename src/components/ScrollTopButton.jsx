import { GrLinkTop } from "react-icons/gr";

export default function ScrollTopButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="bg-slate-400 p-2 opacity-75">
        <a href="#top" className="text-white">
          <GrLinkTop size={20} />
        </a>
      </button>
    </div>
  );
}
