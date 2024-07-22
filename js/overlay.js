let klik = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", aturKlikOverlay);
  window.addEventListener("popstate", aturPopState);

  // Sisipkan event listener untuk tombol "Batal"
  document
    .getElementById("cancel-btn")
    .addEventListener("click", batalkanOverlay);
});

function aturKlikOverlay() {
  klik++;
  if (klik === 2) {
    // Redirect ke halaman untuk pengguna dengan disabilitas
    window.location.href = "disabilitas.html";
  }
}

function batalkanOverlay() {
  // Jika tombol "Batal" diklik, redirect ke halaman non-disabilitas
  window.location.href = "nondisabilitas.html";
}

function aturPopState() {
  // Tangani kejadian popstate (tombol kembali diklik)
  klik = 0;
  document.getElementById("overlay").style.display = "flex";
}

// Tampilkan overlay saat halaman dimuat
document.getElementById("overlay").style.display = "flex";
