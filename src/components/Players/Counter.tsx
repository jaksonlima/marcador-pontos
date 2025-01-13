"use client";

import { create, createStore } from "zustand";

type Store = {
  count: number;
  inc: () => void;
};

type IStore = {
  count: number;
};

const createdStore = create<Store>()((set) => ({
  count: 100,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

// const createdStore = createStore<IStore>()(() => ({ count: 100 }));

export function Counter() {
  // const { count, inc } = useStore();

  console.log(createdStore.getState());

  return (
    <div>
      <span>{createdStore.getState().count}</span>
      <button
        // onClick={() =>
        //   createdStore.setState({ count: (createdStore.getState().count += 1) })
        // }
        onClick={() => {
          // createdStore.getState().inc();
          createdStore.setState({
            count: (createdStore.getState().count += 1),
          });
          console.log(createdStore.getState());
        }}
      >
        one up
      </button>
      <button onClick={() => createdStore.setState({ count: 50 })}>
        one up all
      </button>
    </div>
  );
}
