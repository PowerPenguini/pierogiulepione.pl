"use client";
import { useState, useRef, useEffect } from "react";

function ProductCard({ name, description, emoji, emojiBg, price }) {
  const priceWithoutVAT = (price / 1.23).toFixed(2).replace(".", ",");
  const priceWithVAT = price.toFixed(2).replace(".", ",");

  return (
    <div className="flex flex-col items-center space-y-4 bg-white shadow-sm hover:shadow-xl p-6 border border-neutral-200 rounded-xl h-full transition-transform hover:-translate-y-1 duration-300 ease-in-out transform">
      <div
        className="flex justify-center items-center rounded-full w-20 h-20 font-medium text-4xl"
        style={{
          background: `linear-gradient(145deg, ${emojiBg} 0%, #ffffff 100%)`,
        }}
      >
        {emoji}
      </div>

      <h3 className="font-semibold text-neutral-900 text-xl text-center">
        {name}
      </h3>
      <p className="text-neutral-500 text-sm text-center">{description}</p>

      <div className="flex flex-col items-center gap-1 mt-2">
        <span className="font-bold text-neutral-900 text-2xl">
          {priceWithoutVAT} zł <span className="text-sm">/opak.</span>
        </span>
        <span className="text-neutral-400 text-sm">
          {priceWithVAT} zł z VAT
        </span>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const categories = [
    {
      title: "Pierogi",
      products: [

        {
          name: "Pierogi z mięsem",
          description: "Tradycyjne pierogi z farszem mięsnym.",
          emoji: "🍖",
          emojiBg: "#FBE9E7",
          price: 13.6,
        },
        {
          name: "Pierogi ukraińskie",
          description: "Pierogi inspirowane kuchnią ukraińską.",
          emoji: "🇺🇦",
          emojiBg: "#E3F2FD",
          price: 13.6,
        },
        {
          name: "Pierogi z kapustą",
          description: "Pierogi z kapustą kiszoną.",
          emoji: "🥬",
          emojiBg: "#E8F5E9",
          price: 13.6,
        },
        {
          name: "Pierogi z borówką",
          description: "Słodkie pierogi z borówką leśną.",
          emoji: "🫐",
          emojiBg: "#EDE7F6",
          price: 13.6,
        },
        {
          name: "Pierogi z jagodą",
          description: "Klasyczne pierogi z jagodą.",
          emoji: "🫐",
          emojiBg: "#EDE7F6",
          price: 13.6,
        },
      ],
    },
    {
      title: "Naleśniki",
      products: [
        {
          name: "Naleśniki z limonką",
          description: "Orzeźwiające naleśniki z nutą limonki.",
          emoji: "🍋",
          emojiBg: "#FFFDE7",
          price: 16.85,
        },
        {
          name: "Naleśniki Kit-Kat",
          description: "Słodkie naleśniki z kawałkami Kit-Kata.",
          emoji: "🍫",
          emojiBg: "#EFEBE9",
          price: 16.85,
        },
        {
          name: "Naleśniki ze śliwką",
          description: "Delikatne naleśniki z farszem śliwkowym.",
          emoji: "🍑",
          emojiBg: "#F3E5F5",
          price: 16.85,
        },
        {
          name: "Naleśniki z serem",
          description: "Delikatny naleśnik z kremowym serem.",
          emoji: "🧀",
          emojiBg: "#FFF8E1",
          price: 16.85,
        },
        {
          name: "Naleśniki ze szpinakiem",
          description: "Wytrawny naleśnik ze szpinakiem i serem feta.",
          emoji: "🥬",
          emojiBg: "#E8F5E9",
          price: 16.855,
        },
        {
          name: "Naleśniki z jabłkiem",
          description: "Tradycyjny naleśnik z jabłkami i cynamonem.",
          emoji: "🍎",
          emojiBg: "#FFEBEE",
          price: 16.85,
        },
        {
          name: "Naleśniki z shormą",
          description: "Orientalny naleśnik z mięsem shorma.",
          emoji: "🥙",
          emojiBg: "#FFF3E0",
          price: 16.85,
        },
        {
          name: "Naleśniki z shormą i serem",
          description: "Wytrawny naleśnik z shormą i serem.",
          emoji: "🧀",
          emojiBg: "#FFF8E1",
          price: 16.85,
        },
        {
          name: "Naleśniki z mango",
          description: "Egzotyczny naleśnik z dojrzałym mango.",
          emoji: "🥭",
          emojiBg: "#FFF3E0",
          price: 16.85,
        },
        {
          name: "Naleśniki z pomarańczą",
          description: "Naleśnik z soczystą pomarańczą.",
          emoji: "🍊",
          emojiBg: "#FFE0B2",
          price: 16.85,
        },
        {
          name: "Naleśniki z truskawkami",
          description: "Klasyczny słodki naleśnik z truskawkami.",
          emoji: "🍓",
          emojiBg: "#FCE4EC",
          price: 16.85,
        },
        {
          name: "Naleśniki bolońskie",
          description: "Wytrawny naleśnik z sosem bolońskim.",
          emoji: "🍝",
          emojiBg: "#FFEBEE",
          price: 16.85,
        },
        {
          name: "Naleśniki z dżemem",
          description: "Prosty i pyszny naleśnik z dżemem owocowym.",
          emoji: "🥞",
          emojiBg: "#FFF9C4",
          price: 16.85,
        },
        {
          name: "Naleśniki kokosowo-czekoladowe",
          description: "Słodkie naleśniki z kokosem i czekoladą.",
          emoji: "🥥",
          emojiBg: "#E0F2F1",
          price: 16.85,
        },
        {
          name: "Naleśniki z borówką",
          description: "Słodkie naleśniki z borówką leśną.",
          emoji: "🫐",
          emojiBg: "#EDE7F6",
          price: 16.85,
        },
        {
          name: "Naleśniki mix słodki",
          description: "Zestaw różnych słodkich naleśników.",
          emoji: "🍬",
          emojiBg: "#F3E5F5",
          price: 16.85,
        },
        {
          name: "Naleśniki mix wytrawny",
          description: "Zestaw różnych wytrawnych naleśników.",
          emoji: "🥗",
          emojiBg: "#E8F5E9",
          price: 16.85,
        },
      ],
    },
    {
      title: "Kluski",
      products: [
        {
          name: "Kopytka",
          description: "Tradycyjne kopytka ziemniaczane.",
          emoji: "🥔",
          emojiBg: "#FFF3E0",
          price: 9.40,
        },
        {
          name: "Kluski śląskie",
          description: "Delikatne kluski z charakterystyczną dziurką.",
          emoji: "🥔",
          emojiBg: "#FFF3E0",
          price: 9.40,
        },
        {
          name: "Kopytka pomidorowe",
          description: "Kopytka z dodatkiem pomidorów.",
          emoji: "🍅",
          emojiBg: "#FFEBEE",
          price: 10.50,
        },
        {
          name: "Kopytka szpinakowe",
          description: "Kopytka z zielonym akcentem szpinaku.",
          emoji: "🥬",
          emojiBg: "#E8F5E9",
          price: 10.50,
        },
        {
          name: "Love",
          description: "Specjalne kluski w kształcie serc.",
          emoji: "❤️",
          emojiBg: "#FCE4EC",
          price: 10.50,
        },
        {
          name: "Kluski leniwe",
          description: "Delikatne kluski z twarogu z dodatkiem cukru.",
          emoji: "🍮",
          emojiBg: "#FFFDE7",
          price: 10.50,
        },
        {
          name: "Kartacze",
          description: "Duże kluski ziemniaczane z mięsnym farszem.",
          emoji: "🥟",
          emojiBg: "#F3E5F5",
          price: 15.8,
        },
        {
          name: "Knedle",
          description: "Knedle z owocami w środku.",
          emoji: "🍑",
          emojiBg: "#FFF3E0",
          price: 17.35,
        },
        {
          name: "Uszka z mięsem",
          description: "Małe uszka wypełnione farszem mięsnym.",
          emoji: "🍖",
          emojiBg: "#FBE9E7",
          price: 18.20,
        },
        {
          name: "Uszka z kapustą",
          description: "Małe uszka z farszem kapuścianym.",
          emoji: "🥬",
          emojiBg: "#E8F5E9",
          price: 18.20,
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].title);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  const currentCategory = categories.find((c) => c.title === activeTab);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <section
      id="nasze-produkty"
      className="flex justify-center bg-white px-8 xl:px-0 py-24 w-full"
    >
      <div className="space-y-12 max-w-[1200px]">
        <h2 className="font-bold text-neutral-900 text-4xl text-center">
          Nasze produkty
        </h2>

        <div className="relative flex justify-center gap-6 border-neutral-300 border-b">
          {categories.map((category) => (
            <button
              key={category.title}
              ref={(el) => (tabRefs.current[category.title] = el)}
              onClick={() => setActiveTab(category.title)}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === category.title
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {category.title}
            </button>
          ))}

          <span
            className="bottom-0 absolute bg-neutral-900 rounded-full h-1 transition-[left,width] duration-300"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentCategory.products.map((product) => (
            <div
              key={product.name}
              className="opacity-0 scale-95 transition-all animate-fade-in duration-500 ease-in-out transform"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
