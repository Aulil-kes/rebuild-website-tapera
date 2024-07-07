import { produkTaperaItemsList, sponsorOne } from "@/utils/data/data.taperta";
import { AtomCardHover } from "../atoms/home/AtomCardHover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import AtomCardCreator from "../atoms/home/AtomCardCreator";

function AppHome() {
  return (
    <div className="flex flex-row py-7 min-h-max">
      <div className="container space-y-3 md:px-[2rem]">
        <div className="relative max-w-7xl md:border-2 rounded-md isolate md:bg-gradient-to-tr from-indigo-600 via-pink-600 to-purple-600 p-0.5">
          <div className="bg-white dark:bg-gray-950 z-50 size-full rounded-md mx-auto relative py-36 md:py-32 w-full">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 dark:bg-opacity-50">
              TAPERA
              <br />
              <span>is the new trend.</span>
            </h1>
            <p className="mt-4 font-normal text-base md:text-base text-neutral-500 dark:text-neutral-300 max-w-lg text-center mx-auto">
              Website ini dibuat sebagai proyek demonstrasi untuk menguji
              keterampilan pengembangnya. Tujuan utamanya adalah untuk
              menunjukkan kemampuan dalam merancang dan mengimplementasikan
              suatu halaman web yang fungsional dan menarik.
            </p>
          </div>
        </div>
        <div className="space-y-3 py-20">
          <h2 className="scroll-m-20 border-b uppercase pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
            Produk tapera
          </h2>
          <p className="text-center text-sm mb-6 text-muted-foreground py-5">
            Dapatkan Manfaat Pembiayaan Rumah Tapera melalui KPR, KBR, KRR
            Tapera dan FLPP
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 relative mt-20">
            {produkTaperaItemsList.map(
              ({ route_link, route_name, route_desc }, idx: number) => (
                <AtomCardHover
                  link={route_link}
                  description={route_desc}
                  slug={route_name}
                  key={idx}
                />
              ),
            )}
          </div>
        </div>
        <div className="mb-20 space-y-3 py-20">
          <h2 className="scroll-m-20 border-b uppercase pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
            Kabar Tapera
          </h2>
          <p className="text-center text-sm md:text-base mt-6 text-muted-foreground py-5">
            Informasi Terkini Seputar Kegiatan Tapera
          </p>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Siaran Pers</TabsTrigger>
              <TabsTrigger value="about">About Creator</TabsTrigger>
              <TabsTrigger value="password">Kegiatan</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <BentoGrid>
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    link={item.link}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={i === 1 || i === 2 ? "md:col-span-2 border" : ""}
                  />
                ))}
              </BentoGrid>
            </TabsContent>
            <TabsContent value="password">
              <BentoGrid>
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    link={item.link}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={i === 1 || i === 2 ? "md:col-span-2" : ""}
                  />
                ))}
              </BentoGrid>
            </TabsContent>
            <TabsContent value="about" className="relative">
              <AtomCardCreator />
            </TabsContent>
          </Tabs>
        </div>
        <div className="py-20">
          <h2 className="scroll-m-20 border-b uppercase pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">
            BANK PENYALUR
          </h2>
          <p className="text-center text-sm md:text-base text-muted-foreground py-5">
            Berikut bank yang telah melakukan perjanjian kerjasama dengan BP
            Tapera
          </p>
          <InfiniteMovingCards
            direction="left"
            items={sponsorOne}
            speed="slow"
          />
          <InfiniteMovingCards
            direction="right"
            items={sponsorOne}
            speed="slow"
          />
          <InfiniteMovingCards
            direction="left"
            items={sponsorOne}
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default AppHome;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    link: "https://www.tapera.go.id/2024/05/bp-tapera-siap-berkolaborasi-dengan-media/",
    title: "BP TAPERA SIAP BERKOLABORASI DENGAN MEDIA",
    description:
      "BP Tapera menunjukkan upaya strategis dalam rangka penyebaran informasi mengenaiProgram Tapera dengan berkolaborasi bersama media.",
    header: (
      <img
        src="https://www.tapera.go.id/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-15-at-08.39.13-1280x640.jpeg"
        className="rounded-md"
      />
    ),
  },
  {
    link: "https://www.tapera.go.id/2024/06/bp-tapera-telah-kembalikan-tabungan-perumahan-senilai-rp42-triliun/",
    title:
      "BP Tapera Telah Kembalikan Tabungan Perumahan Senilai Rp4,2 Triliun",
    description:
      "Menanggapi adanya pemberitaan di media, “2021, BPK Temukan 124.960 Pensiunan Belum Dapat Pengembalian Dana Tapera Rp 567,5 Miliar”  dapat disampaikan bahwa, “Seluruh hasil temuan telah ditindaklanjuti sesuai rekomendasi BPK dan dilaporkan kepada BPK serta telah dinyatakan selesai oleh BPK“, ujarnya.",
    header: (
      <img
        src="https://www.tapera.go.id/wp-content/uploads/2024/06/2-1.jpeg"
        className="size-auto overflow-hidden object-fill rounded-md"
      />
    ),
  },
  {
    link: "https://www.tapera.go.id/2024/06/siaran-pers-bersama-kantor-staf-presiden-bp-tapera-kementerian-keuangan-kementerian-tenaga-kerja-kementerian-pupr-dan-otoritas-jasa-keuangan-ojk/",
    title:
      "Siaran Pers Bersama Kantor Staf Presiden, BP Tapera, Kementerian Keuangan, Kementerian Tenaga Kerja, Kementerian PUPR, dan Otoritas Jasa Keuangan (OJK)",
    description:
      "Kantor Staf Presiden bersama BP Tapera, Kementerian Keuangan, Kementerian Tenaga Kerja, Kementerian PUPR, dan Otortas Jasa Keuangan, menggelar konferensi pers tentang Program Tabungan Perumahan Rakyat (Tapera), di gedung Bina Graha Jakarta.",
    header: (
      <img
        src="https://www.tapera.go.id/wp-content/uploads/2024/06/2-1280x640.jpeg"
        className="object-fill overflow-hidden rounded-md"
      />
    ),
  },
  {
    link: "/",
    title: "Next...",
    description:
      "Bwa bwa bwa bwa Bwa bwa bwa bwa bwaaa bwaaa bwa bwa Bwa bwaaa bwaaa",
    header: <Skeleton />,
  },
];
