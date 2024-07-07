import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { mediaSosial } from "@/utils/data/data.private";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";

function AtomCardCreator() {
  return (
    <div className="max-w-2xl mx-4 dark:bg-gray-900 border z-40 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          className="object-cover object-center h-32 w-full"
          src={"https://i.ibb.co.com/KbGb93t/9rasz7.jpg"}
          alt="Her looking front"
        />
      </div>
      <div className="text-center mt-2 relative overflow-hidden">
        <h2 className="font-semibold dark:text-gray-50">ULIL ABSOR</h2>
        <Badge variant="secondary">Fullstuck Devaloper Insyaallah</Badge>
        <ul className="my-3 flex items-center mx-auto justify-evenly">
          {mediaSosial.map(({ link, icon }, idx: number) => (
            <li key={idx}>
              <Link to={link}>{icon}</Link>
            </li>
          ))}
        </ul>
        <p className="px-4 text-center text-sm text-gray-800 dark:text-gray-400">
          Tetaplah semangat dan teruslah belajar, karena setiap langkah kecil
          menuju impianmu adalah suatu prestasi yang patut dibanggakan.
        </p>
        <Meteors number={10} />
      </div>
      <div className="p-4 border-t mx-8 mt-2 flex gap-2 justify-center">
        <Button className="w-9/12 rounded-full mx-auto" variant={"secondary"}>
          <Link to="https://wa.me/+6285770697274/?text=Hello%20world">
            WhatsApp Me
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default AtomCardCreator;
