import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "menengah" },
  { nama: "CSS", level: "menengah" },
  { nama: "Gut dan Github", level: "dasar" },
  { nama: "Desain poster dengan Canva", level: "mahir" },
  {nama: "javascript", level: "dasar"},
];

export default function Home () {
 
  return (
    <main className="mx-auto max-w-5xl [x-4 py-10">
      <Hero
      nama="Ilham fajariawan"
      tagline="siswa kelas X SMK calon juniorweb developer di kelas Industri UBIG."
      />

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">keahlian</h2>
        <div className="grid gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama}
           level={skill.level} />
        ))}
        </div>
      </section>
    </main>
  ) ;
} 