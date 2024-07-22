function readMore(itemId) {
  const contentElement = document.getElementById(`${itemId}-content`);
  if (contentElement) {
    contentElement.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  const speechSynthesis = window.speechSynthesis;

  recognition.lang = "id-ID";
  recognition.interimResults = false;

  let hasPassedInitialLoad = false;

  // Set interval untuk memeriksa setiap 1000ms (1 detik)
  const intervalId = setInterval(function () {
    if (hasPassedInitialLoad) {
      clearInterval(intervalId); // Hentikan interval setelah 15 detik
      recognition.start(); // Mulai pengenalan suara setelah 15 detik
    }
  }, 1000);

  setTimeout(function () {
    hasPassedInitialLoad = true;
  }, 15000);

  recognition.onresult = function (event) {
    const command = event.results[0][0].transcript.toLowerCase();
    handleVoiceCommand(command);
  };

  recognition.onend = function () {
    // Mulai kembali setelah berhenti jika sudah lewat 15 detik
    if (hasPassedInitialLoad) {
      recognition.start();
    }
  };

  function handleVoiceCommand(command) {
    // perintah suara dan aksi di sini
    switch (command) {
      case "perkenalan":
      case "kenalan":
      case "selamat datang":
        scrollToSection("home");
        break;
      case "destinasi":
        scrollToSection("services");
        break;
      case "galery":
        scrollToSection("portfolio");
        break;
      case "dokumentasi":
        scrollToSection("our-story");
        break;
      case "artikel":
      case "ringkasan":
        scrollToSection("artikel");
        break;
      case "baca selengkapnya prambanan":
        readMore("prambanan");
        break;
      case "baca selengkapnya indrayanti":
        readMore("indrayanti");
        break;
      case "baca selengkapnya bintang":
        readMore("bintang");
        break;
      default:
        readText("Perintah tidak dikenali!");
        break;
    }
  }
  

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function readText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  }
});
