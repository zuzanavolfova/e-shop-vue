import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

// Definujeme typ pro stav
export interface State {
  count: number;
}

// Vytvoření store
export default createStore<State>({
  state: {
    data: {
      "1": 2,
      Acount: 0, // Výchozí hodnota
    }
  },
  mutations: mutations,
  actions: actions,
  getters: {
   
  },
});