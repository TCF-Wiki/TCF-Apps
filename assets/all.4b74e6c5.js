function t(){let e=document.getElementById("loading");e&&e.remove(),document.querySelector("main")?.classList.add("loaded"),window.history.pushState({},document.title,location.pathname.replace(".html",""))}export{t as d};
