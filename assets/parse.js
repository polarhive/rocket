// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0-or-later

var url = prompt("enter Odysee link");;
url = url.replace('odysee.com', 'spee.ch')
document.getElementById("source").src = url;
document.getElementById("player").load();

// @license-end