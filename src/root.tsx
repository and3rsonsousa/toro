import { component$ } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import MetaPixel from "./components/MetaPixel";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/toro.png" />

				<MetaPixel id="237438108731346" />

				<RouterHead />
			</head>
			<body lang="pt-br">
				<noscript>
					<img
						height="1"
						width="1"
						style="display:none"
						src="https://www.facebook.com/tr?id=160659696850852&ev=PageView&noscript=1"
					/>
				</noscript>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
