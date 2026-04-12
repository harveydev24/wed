import Image from "next/image";

export default function EndingSection() {
  return (
    <section className="w-full pb-8 px-6">
      <div className="rounded-sm overflow-hidden">
        <Image
          src="/images/ending.jpeg"
          alt="김진환 이참결"
          width={1200}
          height={1200}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
}
