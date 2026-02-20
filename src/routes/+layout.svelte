<script lang="ts">
	import '../app.css';
	import Header from '$lib/ui/Header.svelte';
	import Footer from '$lib/ui/Footer.svelte';
	import { mousePosition } from '$lib/stores.js';
	import SvelteSeo from 'svelte-seo';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { page_title } from '$lib/stores.js';
	import { type Snippet } from 'svelte';

	let { children } = $props();

	let showModal = false;
	
	let size = $state(0);

</script>

	<!-- from script above
	import Modal from '$lib/ui/Modal.svelte';
	
	setTimeout(() => {
		showModal = true;
	}, 120000);
	-->

{#key $page_title}
	{#if $page_title != 'ITEF'}
		<SvelteSeo
			title="{$page_title} | EDCS"
			description="EDCS is a non-profit association advancing the study of European institutions and democracy."
			canonical="https://edcstiftung.eu{$page.url.pathname}"
			keywords="european democracy, european political party, european party funding, european elections, transnational lists, transparency"
			themeColor="#003399"
			openGraph={{
				title: 'EDCS | European Democracy Consulting Stiftung',
				determiner: 'the',
				locale: 'en-UK',
				description:
					'EDCS is a non-profit association advancing the study of European institutions and democracy.',
				image: 'https://edcstiftung.eu/img/logo_edcs_og.png',
				url: 'https://edcstiftung.eu/',
				type: 'website',
				images: [
					{
						url: 'https://edcstiftung.eu/img/logo_edcs_og.png',
						width: 1200,
						height: 628,
						alt: 'Logo European Democracy Consulting Stiftung'
					}
				],
				site_name: 'European Democracy Consulting Stiftung'
			}}
			twitter={{
				card: 'summary_large_image',
				title: 'EDCS | European Democracy Consulting Stiftung',
				description:
					'EDCS is a non-profit association advancing the study of European institutions and democracy.',
				image: 'https://edcstiftung.eu/img/logo_edcs_twitter.png',
				imageAlt: 'Logo European Democracy Consulting Stiftung',
			}}
		/>
	{/if}
{/key}
	
<Header />

<main class="bg-slate-100 py-16 min-h-screen">
	<div class="container mx-auto">
		<!-- <slot /> -->
		{@render children()}
	</div>
</main>

<Footer />
<!--
<Modal bind:showModal>
	<div class="modal-container">
		<div class="image-container">
			<img src="{base}/img/Mini1.png" alt="charts" />
			<img src="{base}/img/Mini2.png" alt="charts" />
			<img src="{base}/img/Mini3.png" alt="charts" />
		</div>
		<div class="text-container">
			<p style="width: 80%">This project is made possible by donations from citizens.</p>
			<p style="width: 70%">We need your support for its development.</p>
			<p style="width: 100%">Check out our crowdfunding page on</p>
			<img src="{base}/img/logo_betterplace2.svg" alt="Better Place" />
			<p style="width: 60%">to see what we're working on next!</p>
			<a
				class="donate-button"
				href="https://www.betterplace.org/en/projects/128176-transparency-on-european-parties-at-last"
				target="_blank"
				title="Support us">Support us</a
			>
		</div>
	</div>
</Modal>
-->
<svelte:window bind:innerWidth={size} on:mousemove={(e) => ($mousePosition = { x: e.pageX, y: e.pageY })} />

<svelte:head>
	<!-- Matomo -->
	<script>
	  var _paq = window._paq = window._paq || [];
	  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
	  _paq.push(['trackPageView']);
	  _paq.push(['enableLinkTracking']);
	  (function() {
	    var u="https://epfo.eu/analytics/";
	    _paq.push(['setTrackerUrl', u+'matomo.php']);
	    _paq.push(['setSiteId', '4']);
	    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
	  })();
	</script>
	<noscript><p><img referrerpolicy="no-referrer-when-downgrade" src="https://epfo.eu/analytics/matomo.php?idsite=4&amp;rec=1" style="border:0;" alt="" /></p></noscript>
	<!-- End Matomo Code -->
	
	<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "image": "https://edcstiftung.eu/img/logo_edcs.png",
      "url": "https://edcstiftung.eu",
      "sameAs": ["https://bsky.app/profile/eudemocracy.eu", "https://www.linkedin.com/company/european-democracy-consulting"],
      "logo": "https://edcstiftung.eu/img/logo_edcs.png",
      "name": "European Democracy Consulting Stiftung",
      "alternateName": "EDCS",
      "description": "EDCS is a non-profit association advancing the study of European institutions and democracy.",
      "email": "contact@edcstiftung.eu",
      "keywords": "european democracy, european political party, european party funding, european elections, transnational lists, transparency",
      "nonprofitStatus": "verein",
      "foundingDate": "2023",
      "founders":
			 {
			 "@type": "Person",
			 "name": "Louis Drounau"
			 },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vally-Weigl-Gasse 1",
        "addressLocality": "Vienna",
        "addressCountry": "AT",
        "addressRegion": "Vienna",
        "postalCode": "1100"
      }
    }
    </script>
</svelte:head>

<!-- from style below

	.donate-button {
		display: flex;
		justify-content: center;
		background: var(--primary-color);
		color: white;
		text-decoration: none;
		font-size: var(--scale-3);
		padding-block: var(--size-4);
		width: 100%;
	}

	.modal-container {
		display: grid;
		grid-template-columns: 1fr;
	}

	.image-container {
		display: none;
		border-right: 1px solid var(--primary-color);
	}

	.image-container img {
		width: 80%;
		margin: 0 auto;
	}

	@media (min-width: 768px) {		
		.modal-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.image-container {
			display: block;
		}

		.modal-container .text-container p {
			text-align: center;
			margin: 0 auto;
		}
	}

	.modal-container > div {
		padding: var(--size-4);
	}

	.modal-container .text-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.modal-container .text-container img {
		max-width: 80%;
		margin: 0 auto;
	}

	.modal-container .text-container p {
		margin-block: var(--size-2);
		text-align: center;
		font-weight: 300;
	}


-->

<style>
	.container {
		background: white;
		padding: var(--size-16) var(--size-4);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-xl);
	}
	
	@media (min-width: 768px) {
		.container {
			padding: var(--size-16) var(--size-16);
		}
	}

	:global(body) {
		background-color: var(--primary-color);
	}
</style>
