/* ============================================================
   EXPONER CUP 2026 â€” main.js
   1) Render ikon lucide
   2) Countdown timer
   3) Data divisi (panduan per lomba)
   4) Render halaman divisi: Guidebook, Juknis, Pendaftaran,
      Surat Undangan + WhatsApp (mengikuti pola ppexponer.carrd.co)
   ============================================================ */

// 1) Render icon lucide
if (window.lucide) {
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
    });
}

// ============================================================
// 2) COUNTDOWN TIMER
// ============================================================
const EVENT_DATE = '2026-11-20T08:00:00+07:00';

function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!daysEl) return;

    const eventTime = new Date(EVENT_DATE).getTime();
    const pad = (n) => String(n).padStart(2, '0');

    function tick() {
        const now = Date.now();
        let diff = eventTime - now;
        if (diff < 0) diff = 0;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = pad(days);
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);
    }

    tick();
    setInterval(tick, 1000);
}

// ============================================================
// 3) DATA DIVISI
//    links: isi dengan link Guidebook / Juknis / Formulir
//    Pendaftaran / Surat Undangan milik panitia.
// ============================================================
const DIVISI_DATA = {
    ml: {
        slug: 'ml',
        name: 'Mobile Legends',
        category: 'E-Sports',
        image: 'gambar/ml.jpeg',
        desc: 'Turnamen Mobile Legends 5v5 antar sekolah. Adu strategi dan koordinasi tim untuk membawa trofi EXPONER CUP 2026!',
        wa: '6285750008886',
        links: {
            guidebook: '#',
            juknis: 'juknis-ml.pdf',
            pendaftaran: 'https://forms.gle/RDZWqMXLsi6o4xMe7',
            undangan: '#'
        }
    },
    ff: {
        slug: 'ff',
        name: 'Free Fire',
        category: 'E-Sports',
        image: 'gambar/FREEFIRE.IMAGE.jpeg',
        desc: 'Turnamen Free Fire Squad mode Battle Royale. Squad terakhir yang bertahan adalah juaranya!',
        wa: '6285750008886',
        links: {
            guidebook: '#',
            juknis: 'juknis-ff.pdf',
            pendaftaran: 'https://forms.gle/Xvkxtyvrkz5WvAG39',
            undangan: '#'
        }
    },
    basket: {
        slug: 'basket',
        name: 'Basket Putra & Putri',
        category: 'Olahraga',
        image: 'gambar/basket.image.jpeg',
        desc: 'Kompetisi bola basket kategori Putra dan Putri dengan sistem setengah kompetisi.',
        wa: '6285750008886',
        links: {
            guidebook: '#',
            juknis: 'juknis-basket.pdf',
            pendaftaran: 'https://forms.gle/oaRyL5y5e26njkPRA',
            undangan: '#'
        }
    },
    shortmovie: {
        slug: 'shortmovie',
        name: 'Video Competition',
        category: 'Seni & Kreativitas',
        image: 'gambar/short movie.jpeg',
        desc: 'Lomba pembuatan film pendek bertema bebas. Ceritakan ide dan kreativitasmu lewat visual!',
        wa: '6285750008886',
        links: {
guidebook: '#',
            juknis: 'juknis-shortmovie.pdf',
            pendaftaran: 'https://forms.gle/ejzimcXMHQ6Bn6Tt5',
            undangan: '#'
        }
    },
futsal: {
        slug: 'futsal',
        name: 'Futsal',
        category: 'Olahraga',
        image: 'gambar/FUTSAL.IMAGE.jpeg',
        desc: 'Kompetisi futsal 5v5 antar sekolah. Eksekusi strategi dan teamwork untuk menjadi juara!',
        wa: '6285750008886',
        links: {
            guidebook: '#',
juknis: 'juknis-futsal.pdf',
            pendaftaran: 'https://forms.gle/6S6LVjcWRV64ExSRA',
            undangan: '#'
        }
    },
    pmr: {
        slug: 'pmr',
        name: 'Palang Merah Remaja',
        category: 'Kepalangmerahan',
        image: 'gambar/PMR.IMAGE.jpeg',
        desc: 'Lomba keterampilan Palang Merah Remaja: Pertolongan Pertama, donor darah, dan tanggap bencana.',
        wa: '6285750008886',
        links: {
guidebook: '#',
            juknis: '#',
            pendaftaran: 'https://forms.gle/UMHosL34Ak1xNB6DA',
            undangan: '#'
        }
    },
    poster: {
        slug: 'poster',
        name: 'Digital Poster',
        category: 'Desain Grafis',
        image: 'gambar/digital poster.jpeg',
        desc: 'Lomba desain poster digital dengan tema "Energi Pemuda untuk Generasi Emas".',
        wa: '6285750008886',
        links: {
guidebook: '#',
            juknis: 'juknis-poster.pdf',
            pendaftaran: 'https://forms.gle/tBmLhyaAHfrxv6F28',
            undangan: '#'
        }
    }
};

