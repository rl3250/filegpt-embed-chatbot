const messageIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-chatbot" viewBox="-2 -2 28 28" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <path d="M9.5 9h.01" />
  <path d="M14.5 9h.01" />
  <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
</svg>
`;

const downIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" viewBox="-2 -2 28 28" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 9l6 6l6 -6" />
</svg>
`;
const downIconBlack = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 28 28" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round" width="24px" height="24px">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 9l6 6l6 -6" />
</svg>
`;

const closeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>
`;

const filegptIcon = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full">
<g transform="scale(1,-1) translate(0,-24)">
    <path d="M 2.968841 1.765113 L 13.019154 1.765113 C 13.633958 1.765113 14.132356 2.263598 14.132356 2.878510 L 14.132356 13.094039 L 14.920000 13.094039 L 14.920000 15.088435 L 14.132356 16.983622 C 14.132356 17.598535 13.633958 18.097020 13.019154 18.097020 L 2.968841 18.097020 C 2.354036 18.097020 1.855638 17.598535 1.855638 16.983622 L 1.855638 2.878510 C 1.855638 2.263598 2.354036 1.765113 2.968841 1.765113 Z M 2.968841 1.000000 C 2.069241 1.000000 1.000000 1.978753 1.000000 2.878510 L 1.000000 16.983622 C 1.000000 17.883380 2.069241 18.894399 2.968841 18.894399 L 13.019154 18.894399 C 13.918754 18.894399 14.920000 17.883380 14.920000 16.983622 L 14.920000 15.088435 L 14.920000 12.568281 L 14.920000 13.094039 L 14.920000 2.878510 C 14.920000 1.978753 13.918754 1.000000 13.019154 1.000000 Z" transform="scale(1.000000,1.000000) translate(4.040000,2.052801)" opacity="1.000000"></path>
    <path d="M 2.361456 1.719204 L 4.252236 1.719204 L 4.252236 1.719204 L 4.252236 2.967767 C 4.252236 3.654955 3.695257 4.212031 3.008189 4.212031 L 1.759844 4.212031 L 1.759844 4.212031 L 1.759844 2.320921 C 1.759844 1.988602 2.029195 1.719204 2.361456 1.719204 Z M 2.361238 1.000000 C 1.744182 1.000000 1.000000 1.703757 1.000000 2.320921 L 1.000000 4.469910 L 1.000000 5.009410 L 1.502011 5.009410 L 3.008189 5.009410 C 3.980053 5.009410 5.039880 3.939800 5.039880 2.967767 L 5.039880 1.461325 L 5.039880 1.000000 L 4.510070 1.000000 Z" transform="scale(1.000000,1.000000) translate(13.920120,15.937790)" opacity="1.000000"></path>
    <path d="M 3.205113 2.102749 C 3.205113 2.711781 2.711482 3.205498 2.102557 3.205498 C 1.493631 3.205498 1.000000 2.711781 1.000000 2.102749 C 1.000000 1.493718 1.493631 1.000000 2.102557 1.000000 C 2.711482 1.000000 3.205113 1.493718 3.205113 2.102749 Z" transform="scale(1.000000,1.000000) translate(7.649347,11.249735)" opacity="1.000000"></path>
    <path d="M 3.205113 2.102749 C 3.205113 2.711781 2.711482 3.205498 2.102557 3.205498 C 1.493631 3.205498 1.000000 2.711781 1.000000 2.102749 C 1.000000 1.493718 1.493631 1.000000 2.102557 1.000000 C 2.711482 1.000000 3.205113 1.493718 3.205113 2.102749 Z" transform="scale(1.000000,1.000000) translate(12.297282,11.249735)" opacity="1.000000"></path>
    <path d="M 3.132962 3.133335 L 5.265925 3.133335 C 5.265925 1.955126 4.310965 1.000000 3.132962 1.000000 C 1.954960 1.000000 1.000000 1.955126 1.000000 3.133335 Z" transform="scale(1.000000,1.000000) translate(8.921841,7.539813)" opacity="1.000000"></path>
