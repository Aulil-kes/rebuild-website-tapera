import { Button } from "@/components/ui/button";

type SubrouteTypes = {
  subroute_name: string;
};

function AtomSubList({ routeArray }: { routeArray: SubrouteTypes[] }) {
  return (
    <ul className="mt-2 space-y-1">
      {routeArray.map(({ subroute_name }, idx: number) => (
        <li key={idx}>
          <Button variant="secondary" size="sm" className="w-10/12 mx-auto">
            {subroute_name}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default AtomSubList;
