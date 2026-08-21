import Image from "next/image";

export default function ScreenshotImage({ src, alt, width = 1457, height = 843, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-line-on-paper shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ${className}`}
    >
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}