</g>
</svg>`;

function configureChatHeader() {
  const chatHeader = document.createElement("div");
  chatHeader.setAttribute("id", "filegpt-chat-header");
  chatHeader.setAttribute(
    "style",
    `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        background-color: white;
        color: black;
        height: 50px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    `
  );

  const brandName = `<span style="font-size: 18px; font-family: Arial;">FileGPT</span>`;
  const closeIcon = `
  <svg id="filegpt-close-icon" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  `;

  chatHeader.innerHTML = filegptIcon + brandName + closeIcon;
  console.log(chatHeader);
  return chatHeader;
}
function configureChatBubbleButton(buttonColor, alignChatButton) {
  const button = document.createElement("div");
  button.innerHTML = messageIcon;
  button.setAttribute("id", "filegpt-bubble-button");
  button.setAttribute(
    "style",
    `
        position: fixed;
        bottom: 20px;
        ${alignChatButton === "left" ? "left: 20px" : "right: 20px"};
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: ${buttonColor};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        z-index: 999999998;
        transition: all .2s ease-in-out;
    `
  );
  // Enlarge the button when the mouse is over it
  button.onmouseover = function () {
    this.style.transform = "scale(1.1)";
  };

  // Reduce the button back to its original size when the mouse leaves it
  button.onmouseout = function () {
    this.style.transform = "scale(1.0)";
  };

  // Scale down the button when it's clicked
  button.onmousedown = function () {
    this.style.transform = "scale(0.95)";
  };

  // Scale back the button when the click is released
  button.onmouseup = function () {
    this.style.transform = "scale(1.1)";
  };

  return button;
}

function configureChatMessageBubbles() {
  const bubbles = document.createElement("div");
  bubbles.setAttribute("id", "filegpt-message-bubbles");
  bubbles.setAttribute(
    "style",
    `
        position: fixed;
        bottom: 80px;
        border-radius: 10px;
        font-family: sans-serif;
        font-size: 16px;
        z-index: 999999997;
        cursor: pointer;
        flex-direction: column;
        gap: 50px;
        margin-left: 20px;
        max-width: 70vw;
        display: none;
    `
  );
  return bubbles;
}

function configureChatBubbleWindow(chatbotId, alignChatButton) {
  const window = document.createElement("div");
  window.setAttribute("id", "filegpt-bubble-window");
  window.setAttribute(
    "style",
    `
        position: fixed;
        bottom: 80px;
        ${alignChatButton === "left" ? "left: 20px" : "right: 20px"};
        width: 500px;
        height: 800px;
        max-height: 80vh;
        border-radius: 15px;
        box-shadow: rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px;
        display: none;
        z-index: 999999999;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `
  );
  const chatHeader = configureChatHeader();
  window.appendChild(chatHeader);

  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    `https://filegpt.app/chatbot?collection=${chatbotId}`
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "style",
    `
    width: 500px;
    height: 750px;
    max-height: calc(80vh - 50px)
  `
  );
  // iframe.style.flexGrow = "1"; // this makes the iframe take up the remaining space
  window.appendChild(iframe);

  return window;
}

/**
 * Embed filegpt chatbot
 */
async function embedFilegptChatbot() {
  if (window.filegptConfig?.embedSuccess) return;
  const chatbotId =
    document.currentScript.id || window.filegptConfig?.collectionId;
  const buttonColor = "black";

  const chatBubbleButton = configureChatBubbleButton(buttonColor, undefined);
  // const chatBubbleWindow = configureChatBubbleWindow(chatbotId, undefined);
  const chatBubbleWindow = configureChatBubbleWindow(chatbotId, undefined);

  chatBubbleWindow
    .querySelector("#filegpt-close-icon")
    .addEventListener("click", function () {
      if (chatBubbleWindow.style.display === "block") {
        chatBubbleWindow.style.display = "none";
        sessionStorage.setItem("chatVisibility", "closed");
        // Change button icon to chat icon
        chatBubbleButton.innerHTML = messageIcon;
      } else {
        chatBubbleWindow.style.display = "block";
        sessionStorage.setItem("chatVisibility", "open");
        // Change button icon to chevron-down icon
        chatBubbleButton.innerHTML = downIcon;
      }
    });

  chatBubbleButton.addEventListener("click", function () {
    if (chatBubbleWindow.style.display === "block") {
      chatBubbleWindow.style.display = "none";
      sessionStorage.setItem("chatVisibility", "closed");
      // Change button icon to chat icon
      chatBubbleButton.innerHTML = messageIcon;
    } else {
      chatBubbleWindow.style.display = "block";
      sessionStorage.setItem("chatVisibility", "open");
      // Change button icon to chevron-down icon
      chatBubbleButton.innerHTML = downIcon;
    }
  });

  document.body.appendChild(chatBubbleButton);
  document.body.appendChild(chatBubbleWindow);

  // check sessionStorage for chat visibility status
  let chatVisibility = sessionStorage.getItem("chatVisibility");
  if (chatVisibility === "open") {
    chatBubbleWindow.style.display = "block";
    chatBubbleButton.innerHTML = downIcon;
  } else {
    chatBubbleWindow.style.display = "none";
  }

  window.filegptConfig.embedSuccess = true;
}

embedFilegptChatbot();
