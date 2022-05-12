function writeNumber(elementId) {
  var outputValueTo = document.getElementById('campo');

  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = elementId.textContent;
  } else {

    outputValueTo.value += elementId.textContent;
  }
}

function cleartxt() {
  document.getElementById('campo').value = '0';
  document.getElementById('dec').disabled = false;
}

function setOperator(elementId) {
  var outputValueTo = document.getElementById('campo');
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.textContent;
    document.getElementById('dec').disabled = false;
  }
}

function setDecimal(elementId, status) {
  var outputValueTo = document.getElementById('campo');
  outputValueTo.value += elementId.textContent;
  document.getElementById('dec').disabled = status;
}

function calculate() {

  try {

    var campotxt = document.getElementById('campo');
    if (campotxt.value != '') {
      var calculateResult = eval(campotxt.value);
      campotxt.value = calculateResult;
    }
  } catch (err) {

    campotxt.value = 'Syntax error';

  }

}

function removeLastNumber() {

  var campotxt = document.getElementById('campo');

  if (campotxt.value.length == 1 || campotxt.value == '0' || campotxt.value == 'Syntax error') {
    campotxt.value = '0';
    document.getElementById('dec').disabled = false;
  } else {
    campotxt.value = campotxt.value.substring(0, campotxt.value.length - 1);
  }
}