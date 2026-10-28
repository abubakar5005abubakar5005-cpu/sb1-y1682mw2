export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-royal-gold/50 bg-[radial-gradient(circle_at_top,#F4E8C1_0%,#D4AF37_40%,#7B5500_100%)] shadow-glow">
        <div className="absolute inset-2 rounded-full border border-royal-burgundy/50" />
        <div className="relative text-lg font-black text-royal-burgundy">♛</div>
      </div>
      <div>
        <div className="font-display text-lg tracking-[0.2em] text-royal-goldLight">ROYALS</div>
        <div className="-mt-1 font-display text-[0.64rem] tracking-[0.42em] text-royal-muted">KINGDOM</div>
      </div>
    </div>
  );
}
