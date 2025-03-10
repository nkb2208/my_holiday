
// (async function checkForUpdates() {
//     const currentVersion = "1.0";
//     const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

//     try {
//         const response = await fetch(versionUrl);
//         if (!response.ok) {
//             console.warn("Could not fetch version information.");
//             return;
//         }
//         const data = await response.json();
//         const latestVersion = data.version;
//         const updateMessage = data.updateMessage;

//         if (currentVersion !== latestVersion) {
//             alert(updateMessage);
//         } else {
//             console.log("You are using the latest version.");
//         }
//     } catch (error) {
//         console.error("Error checking for updates:", error);
//     }
// })();

// const messages = [
//     "Bạn chắc chưa?",
//     "Bạn thực sự chắc chứ??",
//     "Bạn khum đồng ý được à?",
//     "Đồng ý đi maàa...",
//     "Bạn suy nghĩ lại đi!",
//     "Bạn mà chọn Không, thì tui rất buồn đấy...",
//     "Tui sẽ rất buồn đấy...",
//     "Tui sẽ rất rất buồn đấyyyyyy...",
//     "Ok fine, Tui không hỏi bạn nữa...",
//     "Tui đùa thui, làm ơn chọn Có đi mà, năn nỉ đó! ❤️"
// ];

// let messageIndex = 0;

// function handleNoClick() {
//     const noButton = document.querySelector('.no-button');
//     const yesButton = document.querySelector('.yes-button');
//     noButton.textContent = messages[messageIndex];
//     messageIndex = (messageIndex + 1) % messages.length;
    
//     // Tăng kích thước nút Yes mỗi lần nhấn No
//     let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
//     yesButton.style.fontSize = `${currentSize * 1.5}px`; 
// }

// function handleYesClick() {
//     // Tạo form ẩn
//     const form = document.createElement("form");
//     form.action = "https://formsubmit.co/nkb22082006@gmail.com";
//     form.method = "POST";

//     // Thêm input ẩn với nội dung mặc định
//     const hiddenInput = document.createElement("input");
//     hiddenInput.type = "hidden";
//     hiddenInput.name = "feedback";
//     hiddenInput.value = "Mình đồng ý đi chơi 8/3!";
//     form.appendChild(hiddenInput);

//     // Ẩn Captcha tự động
//     const captchaInput = document.createElement("input");
//     captchaInput.type = "hidden";
//     captchaInput.name = "_captcha";
//     captchaInput.value = "false";
//     form.appendChild(captchaInput);

//     // Thêm form vào body
//     document.body.appendChild(form);
    
//     // Gửi form trước, sau đó chuyển hướng
//     form.submit();
    
//     setTimeout(() => {
//         window.location.href = "yes_page.html";
//     }, 1000); // Chờ 1 giây để đảm bảo form được gửi
// }

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
let noClickCount = 0;
let hasSentYes = false;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noClickCount++;
    
    // Tăng kích thước nút Yes mỗi lần nhấn No
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`; 
}

function handleYesClick() {
    if (hasSentYes) return; // Đảm bảo chỉ gửi Yes một lần duy nhất
    hasSentYes = true;
    
    // Tạo form ẩn
    const form = document.createElement("form");
    form.action = "https://formsubmit.co/nkb22082006@gmail.com";
    form.method = "POST";

    // Thêm input ẩn với nội dung mặc định
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "feedback";
    hiddenInput.value = "Mình đồng ý đi chơi 8/3!";
    form.appendChild(hiddenInput);

    // Gửi số lần bấm No cùng với Yes
    const noCountInput = document.createElement("input");
    noCountInput.type = "hidden";
    noCountInput.name = "noClickCount";
    noCountInput.value = `Số lần bấm No trước đó: ${noClickCount}`;
    form.appendChild(noCountInput);

    // Ẩn Captcha tự động
    const captchaInput = document.createElement("input");
    captchaInput.type = "hidden";
    captchaInput.name = "_captcha";
    captchaInput.value = "false";
    form.appendChild(captchaInput);

    // Thêm form vào body
    document.body.appendChild(form);
    
    // Gửi form trước, sau đó chuyển hướng
    form.submit();
    
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1000); // Chờ 1 giây để đảm bảo form được gửi
}
