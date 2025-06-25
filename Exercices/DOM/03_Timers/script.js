/*
  1. Affichez l’heure actuelle (heure : minutes : secondes) dans le titre de la fenêtre de votre navigateur en utilisant setTimeout et ensuite setInterval.
  2. Affichez la date et l’heure sur votre page web.
  Mardi 25 Avril 13:16:32
*/

window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const today = new Date();
    document.title = getFormatedTime(today);

    const dateWrapper = document.getElementById("date-wrapper");
    dateWrapper.textContent = getFormatedDate(today);
    const timeWrapper = document.getElementById("time-wrapper");
    timeWrapper.textContent = getFormatedTime(today);
  }, 1000);



  /**
   *
   *
   * @param {Date} date
   * @return {*} 
   */
  function getFormatedDate(date) {
    let format = date.toLocaleDateString(navigator.language, {
      day: "numeric",
      weekday: "long", 
      month: "long"
    });

    return capitalize(format);
  }

  /**
   *
   *
   * @param {Date} date
   * @return {*} 
   */
  function getFormatedTime(date) {
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  /**
   *
   *
   * @param {string} value
   */
  function capitalize (value) {
    return value.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }


});


