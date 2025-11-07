let promptmsg = document.querySelector("#prompt");
let btn = document.querySelector("#btn");
let container = document.querySelector(".container");
let chatContainer = document.querySelector(".chat-container");
let userMessage = null;


async function getWebsiteContext() {
  const pages = [
    "/index.html",
    "/aboutus.html",
    "/pricing.html",
    "/app-development.html",
    "/branding.html",
    "/contact-us.html",
    "/logo-design.html",
    "/portfolio.html",
    "/web-design.html",
  ];

  let context = "";
  for (const page of pages) {
    try {
      const res = await fetch(page);
      const text = await res.text();
      const cleaned = text.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
      context += `\n--- Content from ${page} ---\n${cleaned}\n`;
    } catch (err) {
      console.warn(`Could not load ${page}:`, err);
    }
  }
  return context;
}


function createChatbox(html, classname) {
  let div = document.createElement("div");
  div.classList.add(classname);
  div.innerHTML = html;
  return div;
}


async function getApiResponse(aiChatbox) {
  let textElement = aiChatbox.querySelector(".text");

  try {
    const context = await getWebsiteContext();

    const response = await fetch("https://digisolutions-production.up.railway.app/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage, context }),
    });

    const data = await response.json();
    console.log(data);

    const apiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t get that.";
    textElement.innerText = apiResponse;
  } catch (error) {
    console.log(error);
    textElement.innerText = "Error: Failed to get response from server.";
  } finally {
    aiChatbox.querySelector(".loading").style.display = "none";
  }
}

function showLoading() {
  let html = `
    <div class="img">
      <img src="ai.png" alt="" width="50px">
    </div>
    <div class="text-box">
      <p class="text"></p>
      <img src="load-32_256.gif" alt="" class="loading" width="20">
    </div>
  `;

  let aiChatbox = createChatbox(html, "ai-chatbox");
  chatContainer.appendChild(aiChatbox);
  getApiResponse(aiChatbox);
}

// ✅ Main button click handler
btn.addEventListener("click", () => {
  userMessage = promptmsg.value.trim();
  console.log(userMessage);

  if (userMessage === "") {
    container.style.display = "flex";
    return;
  } else {
    container.style.display = "none";
  }

  let html = `
    <div class="img">
      <img src="user.png" alt="" width="40px">
    </div>
    <p class="text"></p>
  `;

  let userChatbox = createChatbox(html, "user-chatbox");
  userChatbox.querySelector(".text").innerText = userMessage;
  chatContainer.appendChild(userChatbox);

  promptmsg.value = "";
  setTimeout(showLoading, 500);
});
