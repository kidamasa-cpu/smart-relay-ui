const FIREBASE_URL = "https://smartrelaytest-default-rtdb.asia-southeast1.firebasedatabase.app/";

function getDeviceId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id") || "room101";
}

function toggleRelay(state) {
  const relayVal = state ? 1 : 0;
  const deviceId = getDeviceId();
  fetch(${FIREBASE_URL}/${deviceId}/relay.json, {
    method: "PUT",
    body: JSON.stringify(relayVal)
  })
    .then(res => res.json())
    .then(data => {
      alert(Relay turned ${state ? "ON" : "OFF"});
    });
}
