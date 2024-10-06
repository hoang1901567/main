// script.js
function guessNumber() {
    // Tạo số ngẫu nhiên từ 1 đến 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = null;

    // Yêu cầu người dùng nhập cho đến khi đoán đúng
    while (userGuess !== randomNumber) {
        userGuess = parseInt(prompt("Nhập một số từ 1 đến 10:"));

        // Kiểm tra xem giá trị người dùng nhập có hợp lệ không
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert("Số bạn nhập không hợp lệ. Vui lòng nhập lại số từ 1 đến 10.");
        } else if (userGuess !== randomNumber) {
            alert("Bạn đã đoán sai. Hãy thử lại!");
        }
    }

    // Hiển thị thông báo khi đoán đúng
    alert("Chúc mừng! Bạn đã đoán đúng số: " + randomNumber);
}
