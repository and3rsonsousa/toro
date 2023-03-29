import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex justify-between flex-col gap-8 min-h-[80vh] p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto w-32" alt="" />
			</div>
			<div class="links">
				<a
					href="https://meucarrinho.delivery/toroburgerandbeer"
					class="link link-primary"
				>
					Pede pelo APP
				</a>
				<a href="https://wa.me/5588992637940" class="link">
					Deu BO no seu pedido? Chama aqui.
				</a>
				{/* <div class="mb-8 text-sm text-yellow-300">
					Aqui tem Entrega grátis para Cidade dos Funcionários e
					Região ( 5km ).
				</div> */}
				{/* <a href="cardapio.pdf" class="link">
					Cardápio
				</a> */}
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
