import { footerTaperaListItems } from "@/utils/data/data.taperta";
import { Link } from "react-router-dom";

function AtomFooter() {
  return (
    <footer className="w-full text-slate-500 border-t">
      <div className="border-t border-slate-200 bg-slate-100 container dark:bg-gray-950 pt-16 pb-12 text-sm md:px-10">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div
            className="col-span-4 md:col-span-8 lg:col-span-4"
            aria-labelledby="footer-header"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_BP_Tapera.png"
              className="size-9 hidden md:block"
              alt=""
            />
            <Link
              id="WindUI-5-logo"
              aria-label="WindUI logo"
              aria-current="page"
              className="mb-6 flex items-center dark:text-gray-50 gap-2 uppercase whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
              to="javascript:void(0)"
            >
              Tapera
            </Link>
            <p className="dark:text-gray-300 md:text-base">
              Website ini dibuat sebagai proyek demonstrasi untuk menguji
              keterampilan pengembangnya. Tujuan utamanya adalah untuk
              menunjukkan kemampuan dalam merancang dan mengimplementasikan
              suatu halaman web yang fungsional dan menarik.
            </p>
          </div>
          {footerTaperaListItems.map(
            ({ route_title, route_items }, idx: number) => (
              <nav className="col-span-2 md:col-span-4 lg:col-span-2" key={idx}>
                <h3 className="mb-6 text-base font-medium text-slate-700 dark:text-gray-300">
                  {route_title}
                </h3>
                <ul>
                  {route_items.map(({ route_name }, idx: number) => (
                    <li
                      className="mb-2 leading-6 dark:text-gray-300"
                      key={`list-items-${idx}`}
                    >
                      <Link to={"#"}>{route_name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}

export default AtomFooter;
