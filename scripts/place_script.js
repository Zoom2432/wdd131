function calculateWindChill(T, V) {
  return 13.12
       + 0.6215 * T
       - 11.37 * Math.pow(V, 0.16)
       + 0.3965 * T * Math.pow(V, 0.16);
}

window.addEventListener('DOMContentLoaded', function() {
  var yearElem = document.getElementById('current-year');
  yearElem.textContent = new Date().getFullYear();

  var modifiedElem = document.getElementById('last-modified');
  modifiedElem.textContent = document.lastModified;

  var T = parseFloat(document.getElementById('temp').textContent);
  var V = parseFloat(document.getElementById('wind-speed').textContent);
  var chillEl = document.getElementById('windchill');

  if (T <= 10 && V > 4.8) {
    chillEl.textContent = calculateWindChill(T, V).toFixed(1) + '°C';
  } else {
    chillEl.textContent = 'N/A';
  }
});
