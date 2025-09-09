import { useRef, useEffect, useState } from "react";
import { IconLeaf, IconTruck, IconHeartHandshake } from "@tabler/icons-react";

export function AboutSection() {
  const features = [
    {
      icon: IconLeaf,
      title: "Świeże produkty",
      description:
        "Codziennie dostarczamy świeże wyroby, które zachwycają smakiem i wyglądem.",
    },
    {
      icon: IconTruck,
      title: "Lokalni dostawcy",
      description:
        "Wspieramy lokalnych producentów, dzięki czemu nasze produkty są autentyczne i pełne smaku.",
    },
    {
      icon: IconHeartHandshake,
      title: "Tradycyjne receptury",
      description:
        "Nasze wyroby przygotowujemy według sprawdzonych receptur - połączenie tradycji z najwyższą jakością.",
    },
  ];

  return (
    <section
      id="o-nas"
      className="flex justify-center bg-neutral-50 px-6 xl:px-0 py-24 w-full"
    >
      <div className="space-y-16 max-w-[1200px] text-center">
        <h2 className="font-bold text-neutral-900 text-4xl">O nas</h2>
        <p className="mx-auto max-w-3xl text-neutral-600 text-lg">
          Wierzymy w jakość, świeżość i lokalnych dostawców. Nasze wyroby
          powstają z pasją i tradycyjnych receptur, które zachwycają smakiem.
        </p>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isLast = index === features.length - 1;
            return (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
                extraClass={isLast ? "col-span-1 sm:col-span-2 lg:col-span-1" : ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, index, extraClass }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
      className={`flex flex-col h-full items-center text-center bg-white shadow-sm p-8 border border-neutral-200 rounded-2xl transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
        hover:shadow-xl hover:-translate-y-1
        ${extraClass}`}
    >
      <div className="bg-neutral-100 mb-4 p-4 rounded-full">
        <Icon size={56} stroke={2} className="text-neutral-600" />
      </div>
      <h3 className="font-semibold text-neutral-900 text-xl">{title}</h3>
      <p className="max-w-sm text-neutral-500">{description}</p>
    </div>
  );
}
