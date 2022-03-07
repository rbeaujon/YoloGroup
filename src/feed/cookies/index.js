
  function setCookie(name, token) {
    const date = new Date();
    //const time = date.getTime();
    date.setTime(date.getTime() + (1*24*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + token  + ";" + expires + ";path=/";
  }
  
  function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } 
  
  function checkCookie(token) {
    let name = "yologroup";
    let cookie = getCookie(name);
    if (cookie !== "") {
      alert("Welcome con cookie");
    } else {
       if (cookie === "" ) {
         setCookie(name, token);
       }
    }
  }

  export default checkCookie;