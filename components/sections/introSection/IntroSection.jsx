import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const sectionsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // Başlık animasyonu - ilk card geldiğinde kaybolsun
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: sectionsRef.current[0],
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      opacity: 0,
      y: -100,
      ease: "none",
    });

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const isLastSection = index === sectionsRef.current.length - 1;

      // Son section hariç hepsini pin'le
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: isLastSection ? "bottom center" : "bottom top",
          scrub: 1,
          pin: !isLastSection,
          pinSpacing: false,
        },
        scale: isLastSection ? 1 : 0.8,
        opacity: isLastSection ? 1 : 0,
        y: isLastSection ? -200 : 0,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sections = [
    {
      title: "Doğayı Dinle",
      subtitle: "Eşsiz Tasarımla Doğayla İç İçe Bir Yaşam",
      image: "/base.webp",
      position: "left",
    },
    {
      title: "Sürdürülebilir Yaşam",
      subtitle: "Geleceğe Duyarlı, Doğa Dostu Çözümler",
      image: "/blue.webp",
      position: "right",
    },
    {
      title: "Yenilikçi Tasarım",
      subtitle: "Modern Mimari ve Doğal Uyum",
      image: "/brown.webp",
      position: "left",
    },
    {
      title: "Enerji Verimliliği",
      subtitle: "Akıllı Sistemlerle Tasarruf",
      image: "/base.webp",
      position: "right",
    },
    {
      title: "Sağlıklı Yaşam",
      subtitle: "Doğal Malzemeler, Temiz Hava",
      image: "/blue.webp",
      position: "left",
    },
    {
      title: "Geleceğe Yatırım",
      subtitle: "Değer Kazanan, Sürdürülebilir Mülkler",
      image: "/brown.webp",
      position: "right",
    },
  ];

  return (
    <div className="bg-gri relative" id="intro">
      {/* Başlık - Scroll ile kaybolacak */}
      <div
        ref={titleRef}
        className="h-screen flex items-center justify-center sticky top-0 z-10"
      >
        <h1 className="font-quicksand text-[220px] font-bold text-center text-yesil leading-tight">
          İVO BİO <br /> İle Tanışın
        </h1>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="h-screen w-full flex items-center justify-between px-20 gap-10 relative z-20"
        >
          {/* Sol Kısım */}
          {section.position === "left" && (
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-6xl font-bold text-white font-quicksand">
                {section.title}
              </h2>
              <p className="text-3xl text-white/80 font-quicksand">
                {section.subtitle}
              </p>
            </div>
          )}

          {/* Orta - Card */}
          <div className="flex-10 flex justify-center">
            <Image
              src={section.image}
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="object-cover rounded-2xl shadow-2xl w-6xl"
            />
          </div>

          {/* Sağ Kısım */}

          {section.position === "right" && (
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-6xl font-bold text-white">{section.title}</h2>
              <p className="text-3xl text-white/80">{section.subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IntroSection;
