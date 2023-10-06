function pwd(){
    const userId = document.getElementById("userId");

    const area3 = document.getElementById("area3");
    area3.innerHTML = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";

    const password = document.getElementById("password");
    if(userId.value.replace(/ /g,"") === ''){
        const area1 = document.getElementById("area1");
        area1.innerHTML = "필수 입력 항목 입니다";
    }
}

function checkpwd(){
    const userId = document.getElementById("userId");
    const confirmPassword = document.getElementById("confirmPassword");
    const password = document.getElementById("password");

    if(userId.value.replace(/ /g,"") === ''){
        const area1 = document.getElementById("area1");
        area1.innerHTML = "필수 입력 항목 입니다";
    }
    if(password.value.replace(/ /g,"") === ''){
        const area2 = document.getElementById("area2");
        area2.innerHTML = "필수 입력 항목 입니다";
    }
}

function check(){
    const userId = document.getElementById("userId");
    const confirmPassword = document.getElementById("confirmPassword");
    const password = document.getElementById("password");

    if(userId.value.replace(/ /g,"") === ''){
        const area1 = document.getElementById("area1");
        area1.innerHTML = "필수 입력 항목 입니다";
    }
    if(password.value.replace(/ /g,"") === ''){
        const area2 = document.getElementById("area2");
        area2.innerHTML = "필수 입력 항목 입니다";
    }
    if(confirmPassword.value.replace(/ /g,"") === ''){
        const area4 = document.getElementById("area4");
        area4.innerHTML = "필수 입력 항목 입니다";
    }
}
