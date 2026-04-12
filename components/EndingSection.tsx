import Image from "next/image";

export default function EndingSection() {
  return (
    <section className="w-full pb-8 px-6">
      <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
        <Image
          src="/images/ending.jpeg"
          alt="김진환 이참결"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
