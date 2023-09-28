import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const date = new Date();

	return (
		<div class="max-w-md flex justify-between flex-col gap-8 min-h-[80vh] p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto w-32" alt="" />
			</div>
			<div class="links">
				<a href="https://wa.me/5588993425341" class="link link-primary">
					Pede pelo ZAP
				</a>
				{date.getDay() === 4 && (
					<div class="bg-yellow-300 text-sm p-2 rounded text-center text-black">
						Ei, a entrega hoje é só{" "}
						<span class="text-toro font-black tracking-wide">
							2 CONTO
						</span>
						. Pede logo!
					</div>
				)}
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
					href="https://www.ifood.com.br/delivery/fortaleza-ce/fome-de-toro-cidade-dos-funcionarios/54e0ce83-3306-429e-bac5-0de2d2c3a9f7"
					class="link"
				>
					Tamo no iFood
				</a>
				<a
					href="https://aiqfome.com/CE/sobral/toro-burger-beer"
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
