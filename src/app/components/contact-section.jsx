import { IconMapPin, IconPhone, IconMail, IconId } from "@tabler/icons-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-neutral-50 px-6 md:px-8 py-20 w-full">
      <div className="space-y-16 m-auto max-w-[1200px]">
        <div className="space-y-4 mx-auto max-w-2xl text-center">
          <h2 className="font-bold text-neutral-900 text-3xl sm:text-4xl">
            Kontakt & Informacje
          </h2>
          <p className="text-neutral-700 text-lg">
            Masz pytania lub chcesz złożyć zamówienie?  
            Skontaktuj się z nami - dostarczamy świeże produkty prosto od lokalnych producentów.
          </p>
        </div>

        <div className="gap-12 grid lg:grid-cols-2">
          <div className="space-y-6 text-neutral-700 text-lg">
            <div className="flex items-start gap-3">
              <IconMapPin size={28} className="text-neutral-900 shrink-0" />
              <span>
                <span className="font-semibold">Adres:</span> ul. Parkowa 3, 95-080 Tuszyn
              </span>
            </div>

            <div className="flex items-start gap-3">
              <IconMail size={28} className="text-neutral-900 shrink-0" />
              <span>
                <span className="font-semibold">Email:</span> kontakt@pierogiulepione.pl
              </span>
            </div>

            <div className="flex items-start gap-3">
              <IconId size={28} className="text-neutral-900 shrink-0" />
              <span>
                <span className="font-semibold">NIP:</span> 729-256-25-81
              </span>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-6 bg-neutral-900 shadow-lg p-8 rounded-2xl text-white">
            <div className="flex items-center gap-4 sm:gap-6">
              <IconPhone size={36} className="text-white shrink-0" />
              <div>
                <p className="font-semibold text-xl">Zamów telefonicznie</p>
                <p className="text-neutral-300 text-lg">+48 516 205 442</p>
              </div>
            </div>
            <a href="tel:+48516205442" className="w-full sm:w-auto">
              <button className="bg-white hover:bg-neutral-200 px-8 py-4 rounded-lg w-full sm:w-auto font-bold text-neutral-900 transition-colors">
                Zadzwoń teraz
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
