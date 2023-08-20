function getInputFieldValueById(inputFieldById){
    const inputField = document.getElementById(inputFieldById);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}

function getTotalValueById(totalValueById){
    const totalField = document.getElementById(totalValueById);
    const totalFieldString = totalField.innerText;
    const totalValue = parseFloat(totalFieldString);
    return totalValue;
}

function setTotalValueById(elementId, newTotalValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newTotalValue;
}