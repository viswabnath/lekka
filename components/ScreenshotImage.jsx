import Image from "next/image";

export default function ScreenshotImage({ src, alt, width = 1457, height = 843, className = "" }) {
  return (
    <div
      className={`group overflow-hidden rounded-lg border border-line-on-paper shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      />
    </div>
  );
}
