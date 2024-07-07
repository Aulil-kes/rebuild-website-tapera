import { cn } from "@/lib/utils";

function AtomCircleAnimation({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute animate-first size-36 z-10 rounded-full bg-violet-600 blur-md ",
        className,
      )}
    />
  );
}

export default AtomCircleAnimation;
