// Mobile menu
const toggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
toggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// Gallery slideshow
let galIdx = 0;
const track = document.getElementById('gallery-track');
const slides = track.children.length;
function galGo(dir) { galIdx = (galIdx + dir + slides) % slides; track.style.transform = `translateX(-${galIdx * 100}%)`; }
document.getElementById('gal-prev').addEventListener('click', () => galGo(-1));
document.getElementById('gal-next').addEventListener('click', () => galGo(1));
setInterval(() => galGo(1), 5000);

// Scroll reveal
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Form + Data SDK
(async () => {
    const handler = { onDataChanged() {} };
    const initResult = await window.dataSdk.init(handler);

    const form = document.getElementById('aspiration-form');
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        successEl.classList.add('hidden');
        errorEl.classList.add('hidden');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';

        const result = await window.dataSdk.create({
            nama: document.getElementById('f-nama').value,
            kontak: document.getElementById('f-kontak').value,
            kategori: document.getElementById('f-kategori').value,
            pesan: document.getElementById('f-pesan').value,
            tanggal: new Date().toISOString()
        });

        submitBtn.disabled = false;
        submitBtn.textContent = 'Kirim Aspirasi';

        if (result.isOk) {
            successEl.classList.remove('hidden');
            form.reset();
        } else {
            errorEl.classList.remove('hidden');
        }
    });
})();
// Logika Tombol Geser Katalog UMKM
const umkmContainer = document.getElementById('umkm-container');
const umkmPrev = document.getElementById('umkm-prev');
const umkmNext = document.getElementById('umkm-next');

if (umkmContainer && umkmPrev && umkmNext) {
    umkmPrev.addEventListener('click', () => {
        umkmContainer.scrollBy({ left: -320, behavior: 'smooth' });
    });
    umkmNext.addEventListener('click', () => {
        umkmContainer.scrollBy({ left: 320, behavior: 'smooth' });
    });
}
lucide.createIcons();