let isPromoApplied = false;
// -------------------------------------------
// --- Update innerText Function Start ---
// -------------------------------------------

function updatePrice(id, price){
    document.getElementById(id).innerText = price;
}

// -------------------------------------------
// --- Update innerText Function End ---
// -------------------------------------------


// -------------------------------------------
// --- ParseInt innerText Function Start ---
// -------------------------------------------

function getPrice(id){
    return parseInt( document.getElementById(id).innerText );
}

// -------------------------------------------
// --- ParseInt innerText Function End ---
// -------------------------------------------


// -------------------------------------------
// --- Get Value From Input Function Start ---
// -------------------------------------------

function getValue(id){
    return document.getElementById(id).value;
}

// -------------------------------------------
// --- Get Value From Input Function Start ---
// -------------------------------------------



// -------------------------------------------
// --- Update Total Price Function Start ---
// -------------------------------------------

function updateTotal(){

    const price = getPrice('price');
    const memoryCost = getPrice('memory-cost');
    const storageCost = getPrice('storage-cost');
    const deliveryCost = getPrice('delivery-cost');
    const discount = 20;

    const totalPrice = price + memoryCost + storageCost + deliveryCost;
    let finalPrice = totalPrice;

    // Applying promo of 20% discount 
    if(isPromoApplied==true) {
        finalPrice *= (100-discount)/100;
    } 

    updatePrice('total-price', totalPrice);
    updatePrice('final-price', finalPrice);
}

// -------------------------------------------
// --- Update Total Price Function End ---
// -------------------------------------------



// -------------------------------------------
// --- Memory Button Event Handler Start ---
// -------------------------------------------

document.getElementById('memory-section').addEventListener('click', function(event){
    const Memory8GB = document.getElementById('8gb-memory-btn');
    const Memory16GB = document.getElementById('16gb-memory-btn');

    switch (event.target) {
        case Memory8GB:
            updatePrice('memory-cost', 0);
          break;
        case Memory16GB:
            updatePrice('memory-cost', 180);
          break;
      }
    updateTotal();
});

// -------------------------------------------
// --- Memory Button Event Handler End ---
// -------------------------------------------


// -------------------------------------------
// --- Storage Button Event Handler Start ---
// -------------------------------------------

document.getElementById('storage-section').addEventListener('click', function(event){
    const ssd256GB = document.getElementById('256gb-ssd-btn');
    const ssd512GB = document.getElementById('512gb-ssd-btn');
    const ssd1TB = document.getElementById('1tb-ssd-btn');

    switch (event.target) {
        case ssd256GB:
            updatePrice('storage-cost', 0);
          break;
        case ssd512GB:
            updatePrice('storage-cost', 100);
          break;
        case ssd1TB:
            updatePrice('storage-cost', 180);
          break;
      }
      updateTotal();
});

// -------------------------------------------
// --- Storage Button Event Handler End ---
// -------------------------------------------


// -------------------------------------------
// --- Delivery Button Event Handler Start ---
// -------------------------------------------

document.getElementById('delivery-section').addEventListener('click', function(event){
    const freeDelivery = document.getElementById('free-delivery-btn');
    const costDelivery = document.getElementById('cost-delivery-btn');

    switch (event.target) {
        case freeDelivery:
            updatePrice('delivery-cost', 0);
          break;
        case costDelivery:
            updatePrice('delivery-cost', 20);
          break;
      }
      updateTotal();
});

// -------------------------------------------
// --- Delivery Button Event Handler End ---
// -------------------------------------------


// -------------------------------------------
// --- Promo Button Event Handler Start ---
// -------------------------------------------

document.getElementById('apply-btn').addEventListener('click', function(){
    const acceptedPromo = 'stevekaku';
    const promo = getValue('promo-input');
    if(promo == acceptedPromo){
        isPromoApplied = true;
    }
    var promoValue =  document.getElementById('promo-input');
    promoValue.value = "";
    updateTotal();
});

// -------------------------------------------
// --- Promo Button Event Handler End ---
// -------------------------------------------
