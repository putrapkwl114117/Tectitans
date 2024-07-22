let clickCount = 0;

function checkDisability() {
  if (clickCount === 2) {
    showDisabilityMenu();
  } else {
    alert("Silakan klik layar dua kali lagi untuk mengonfirmasi.");
    clickCount = 0;
  }
}

function showDisabilityMenu() {
  document.getElementById("accessibility-popup").classList.add("hidden");
  document.getElementById("disability-menu").classList.remove("hidden");
}

function navigate(disabilityType) {
  alert(`Anda memilih disabilitas: ${disabilityType}`);
  // Implementasikan navigasi sesuai kebutuhan, misalnya, pindahkan ke halaman utama
  window.location.href = "halaman-utama.html";
}

function closePopup() {
  document.getElementById("accessibility-popup").classList.add("hidden");
  document.getElementById("disability-menu").classList.add("hidden");
}

// Deteksi klik layar
document.addEventListener("click", function () {
  clickCount++;
  checkDisability();
});

// Tampilkan popup ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("accessibility-popup").classList.remove("hidden");
});
