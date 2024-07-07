import AtomDrawer from "./atom_header/AtomDrawer";
import AtomNavigationMenu from "./atom_header/AtomNavigationMenu";
import AtomToggleTheme from "./atom_header/toggles/AtomToggleTheme";

function AtomHeader() {
  return (
    <div className="sticky inset-x-0 top-0 bg-gray-50 h-16 z-50 flex items-center dark:bg-gray-950">
      <div className="container flex items-center justify-between px-3">
        <div className="dark:text-gray-50 uppercase flex gap-1 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_BP_Tapera.png"
            alt="Icon Tapera"
            className="size-10"
          />
          <h1 className="font-semibold">Tapera</h1>
        </div>
        <AtomNavigationMenu classNameMenu="hidden md:block" />
        <div className="flex items-center gap-3">
          <AtomToggleTheme className="md:hidden" />
          <AtomDrawer className="sm:hidden" />
        </div>
      </div>
    </div>
  );
}

export default AtomHeader;
