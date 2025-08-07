function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getShinchanReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hi") || msg.includes("who is shinchan")) {
    return "Hi hi! Shinchan is a cute and naughty five year old boy.";
  } else if (msg.includes("what") && msg.includes("like")) {
    return "Shinchan likes to eat chocochip!";
  } else if (msg.includes("hate")) {
    return "Shinchan hates capsicum!";
  } else if (msg.includes("favourite girl") || msg.includes("love")) {
    return "Shinchan's favourite girl is Nanoko.";
  } else if (msg.includes("friends")) {
    return "Kazama, Masao, Bo-chan, and Nene are Shinchan's friends.";
  } else {
    const funnyReplies = [
      "Action bheem",
      "onnum solluradhuku illa",
      "nanbaaa",
      "enaku pudding venum",
      "Action Kamen is my hero!",
      "Do you have choco chips? No? Then bye!"
    ];
    return funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = getShinchanReply(message);
    addMessage("bot", reply);
  }, 500);
}