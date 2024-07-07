import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AppNotFound() {
  return (
    <main className="flex container h-svh w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="space-y-2">
        <h1 className="text-9xl font-bold tracking-tighter">404</h1>
        <p className="text-md text-gray-500">
          Oops, the page you are looking for could not be found.
        </p>
      </div>
      <Link to={"/"}>
        <Button
          className="border-2 dark:border-[1px] md:px-10 border-gray-800 dark:border-gray-50"
          variant={"secondary"}
        >
          Go to Home
        </Button>
      </Link>
      <div className="absolute inset-0 flex justify-center items-center -z-10 blur-2xl">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute h-64 w-64 mt-5 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#gradient1)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="gradient1">
              <stop stopColor="#3b82f6"></stop>
              <stop offset="1" stopColor="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </main>
  );
}
