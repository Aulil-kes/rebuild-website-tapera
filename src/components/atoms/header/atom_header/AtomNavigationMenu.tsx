import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { headerNavbarItems } from "@/utils/data/data.taperta";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "./list/AtomListItem";

function AtomNavigationMenu({
  classNameMenu,
  classNameUl,
}: {
  classNameMenu?: string;
  classNameUl?: string;
}) {
  const locationPath = useLocation().pathname;
  return (
    <NavigationMenu className={cn(classNameMenu)}>
      <NavigationMenuList className={cn(classNameUl)}>
        {headerNavbarItems.map(
          ({ route_name, route_path, route_items }, idx: number) => (
            <NavigationMenuItem key={idx}>
              {route_path !== null ? (
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link
                    to={route_path ? route_path : ""}
                    className={`${locationPath === route_path && "bg-secondary"}`}
                  >
                    {route_name}
                  </Link>
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger>{route_name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {route_items.map(({ subroute_name }, idx: number) => (
                        <ListItem
                          key={idx}
                          title={subroute_name}
                          href={subroute_name}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default AtomNavigationMenu;
