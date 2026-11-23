import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-[#080808] text-white min-h-screen flex flex-col items-center justify-center text-center px-5 py-32">
      <div className="space-y-6 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#FFAD32]">
          <span>ERROR 404 // DEAD TIMELINE</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-display font-black text-white stroke-orange">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white">
          THIS FREQUENCY DOES NOT EXIST.
        </h2>

        <p className="text-neutral-400 text-sm font-sans leading-relaxed">
          The page you requested has migrated to a different cultural coordinate or was deleted to make room for better ideas.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFAD32] text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to NoiseCulture Central</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
