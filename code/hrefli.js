// Lam sach URL: https://lamsachurl.sonlt.site
// Chia se boi Lam Thai Son: https://sonlt.me

// Remove href.li
function RemoveHrefLi(){var e=document.querySelectorAll('a[href*="href.li/?"]');Array.prototype.forEach.call(e,(function(r,t){var f=e[t].getAttribute("href").split("href.li/?")[1];e[t].setAttribute("href",f)}))}RemoveHrefLi();
