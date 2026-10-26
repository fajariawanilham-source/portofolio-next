import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/kartu";

const skills = [
  { nama: "HTML", level: "menengah" },
  { nama: "CSS", level: "menengah" },
  { nama: "Gut dan Github", level: "dasar" },
  { nama: "Desain poster dengan Canva", level: "mahir" },
  {nama: "javascript", level: "dasar"},
];

const hobi = [
  "Bermain game",
  "Membaca komik",
  "belajar pemograman",
];

const rencana = [
  "Menjadi web developer",
  "menguasai next.js",
  "membuat website yang bermangfaat",
];

const jadwal = [
  {
    hari: "Senin",
    waktu: "19.00-20.00",
    kegiatan: "Membaca Ulang Modul",
  },
  {
    hari: "Selasa",
    waktu: "19.00-21.00",
    kegiatan: "Mengerjakan Tugas Praktik",
  },
  {
    hari: "Rabu",
    waktu: "19.30-20.30",
    kegiatan: "Merekam Video dan menulis laporan",
  },
];


export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama="Ilham Fajariawan"
        tagline="Siswa kelas X SMK calon Junior Web Developer di kelas Industri UBIG."
      />

      <div className="mt-10 space-y-4">
        <Kartu judul="Tentang Saya">
          <p>
            Saya adalah siswa kelas X jurusan Rekayasa
            Perangkat Lunak yang tertarik dengan teknologi,
            pemrograman, dan pengembangan website.saya jurusan rpl di SMKN 1 Kepanjen
          </p>
        </Kartu>

        <div className="grid gap-4 md:grid-cols-2">
          <Kartu judul="Hobi">
            <ul className="list-disc space-y-2 pl-5">
              {hobi.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>

          <Kartu judul="Cita-cita">
            <ul className="list-disc space-y-2 pl-5">
              {rencana.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Kartu>
        </div>

        <Kartu judul="Keahlian">
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        </Kartu>

        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead className="bg-[#20395f] text-white">
                <tr>
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr key={item.hari} className="border-b">
                    <td className="p-3">{item.hari}</td>
                    <td className="p-3">{item.waktu}</td>
                    <td className="p-3">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </div>
    </main>
  );
}
