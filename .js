// Mengambil elemen tombol ganti tema dan area body
const tombolTema = document.getElementById('tombol-tema');
const areaWeb = document.body;

// Logika penanganan event untuk Mode Gelap / Terang
tombolTema.addEventListener('click', function() {
    areaWeb.classList.toggle('tema-gelap');
    
    if (areaWeb.classList.contains('tema-gelap')) {
        tombolTema.textContent = "Mode Terang";
        tombolTema.style.backgroundColor = "#f1c40f"; 
        tombolTema.style.color = "#000";
    } else {
        tombolTema.textContent = "Mode Gelap";
        tombolTema.style.backgroundColor = ""; 
        tombolTema.style.color = "";
    }
});