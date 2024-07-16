import { createMachine, assign, createActor } from 'xstate';

//  Endpoint to get context 
//  http://localhost:8080/adminapi/v1/fsm/fsm1/context

const customFSM = createMachine({
  context: {
    personCount: 0,
    alarm: false
  },
  on: {
    INC: { //http://localhost:8080/adminapi/v1/fsm/fsm1/send?msg={%22type%22:%22INC%22}
      actions: assign({
        personCount: ({ context }) => context.personCount + 1,
      }),
    },
    DEC: {
      actions: assign({
        personCount: ({ context }) => context.personCount - 1,
      }),
    },
    // SET: {
    //   actions: assign({
    //     personCount: ({ event }) => event.value,
    //   }),
    // },
    ACTIVATE: {
      actions: assign({
        alarm: ({ context }) => true,
      }),
    },
    DEACTIVATE: {
      actions: assign({
        alarm: ({ context }) => false,
      }),
    },
  },
});

export const CustomFSMActor = createActor(customFSM).start();