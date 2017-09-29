var iframe = document.createElement("iframe");
iframe.src = "https://hack.labs.nuance.com/embedded";

$(document).ready(function() {
    $('#slack-invitation-iframe').append(iframe);
});
