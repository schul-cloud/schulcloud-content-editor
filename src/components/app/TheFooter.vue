<template>
	<footer>
		<div>© 2018 Schul-Cloud</div>
		<img
			src="@/assets/hpi-logo.png"
			width="235"
			height="44"
			alt="HPI Wort-Bild Marke (Logo)"
		/>
		<div>
			<a href="https://schul-cloud.org/impressum">
				Impressum
			</a>
			<span>-</span>
			<a href="https://schul-cloud.org/impressum#data_security">
				Datenschutzerklärung
			</a>
			<span>-</span>
			<a href="mailto:hpi-info@hpi.de?subject=Schul_Cloud%20Anfrage">
				Kontakt
			</a>
			<span>-</span>
			<a href="https://schul-cloud.org/partner">
				Partner
			</a>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	margin: 2rem 0;
	color: var(--darkGrey);
	text-align: center;
	img {
		filter: grayscale(1) contrast(1.5);
		opacity: 0.7;
	}
}
</style>
