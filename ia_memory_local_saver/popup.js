
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('saveBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];

      if (!currentTab.url || typeof currentTab.url !== 'string') {
        alert("Unable to detect the current tab's URL.");
        return;
      }

      try {
        const urlObj = new URL(currentTab.url);
        const allowedDomains = ["chat.openai.com", "chatgpt.com"];

        if (allowedDomains.includes(urlObj.hostname)) {
          chrome.scripting.executeScript({
            target: { tabId: currentTab.id },
            func: () => {
              const markdownContent = document.body.innerText;
              const blob = new Blob([markdownContent], { type: 'text/markdown' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `gpt_${Date.now()}.md`;
              a.click();
              URL.revokeObjectURL(url);
            }
          });
        } else {
          alert("This is not a valid GPT chat window.");
        }
      } catch (err) {
        alert("Invalid URL structure.");
        console.error(err);
      }
    });
  });
});
