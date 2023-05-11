import store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type useAppDispatchT = typeof store.dispatch;
