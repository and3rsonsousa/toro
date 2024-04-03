// import type { RequestHandler } from "@builder.io/qwik-city";

// export const onGet: RequestHandler = (request) => {
// 	throw request.redirect(302, `https://app.cardapioweb.com/toro_burger`);
// };

import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class="max-w-md flex flex-col gap-8 min-h-[80vh] p-8">
			<div class="font-medium text-center text-xl">
				<div class="mb-4 text-5xl">Oi curioso!</div>
				<div class="mb-4">
					Viu que esse link era apenas de uso interno e mesmo assim
					veio ver, né?
				</div>
				<div class="mb-4">Pois toma entrega grátis pra ti!</div>

				<a
					href="https://app.cardapioweb.com/toro_burger"
					class="link link-primary justify-center"
				>
					ENTREGA GRÁTIS AQUI
				</a>
			</div>
			<div>
				<img src="/toro.png" class="w-16 mx-auto" alt="" />
			</div>
		</div>
	);
});
