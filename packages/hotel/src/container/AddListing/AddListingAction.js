export default function AddListingAction(state, payload) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}

export function AddListingResetAction() {
  return {
    data: {},
  };
}
