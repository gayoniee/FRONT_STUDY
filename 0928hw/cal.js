let numberClicked = false;

function add(char) {
    if(numberClicked == false) { 
        if(isNaN(char) == true) { 
            if(document.getElementById('area').value === ""){
                alert("처음은 연산자가 나올 수 없습니다.");
            } else {
                // 입력 받은 값이 또 다시 연산자면,
                alert("한 번에 연산자가 두 개 붙을 수 없습니다.");
            }
        } else if (char === '=') {
            alert("계산할 수 없습니다. 식을 완성시켜 주세요.");
        } else { // 연산자가 아니라면!
            document.getElementById('area').value += char; // 식 뒤에 값을 추가한다.
        }
    } else { // 만약에 이전에 숫자를 입력 했으면,
        document.getElementById('area').value += char; // 식 뒤에 값을 추가한다.
    }

    // 다음 입력을 위해 이번 입력에 숫자가 눌렸는지 연산자가 눌렸는지 설정한다.
    if(isNaN(char) == true) { // "만약 숫자가 아닌게 참이라면" = "연산자를 눌렀다면"
        numberClicked = false; // numberClicked를 false로 설정한다.
    } else {
        numberClicked = true; // numberClicked를 true로 설정한다.
    }
    
}

function deleteLastChild(){
    let area = document.getElementById('area');
    let result = area.value;
    document.getElementById('area').value = result.slice(0,-1);
}

function calculate() {
    let area = document.getElementById('area');
    let result = eval(area.value);
    document.getElementById('area').value = result;
}

function reset() {
    document.getElementById('area').value = "";
}