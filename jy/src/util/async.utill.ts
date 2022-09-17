export const reducerUtils = {
	initial: (data = null) => ({
		loading: false,
		data,
		error: null,
	}),
	loading: (preveState = null) => ({
		data: preveState,
		loading: true,
		error: null,
	}),
	success: (data: unknown) => ({
		data,
		loading: false,
		error: null,
	}),
	error: (error: unknown) => ({
		data: null,
		loading: false,
		error,
	}),
};
