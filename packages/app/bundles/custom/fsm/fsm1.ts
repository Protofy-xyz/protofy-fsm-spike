import { createMachine, assign, createActor } from 'xstate';

//  Endpoint to get context 
//  http://localhost:8080/adminapi/v1/fsm/fsm1/context

const FSM1Machine = createMachine({
  context: {
    count: 0,
  },
  on: {
    INC: { //http://localhost:8080/adminapi/v1/fsm/fsm1/send?msg={%22type%22:%22INC%22}
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DEC: {
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
    SET: {
      actions: assign({
        count: ({ event }) => event.value,
      }),
    },
  },
});

export const FSM1Actor = createActor(FSM1Machine).start();