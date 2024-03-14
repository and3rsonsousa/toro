import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 min-h-[80vh] p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto max-h-24" alt="" />
			</div>
			<div class="links">
				<a href="https://wa.me/5588993425341" class="link link-primary">
					Pede pelo ZAP
				</a>

				<a
					href="cardapio-toro.pdf"
					class="link justify-between items-center"
				>
					Cardápio em PDF{" "}
					<span class="text-sm bg-toro text-white py-0.5 animate-pulse px-3 rounded-full">
						NOVO
					</span>
				</a>
				<a
					href="https://www.ifood.com.br/delivery/sobral-ce/toro-burger-and-beer-centro/6fdf3f20-1738-4c3a-9d28-e6a2bbb54620"
					class="link"
				>
					Tamo no iFood
				</a>
				<a
					href="https://aiqfome.com/CE/sobral/fome-de-toro-burger"
					class="link"
				>
					aiqfome de um Toro
				</a>

				<a href="https://wa.me/5588993425341" class="link">
					Deu BO no seu pedido? Chama aqui.
				</a>
			</div>
			<div>
				<img src="/toro.png" class="w-16 mx-auto" alt="" />
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Toro burger and Beer",
	meta: [
		{
			name: "description",
			content: "Faça seu pedido pelo nosso WhatsApp",
		},
	],
};
