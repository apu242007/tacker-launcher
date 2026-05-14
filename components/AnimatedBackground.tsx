export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30" />

      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-orange-400/20 blur-3xl animate-orb-a"
      />
      <div
        className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-blue-400/15 blur-3xl animate-orb-b"
      />
      <div
        className="absolute -bottom-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-emerald-400/10 blur-3xl animate-orb-c"
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </div>
  );
}
