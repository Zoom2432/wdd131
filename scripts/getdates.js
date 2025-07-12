const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = `Last Modification: ${lastModified}`;