import Image from "next/image";

export default function CoverSection() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src="/images/thumbnail.png"
          alt="김진환 이참결"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
