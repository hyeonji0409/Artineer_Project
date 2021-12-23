function openLogin() {
    window.open("login.html", "login",
        "top=200, left=500, width=400, height=450, directories='no', location=no, menubar=no, resizable=yes, status=yes, toolbar=no, scrollbar=no");
}
let joinButton = document.getElementById('join');
joinButton.onclick(showPopUp());
function showPopUp() {
    window.open("join.html", "회원가입", "width=800, height=800, left=100, top=50");
}