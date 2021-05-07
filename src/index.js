import store from "./store";
import {bugAdded, bugRemoved, bugResolved} from "./actions"

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 34"));
store.dispatch(bugResolved(1));


//store.dispatch(bugRemoved(1));


console.log(store.getState());
