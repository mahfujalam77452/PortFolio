import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{ borderColor: "#1E2D45" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display font-bold text-lg" style={{ color: "#4FFFB0" }}>
          MA<span style={{ color: "#E8F0FE" }}>.</span>
        </span>
        <p className="text-xs font-body" style={{ color: "#8899AA" }}>
          © {new Date().getFullYear()} {personal.name} · Built with React & Tailwind CSS
        </p>
        <div className="flex items-center gap-1 text-xs font-mono" style={{ color: "#1E2D45" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#4FFFB0", boxShadow: "0 0 6px #4FFFB0" }}
          />
          <span style={{ color: "#8899AA" }}>Sylhet, BD</span>
        </div>
      </div>
    </footer>
  );
}
