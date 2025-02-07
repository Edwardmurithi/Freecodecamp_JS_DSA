const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function emptyUserInput() {
  if (userInput.value === '') {
    window.alert("Please input a value");
  } else {
    let originalStr = userInput.value.replace(/[^a-z0-9]/ig, '').toLowerCase();
    let modifiedStr = originalStr.split('').reverse().join('');
    console.log(modifiedStr === originalStr)
    
    if (modifiedStr == originalStr) {
      resultDiv.innerText = `${userInput.value} is a palindrome`;
    } else {
      resultDiv.innerText = `${userInput.value} is not a palindrome`;
    }
  }
}

checkPalindromeBtn.addEventListener('click', emptyUserInput)