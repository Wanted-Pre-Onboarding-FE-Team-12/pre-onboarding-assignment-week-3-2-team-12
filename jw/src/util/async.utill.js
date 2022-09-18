export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
    page: 1,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  success: data => ({
    data,
    loading: false,
    error: null,
  }),
  error: error => ({
    data: null,
    loading: false,
    error,
  }),
};
