document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('login-form');

    //1.ページ読み込み時にlocalstorageから自動入力
    function loadSavedCredentials() {
        const savedEmail = localStorage.getItem('userEmail');
        const savedPassword = localStorage.getItem('userPassword');
        if (savedEmail) {
            emailInput.value = savedEmail;
        }
        if (savedPassword) {
            passwordInput.value = savedPassword;
        }
    };

    //2.フォーム送信時にlocalstorageに保存
    loginForm.addEventListener('submit', (event) => {
              

        localStorage.setItem('userEmail', emailInput.value);
        localStorage.setItem('userPassword', passwordInput.value);

    });
    //3. ページロード時に実行
    loadSavedCredentials();
});
