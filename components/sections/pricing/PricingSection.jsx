import React, { useEffect, useRef } from "react";

const PricingSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animasyonları için hazırlık
    const cards = cardsRef.current;

    // Kartları başlangıçta görünmez yap
    cards.forEach((card, index) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
      }
    });

    // Intersection Observer ile scroll animasyonu
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Kartları sırayla animate et
            cards.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.transition =
                    "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
                  card.style.opacity = "1";
                  card.style.transform = "translateY(0)";
                }, index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/ay",
      description:
        "Kendi tarzını yaratmak isteyen kullanıcılar için ideal başlangıç paketi.",
      features: [
        "Dış kabuğu tamamlanmış yapı",
        "Elektrik & su tesisatları döşenmiş",
        "Tamamen boş iç alan",
        "Kişiselleştirme ve özgün dekorasyon imkânı",
        "Uygun maliyetli başlangıç seviyesi",
      ],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
    },
    {
      name: "Lite",
      price: "$29",
      period: "/ay",
      description:
        "Hızlı yerleşim isteyenler için ana yaşam alanları hazır, pratik çözüm.",
      features: [
        "Elektrik & su tesisatları eksiksiz",
        "Boya, alçı ve duvar işlemleri tamamlanmış",
        "Mutfak alanı ve sabit mobilyalar hazır",
        "Kendi hareketli mobilyalarını getirip hemen yerleşebilme",
        "Konforlu ve dengeli yaşam paketi",
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
    {
      name: "Pro",
      price: "$99",
      period: "/ay",
      description: "Tam donanımlı, yaşamaya hazır premium İVO BİO deneyimi.",
      features: [
        "Tüm tesisatlar ve iç işçilik üst düzey tamamlanmış",
        "Sabit ve hareketli mobilyalar dahil",
        "Modern mutfak ve yaşam alanı",
        "Direkt taşınıp hemen yaşama başlama imkânı",
        "En yüksek konfor seviyesinde tam hazır yaşam çözümü",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gri flex items-center justify-center p-10 font-quicksand">
      <div ref={sectionRef} className="max-w-7xl w-full">
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Fiyatlandırma</h2>
          <p className="text-xl">Size en uygun planı seçin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group"
            >
              <div className="h-full rounded-4xl bg-white text-kahverengi transition-all duration-500 overflow-hidden shadow-2xs">
                <div className="text-center">
                  <div className="mb-3 w-full h-48 rounded-t-2xl overflow-hidden">
                    <img
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>

                    <div className="mb-2">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-lg">{plan.period}</span>
                    </div>

                    <p className="mb-2 h-12">{plan.description}</p>
                    {/* 
                    <button className="w-full bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-all duration-300 mb-8">
                      Başla
                    </button> */}

                    <ul className="space-y-1 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-yesil mr-3 text-xl font-bold">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
