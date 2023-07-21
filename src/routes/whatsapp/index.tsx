import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = (request) => {
	const source = request.url.searchParams.get("source");

	let url =
		"https://wa.me/5588993425341?text=Fala galera, quero pedir meu Toro.";
	if (source) {
		url += ` Vim pelo ${source}`;
	}
	console.log({ url });
	throw request.redirect(302, encodeURI(url));
};
