document.getElementById("phone-plus-btn").addEventListener('click', handlePhonePlusBtn);
document.getElementById("phone-minus-btn").addEventListener('click', handlePhoneMinusBtn);

// for phone case product
document.getElementById("case-plus-btn").addEventListener('click', handleCasePlusBtn);
document.getElementById("case-minus-btn").addEventListener('click', handleCaseMinusBtn);



function handlePhonePlusBtn() {
    // const productInput = document.getElementById("phone-input-value");
    // let productAmount = parseInt(productInput.value);
    // productAmount++;
    // productInput.value = productAmount;

    // // update product value
    // const productText = document.getElementById("phone-price");
    // productText.innerHTML = (1219 * productAmount);
    updateProduct("phone", 1219, true);
}

function handlePhoneMinusBtn() {
    // const productInput = document.getElementById("phone-input-value");
    // let productAmount = parseInt(productInput.value);
    // if (productAmount > 0) {
    //     productAmount--;
    // }
    // productInput.value = productAmount;

    // // update product value
    // const productText = document.getElementById("phone-price");
    // productText.innerHTML = (1219 * productAmount);
    updateProduct("phone", 1219, false);
}

function handleCasePlusBtn() {
    updateProduct("case", 59, true);
}

function handleCaseMinusBtn() {
    updateProduct("case", 59, false);
}



function updateProduct(inputID, basePrice, operation) {
    const productInput = document.getElementById(inputID + "-input-value");
    let productAmount = parseInt(productInput.value);

    if (operation) {
        productAmount++;
    } else {
        if (productAmount > 0) {
            productAmount--;
        }
    }

    productInput.value = productAmount;

    // update product value
    const productText = document.getElementById(inputID + "-price");
    productText.innerHTML = (basePrice * productAmount);

    // update total value
    updateTotal();
}

function getProductAmount(ID) {
    const productInputField = document.getElementById(ID);
    const productAmount = parseInt(productInputField.value);
    return productAmount;
}

function setFinalValue(ID, value) {
    document.getElementById(ID).innerHTML = value;
}

function updateTotal() {
    // calculate
    let phoneTotalAmount = 1219 * getProductAmount("phone-input-value");
    let caseTotalAmount = 59 * getProductAmount("case-input-value");
    let subTotal = phoneTotalAmount + caseTotalAmount;
    let vat = subTotal / 100;
    let total = subTotal + vat;

    // document.getElementById('sub-total').innerHTML = subTotal;
    // document.getElementById('vat').innerHTML = vat;
    // document.getElementById('total').innerHTML = total;

    setFinalValue('sub-total', subTotal);
    setFinalValue('vat', vat);
    setFinalValue('total', total);
}