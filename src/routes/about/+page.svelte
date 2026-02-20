<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
		
    page_title.set("About");
</script>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>About</h1>
		<h2>About the European Democracy Consulting Stiftung</h2>
		<p>
			<b>European Democracy Consulting</b> is a consulting firm based in Austria, specialising in the
			provision of legal and political expertise on institutional and constitutional matters.
		</p>
		<p>	The <b>European Democracy Consulting Stiftung</b> is a non-profit association advancing the study of
			European institutions and democracy.
		</p>
		<h3>Our history</h3>
		<p>
			European Democracy Consulting was created in 2019, out of the desire to improve our common
			European democracy. The 2019 European elections showed a renewed interest for the Union, but
			also the limit of citizens’ engagement. Following these elections, European Democracy
			Consulting was set up to help decision-makers, public institutions, and NGOs in their
			promotion of a more democratic, transparent and efficient European Union. Its goal is the
			strengthening of European democracy through reform and the application of best-practice
			measures.
		</p>		
		<p>
			In July 2023, European Democracy Consulting set up the <b
				>European Democracy Consulting Stiftung</b
			>, a non-profit association, to manage its <i>pro bono</i> projects and separate them from consulting
			activities, starting with the European Party Funding Observatory. The purpose of the association
			is to advance the science and research related to European institutions and democracy. Consequently,
			the European Party Funding Observatory, which had been launched by European Democracy Consulting
			in 2022, was donated to the European Democracy Consulting Stiftung, now in charge of its development
			and growth.
		</p>
		<h3>Our vision</h3>
		<p>
			Democracy does not always come easy; there may be vested interests opposing its development.
			As a result, sixty years after its creation, the European Union still falls far short of the
			democratic standards of developed countries.
		</p>
		<p>
			We bring our solid expertise to support a value-based discussion and propose concrete
			political and legal solutions, based on best-practices, that will strengthen our common
			democracy for the general interest of all Europeans.
		</p>
		<h3>Our work</h3>
		<p>
			European Democracy Consulting and the European Democracy Consulting Stiftung are independent
			of specific national, political, or corporate interests. Our work represents our best efforts
			at providing accurate data, relevant best practices, and actionable recommendations based on
			our research and in line with our support for European democracy.
		</p>
		<p>
			Since 2019, European Democracy Consulting has conducted paid and <i>pro bono</i> research on
			the
			<a href="https://eudemocracy.eu/category/european-parties" target="_blank"
				>reform of European parties</a
			>
			and of their funding, on the transparency of European parties’
			<a href="https://eudemocracy.eu/category/donations-and-contributions" target="_blank"
				>donations and contributions</a
			>, on the
			<a href="https://eudemocracy.eu/logos-project" target="_blank"
				>visibility of national parties’ link</a
			>
			to their European party of membership, on the reform of
			<a href="https://eudemocracy.eu/category/politics/elections" target="_blank"
				>European elections and transnational lists</a
			>, and on
			<a href="https://eudemocracy.eu/category/institutions/representation" target="_blank"
				>geographical representation</a
			> in the EU’s leadership.
		</p>

		<h2>About the European Party Funding Observatory</h2>
		<p>
			The European Party Funding Observatory is the flagship project of the European Democracy Consulting Stiftung.
		</p>
		<h3>The Project</h3>
		<p>
			The goal of the European Party Funding Observatory is to advance the study of European parties
			by making data transparent and accessible to all.
		</p>
		<p>
			The European Party Funding Observatory aims at ensuring that information on European political
			parties is not merely published, but truly visible. We access or request data from official
			sources, transcribe it into open, machine-readable format, and turn it into clear
			visualisations aimed at answering citizens’ questions. In addition, we are providing this 
			information in a structured format via our <a
				href="https://wikibase.epfo.eu/wiki/Main_Page"
				target="_blank">wikibase</a>. 
		</p>
		<img style="border:0px; margin:auto;" alt="Stakeholders of the EPFO" src="{base}/img/about_graph.png" />
		<p style="font-size: x-small; font-style:italic;">
			Credits: <a
				href="https://dataeuropa.gitlab.io/data-provider-manual/"
				target="_blank">data.europa.eu</a>
		</p>
		<h3>Focus</h3>
		<p>The European Party Funding Observatory provides information on:</p>
		<ul>
			<li>
				<em>Public funding</em>: how much public funding do European parties receive? How much
				public funding are they entitled to? How much does each party actually receive? How does
				public funding evolve over time? How much does this cost European citizens?
			</li>
			<li>
				<em>Private funding</em>, including donations and contributions: how much private funding do
				European parties receive? Which parties rely more on donor contributions? How does private
				funding evolve over time? Who gives to European parties? What is the role of small or
				corporate donations? Where do donors and contributors come from?
			</li>
			<li>
				<em>Spending</em>: how much do European parties spend? What do they spend their funding on?
				How does spending evolve over time?
			</li>
		</ul>
		<p>
			In addition, the European Party Funding Observatory provides party-specific information,
			allowing the visualisation of the above information for each European political party,
			including some information concerning their individual and party membership.
		</p>
		<p>
			While citizens know little about European parties in general, the European Democracy
			Consulting Stiftung chose to focus on European party funding data, as this is the least
			visible and accessible information regarding European parties. European citizens indirectly
			fund – through national and European funding – almost the entirety of European parties’
			budget; they should be able to easily know how this money is distributed and spent.
		</p>
		<h3>Contact</h3>
		<p>
			For more on the Observatory, visit <a href="https://epfo.eu" target="_blank">epfo.eu</a> or send an e-mail at contact [at] epfo.eu.
		</p>
	</div>

	<TableOfContents />
</article>