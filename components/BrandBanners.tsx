import Image from "next/image";

const maskStyle: React.CSSProperties = {
  maskImage: "radial-gradient(110% 85% at 50% 50%, black 58%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(110% 85% at 50% 50%, black 58%, transparent 100%)",
};

export function BrandBannerDark() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0c192b] shadow-sm">
      <div className="relative aspect-[16/5]">
        <Image
          src="/brandlogo-dark.png"
          alt="ServiPlusUltra Solutions S.L."
          fill
          priority
          className="object-cover opacity-95"
          style={maskStyle}
        />
      </div>
    </section>
  );
}
