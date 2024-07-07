import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { headerNavbarItems } from "@/utils/data/data.taperta";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AtomSubList from "./list/AtomSubList";

function AtomDrawer({ className }: { className: string }) {
  const [openDrawer, setOpenDrawer] = useState<{ [key: string]: string }>({});
  const toggleDrawer = (itemKey: string) => {
    setOpenDrawer((prevState: any) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey],
    }));
  };
  return (
    <Drawer>
      <DrawerTrigger className={cn(className)} asChild>
        <Button variant="outline" size={"icon"}>
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-none">
        <DrawerHeader>
          <ul className="space-y-2">
            {headerNavbarItems.map(
              ({ route_name, route_path, route_items }, idx: number) => (
                <li key={`Item-${idx}`}>
                  {route_path !== null ? (
                    <Link to={route_path ? route_path : ""}>
                      <Button variant={"secondary"} className="w-full">
                        {route_name}
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Button
                        variant={"secondary"}
                        className="w-full"
                        onClick={() => toggleDrawer(`item-${idx}`)}
                      >
                        {route_name}
                      </Button>
                      {openDrawer[`item-${idx}`] && (
                        <AtomSubList routeArray={route_items} />
                      )}
                    </>
                  )}
                </li>
              ),
            )}
          </ul>
        </DrawerHeader>
        <div className="p-4 pb-0"></div>
        <DrawerFooter className="border-t">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AtomDrawer;
