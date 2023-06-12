const mathcList = document.querySelector(".match-list");
const incrementInput = document.querySelector(".lws-increment");
const decrementInput = document.querySelector(".lws-decrement");
const matchReset = document.getElementById("match-reset");
const resetTotal = document.getElementsByClassName("lws-singleResult");

const initialState = {};
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
let COUNTER = 0;

const increment = (stateId, value) => {
  return {
    type: INCREMENT,
    payload: value,
    stateId,
  };
};

const decrement = (stateId, value) => {
  return {
    type: DECREMENT,
    payload: value,
    stateId,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    const id = action.stateId;
    console.log("id", state[id]);
    const number = action.payload;

    const updatedState = {
      ...state,
      [id]: state[id] + parseInt(action.payload),
      totalId: id,
    };
    console.log("updated state", updatedState);
    return updatedState;
  } else if (action.type === DECREMENT) {
    const id = action.stateId;
    let number = state[id] - parseInt(action.payload);
    if (number <= 0) {
      number = 0;
    }

    const updatedState = {
      ...state,
      [id]: number,
      totalId: id,
    };
    console.log("updated state", updatedState);
    return updatedState;
  } else {
    return state;
  }
}

// current store
const store = Redux.createStore(counterReducer);

const render = (coutnerId = undefined, reset = false) => {
  const state = store.getState();
  console.log(state);
  if (coutnerId) {
    const newlist = document.createElement("li");
    newlist.classList.add("delete-match");
    newlist.innerHTML = `
    <div class="all-matches container">
      <!-- Each form tag is Each row, This will render multiple times on Clicking 'Add Another Match' -->
      <div class="match">
        <div class="wrapper">
          <button class="lws-delete">
          <div>
          <img src="./image/delete.svg" alt=""  />
          </div>
          </button>
          <h3 class="lws-matchName">Match ${COUNTER}</h3>
        </div>
        <div class="inc-dec">
          <form class="incrementForm" id="#c${coutnerId}">
            <h4>Increment</h4>
            <input type="number" name="increment" class="lws-increment" />
          </form>
          <form class="decrementForm" id="#cc${coutnerId}">
            <h4>Decrement</h4>
            <input type="number" name="decrement" class="lws-decrement"  />
          </form>
        </div>
        <div class="numbers">
          <h2 class="lws-singleResult c${coutnerId}">0</h2>
        </div>
      </div>
    </div>`;
    mathcList.appendChild(newlist);
    const setId = "c" + coutnerId;
    state[setId] = 0;
  } else if (reset) {
    for (const id in state) {
      state[id] = 0;
    }
    for (let i = 0; i < resetTotal.length; i++) {
      resetTotal[i].innerText = 0;
    }
    console.log("reset state", state);
  } else {
    const stateTotalUpdateId = state.totalId;
    const totalUpdateId = stateTotalUpdateId.slice(1);
    const totaltext = document.querySelector(`.c${totalUpdateId}`);
    totaltext.innerText = state[stateTotalUpdateId];
  }

  //   console.log("state", state);
};

render(++COUNTER);
store.subscribe(render);

mathcList.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.target.name === "increment") {
      let stateId = e.target.parentNode.id;
      stateId = stateId.slice(1);
      //   console.log("slice ", stateId);
      const value = e.target.value;
      store.dispatch(increment(stateId, value));
    } else if (e.target.name === "decrement") {
      let stateId = e.target.parentNode.id;
      stateId = stateId.slice(2);
      //   console.log("slice ", stateId);
      const value = e.target.value;
      store.dispatch(decrement(stateId, value));
    }
    e.preventDefault();
  }
});

mathcList.addEventListener("click", (event) => {
  const deletMatch =
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
      .className;
  console.log(deletMatch);
  if (deletMatch === "delete-match") {
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  }
});

matchReset.addEventListener("click", () => {
  render(undefined, true);
});

document.querySelector(".lws-addMatch").addEventListener("click", (e) => {
  render(++COUNTER);
});
