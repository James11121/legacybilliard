window.addEventListener("DOMContentLoaded", () => {
    const Messages = [
      "Welcome to Legacy Billiard",
      "Please Wait.."
    ];
  
    const MsgElement = document.getElementById("msg");
  
    if (MsgElement) {
      let remainingMessages = [...Messages];
  
      function showNextMessage() {
        if (remainingMessages.length === 0) {
          window.location.href = "signup.html";
          return;
        }
  
        const randomIndex = Math.floor(Math.random() * remainingMessages.length);
        const message = remainingMessages.splice(randomIndex, 1)[0];
        MsgElement.textContent = message;
  
        setTimeout(showNextMessage, 3000);
      }
  
      showNextMessage();
    }
  });
  