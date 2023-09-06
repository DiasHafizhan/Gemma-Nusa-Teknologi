import Layanan1 from '../assets/image/layanan1.png'
import Layanan2 from '../assets/image/layanan2.png'

import Kami1 from '../assets/image/kami1.png'
import Kami2 from '../assets/image/kami2.png'
import Kami4 from '../assets/image/kami4.png'
import Kami5 from '../assets/image/kami5.png'

import Partner1 from '../assets/image/Partner1.png'
import Partner2 from '../assets/image/Partner2.png'
import Partner3 from '../assets/image/Partner3.png'
import Partner4 from '../assets/image/Partner4.png'
import Partner5 from '../assets/image/Partner5.png'
import Partner6 from '../assets/image/Partner6.png'
import Partner7 from '../assets/image/Partner7.png'
import Partner8 from '../assets/image/Partner8.png'
import Partner9 from '../assets/image/Partner9.png'
import Partner10 from '../assets/image/Partner10.png'

import Pengalaman1 from '../assets/image/pengalaman1.png'
import Pengalaman2 from '../assets/image/pengalaman2.png'
import Pengalaman3 from '../assets/image/pengalaman3.png'
import Pengalaman4 from '../assets/image/pengalaman4.png'





export const navLink =[
    {
        id: 1,
        patch:"",
        link: "#home",
        text: "Home",
        linkAktif: "/"
    },
    {
        id: 2,
        patch:"layanan",
        link: "#layanan",
        text: "Layanan",
        linkAktif: "/manage"
    },
    {
        id: 3,
        patch:"pengalaman",
        link: "#pengalaman",
        text: "Pengalaman",
        linkAktif: "/penagalaman"
    },
    {
        id: 4,
        patch:"kenapakami",
        link: "#kenapakami",
        text: "Kenapa Kami",
        linkAktif: "/kenapakami"
    },
    {
        id: 5,
        patch:"mitrakebanggan",
        link: "#partner",
        text: "Mitra Kebanggaan",
        linkAktif: "/mitrakebanggan"
    }
]

export const cardLayanan = [
    {
        id: 1,
        image: Layanan1,
        title: "Manage Service",
        desc: "Layanan teknologi yang memungkinkan sebagian proses operasional TI Klien dilakukan oleh pihak ketiga dan Alternatif Solusi menghadapi tingginya investasi awal (CAPEX)",
        delay: "130",
        patch: "manage"
    },
    {
        id: 2,
        image: Layanan2,
        title: "Core Integrated System",
        desc: "Produk yang dibuat untuk memenuhi kebutuhan Lembaga Non Bank dalam mengelola kegiatan operasional dan melakukan ekspansi terhadap channel.",
        delay: "300",
        patch: "core"
    }
]

export const pengalaman =[
    {
        id: 1,
        image: Pengalaman4,
        title: "Success Story",
        desc: "Program pernah di gunakan oleh Bank Mutiara untuk Aplikasi Kredit dengan mengelola jumlah plafond kredit kurang lebih Tiga Triliun Rupiah"
    },
    {
        id: 2,
        image: Pengalaman3,
        title: "Skill Develoment System",
        desc: "Telah terbukti mempunyai kemampuan dalam membuat atau develop system dari awal ataupun mengembangkan system secara Tailor Made, tetapi masih mengikuti SOP Klien."
    },
    {
        id: 3,
        image: Pengalaman2,
        title: "Core System Yang Handal",
        desc: "Aplikasi Core System yang digunakan oleh salah satu koperasi terbesar di Indonesia, Koperasi Sejahterah Bersama di Bogor dengan lebih dari 100 cabang"
    },
    {
        id: 4,
        image: Pengalaman1,
        title: "Skill Migrasi dan Implementasi",
        desc: "Mempunyai kemampuan dan pengalaman dalam melakukan Migrasi & Implementasi di BPR-BPR dan Koperasi dari skala besar hingga kecil."
    }
]

export const kamiTop =[
    {
        id: 1,
        image: Kami1,
        title: "Regulasi & SOP",
        delay: "120"
    },
    {
        id: 2,
        image: Kami2,
        title: "Produk Layanan Teruji & Berkembang",
        delay: "200"
    }
]

export const kamiBottom =[
    {
        id: 1,
        image: Kami4,
        title: "Biaya Jelas dan Terukur, Tidak Ada Hidden Cost",
        delay: "400"
    },
    {
        id: 2,
        image: Kami5,
        title: "Infrastruktur 24/7 Handal",
        delay: "550"
    }
]

export const partnerTop =[
    {
        id: 1,
        image: Partner1
    },
    {
        id: 2,
        image: Partner2
    },
    {
        id: 3,
        image: Partner3
    },
    {
        id: 4,
        image: Partner4
    }
]

export const partnerMiddle =[
    {
        id: 1,
        image: Partner5
    },
    {
        id: 2,
        image: Partner6
    },
    {
        id: 3,
        image: Partner7
    }
]

export const partnerBottom =[
    {
        id: 1,
        image: Partner8
    },
    {
        id: 2,
        image: Partner9
    },
    {
        id: 3,
        image: Partner10
    }
]