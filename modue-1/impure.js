const state = {
  value: 3,
};

function impure(multiplier) {
  state.value = state.value * multiplier;
}

impure(2);
console.log(state.value);
