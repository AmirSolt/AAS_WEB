import { auth } from '$lib/server/clients/lucia';

export const handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
};