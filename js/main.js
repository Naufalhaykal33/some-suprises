
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy Birthday Fitrii😄😁').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    // 2. Tambahkan atribut pencegah terjemahan
titles.setAttribute("translate", "no"); 

// // 2. Tambahkan atribut pencegah terjemahan
// titleElement.setAttribute("translate", "no"); 
// // ATAU gunakan class
// titleElement.classList.add("notranslate");

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};