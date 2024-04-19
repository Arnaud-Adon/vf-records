import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-600 text-white">
      <h1 className="text-4xl font-bold mb-12">
        Bienvenue sur la plateforme{" "}
        <span className="text-orange-400">Versus fighting records</span>
      </h1>
      <h2 className="w-4/5 text-xl mb-14 font-semibold text-center">
        Une application qui va te permetrre d&apos;enregistrer des notes
        relatives à ton jeux de combat du moment de manière écrite ou orale.
      </h2>

      <div className="flex mb-4">
        <Image
          src="/SF6_Logo.png"
          alt="Street fighter 6"
          width={500}
          height={500}
          priority
        />
        <Image
          src="/T8_Logo.svg"
          alt="Tekken 8"
          width={500}
          height={200}
          priority
        />
      </div>

      <p className="italic">
        Un service saas très utile pour mon évolution sur le dernier street
        fighter. &quot;M.Bison&quot;
      </p>
    </main>
  );
}
