import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userreducer.js";
import articleReducer from "./reducers/articles.js";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store= configureStore({
    reducer:{
       user: userReducer,
       article: articleReducer
    },
    middleware:[thunk,logger]
});

export default store;