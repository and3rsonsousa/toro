import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
	throw request.redirect(
		302,
		`/whatsapp?source=${encodeURI("Vitinho Ceará")}`
	);
};
