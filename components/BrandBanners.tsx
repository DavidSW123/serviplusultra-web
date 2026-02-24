import Image from "next/image";

const maskStyle: React.CSSProperties = {
  maskImage: "radial-gradient(110% 85% at 50% 50%, black 58%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(110% 85% at 50% 50%, black 58%, transparent 100%)",
};

export function BrandBannerDark() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0c192b] shadow-sm">
      <div className="relative h-[180px] sm:h-[220px] md:h-[260px] w-full">
        <Image
          src="/brandlogo-dark.png"
          alt="ServiPlusUltra Solutions S.L."
          fill
          priority
          sizes="(max-width: 768px) 100vw, 960px"
          className="object-cover object-center opacity-95"
          style={{
            maskImage:
              "radial-gradient(110% 80% at 50% 50%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(110% 80% at 50% 50%, black 55%, transparent 100%)",
          }}
                  />
      </div>
    </section>
  );
}
