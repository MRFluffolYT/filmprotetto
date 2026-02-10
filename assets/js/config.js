// assets/js/config.js
// ── MODIFICA SOLO QUI quando vuoi cambiare utenti ──

window.APP_CONFIG = {
  minUsernameLength: 2,

  allowedUsernames: [
    "youngestmoonsta",
    "admin",
    "annapanna07",
    "giuseppe",
    "fabio",
    "barbie",
    "cirillo",
    "crama",
    "carlobarba1"
    // aggiungi altri nomi qui sotto, uno per riga
    // "", "", ""  ← puoi lasciare righe vuote se vuoi
  ].map(s => s.toLowerCase().trim())
};
