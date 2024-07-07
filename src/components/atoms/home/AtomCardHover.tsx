import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Link } from "react-router-dom";

export function AtomCardHover({
  link,
  description,
  slug,
}: {
  link: string;
  description: string;
  slug: string;
}) {
  return (
    <Link to={link}>
      <div className="border hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative maxh-h-[27rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text={slug} />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          {description}
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {slug}
        </p>
      </div>
    </Link>
  );
}
