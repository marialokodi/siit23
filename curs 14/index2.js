let state = {
  rates: {},
};
async function getCurrency() {
  let r = await fetch(
    "http://data.fixer.io/api/latest?access_key=9e2d7471c5492d75d48d4db0a8ff7f9c"
  );
  let response = await r.json();
  state.rates = response.rates;
  let options = "";
  for (let [currency, rate] of Object.entries(state.rates)) {
    options += `<option value="${currency}">${currency}</option>`;
  }
  let currencySelects = document.querySelectorAll("select");
  for (let select of currencySelects) {
    select.innerHTML = options;
  }
}

function updateCurrency(idx) {
  let currencySelects = document.querySelectorAll("select");
  let valuesInputs = document.querySelectorAll("input");

  let from = currencySelects[idx].value;
  let to = currencySelects[(idx + 1) % 2].value;
  let howMany = Number(valuesInputs[idx].value);
  let toValue = (state.rates[to] * howMany) / state.rates[from];
  valuesInputs[(idx + 1) % 2].value = toValue.toFixed(2);
}
