import React from 'react';

const zustandstore = create((set) => ({
    count:0,
    increase: () => set((state) =>({count: state.count +=1})),
    decrease: () => set((state) =>({count: state.count -=1})),
    reset:(state) => set({count:0}),
}))

export default zustandstore;