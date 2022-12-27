// Lam sach URL: https://lamsachurl.sonlt.site
// Chia se boi Lam Thai Son: https://sonlt.me

// Remove fbclid
(function(){var param='fbclid';if(location.search.indexOf(param+'=')!==-1){var replace='';try{var url=new URL(location);url.searchParams.delete(param);replace=url.href}catch(ex){var regExp=new RegExp('[?&]'+param+'=.*$');replace=location.search.replace(regExp,'');replace=location.pathname+replace+location.hash}
history.replaceState(null,'',replace)}})();
