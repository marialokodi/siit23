let state = {
  rates: {},
};

async function getCurrency() {
  let r = await fetch(
    "http://data.fixer.io/api/latest?access_key=bab6dc180ed5d2d17a7bd00df96ba187"
  );
  let response = r.json;
  state.rates = response.rates;
  let options = "";
  for (let [currency, rate] of Object.enteries(state.rates)) {
    options = `<option value = '${currency}' > ${currency}</option>`;
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
