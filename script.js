(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Bạn chắc chưa?",
    "Bạn thực sự chắc chứ??",
    "Bạn khum đồng ý được à?",
    "Đồng ý đi maàa...",
    "Bạn suy nghĩ lại đi!",
    "Bạn mà chọn Không, thì tui rất buồn đấy...",
    "Tui sẽ rất buồn đấy...",
    "Tui sẽ rất rất buồn đấyyyyyy...",
    "Ok fine, Tui không hỏi bạn nữa...",
    "Tui đùa thui, làm ơn chọn Có đi mà, năn nỉ đó! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