// Definisi 4 dokumen yang tampil di setiap halaman divisi (Carrd style)
const DOC_DEFS = [
    {
        key: 'guidebook',
        icon: 'book-open',
        label: 'Guidebook',
        sub: 'Buku panduan lomba'
    },
    {
        key: 'juknis',
        icon: 'folder-open',
        label: 'Juknis',
        sub: 'Petunjuk teknis lomba'
    },
    {
        key: 'pendaftaran',
        icon: 'clipboard-list',
        label: 'Pendaftaran',
        sub: 'Formulir pendaftaran'
    },
    {
        key: 'undangan',
        icon: 'mail',
        label: 'Surat Undangan',
        sub: 'Surat resmi panitia'
    }
];

// ============================================================
// 4) RENDER HALAMAN DIVISI (divisi-<slug>.html)
// ============================================================
function renderDivisionPage() {
    const slug = window.PAGE_SLUG || 'ml';
    const data = DIVISI_DATA[slug] || DIVISI_DATA.ml;

    document.title = `${data.name} â€” EXPONER CUP 2026`;

    // Header divisi
    const hero = document.getElementById('divisionHero');
    if (hero) {
        hero.style.display = 'flex';
        hero.innerHTML = `
            <div class="division-hero-text">
                <span class="division-tag">${data.category}</span>
                <h1 class="division-hero-title">${data.name}</h1>
                <p class="division-hero-desc">${data.desc}</p>
            </div>
        `;
    }

    // 4 dokumen: Guidebook / Juknis / Pendaftaran / Surat Undangan
    const list = document.getElementById('docsList');
    if (list) {
        list.innerHTML = DOC_DEFS.map((doc) => {
            const href = (data.links && data.links[doc.key]) || '';
            const ready = href && href !== '#';
            const itemCls = ready ? 'docs-item' : 'docs-item soon';
            const label = ready ? doc.label : `${doc.label} â€” Segera`;
            const sub = ready ? doc.sub : 'Tautan akan segera tersedia';
            const arrow = ready
                ? '<span class="docs-arrow"><i data-lucide="arrow-up-right"></i></span>'
                : '<span class="docs-arrow soon"><i data-lucide="lock"></i></span>';
            return `
                <a class="${itemCls}" href="${ready ? href : '#divisi'}" ${ready ? 'target="_blank" rel="noopener"' : ''}>
                    <span class="docs-icon"><i data-lucide="${doc.icon}"></i></span>
                    <span class="docs-text">
                        <strong>${label}</strong>
                        <small>${sub}</small>
                    </span>
                    ${arrow}
                </a>
            `;
        }).join('');
    }

    // Kontak WhatsApp panitia divisi
    const wa = document.getElementById('waLink');
    if (wa && data.wa) {
        const msg = encodeURIComponent(`Halo panitia EXPONER CUP 2026, saya ingin bertanya tentang ${data.name}.`);
        wa.href = `https://wa.me/${data.wa}?text=${msg}`;
    }

    if (window.lucide) lucide.createIcons();
}

// ============================================================
// BOOTSTRAP
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();

    if (document.getElementById('divisionHero')) {
        renderDivisionPage();
    }
});
