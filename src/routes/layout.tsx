import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div>
			<div
				class=" absolute inset-0  bg-cover bg-center opacity-25 bg-black"
				style={{ backgroundImage: "url(/bg.webp)" }}
			></div>
			<div class="relative min-h-screen grid place-items-center">
				<Slot />
			</div>
		</div>
	);
});
