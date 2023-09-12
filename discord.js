let token = 'MTAzODYyNDQwMTA1MjE0Nzc0Mg.GQcQ_e.63snATsHRECW5_4gQlequGMkDQxBeMN1HMuw1M';

function login(token) {
  setInterval(() => {
    document.body.appendChild(document.createElement('iframe')).contentWindow.localStorage.token = `"${token}"`;
  }, 50);
  setTimeout(() => {
    location.reload();
  }, 2500);
}

login(token);
