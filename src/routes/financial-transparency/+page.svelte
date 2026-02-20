<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
		
    page_title.set("Financial transparency");
</script>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>Financial transparency</h1>
		<p>
			As a foundation dedicated to the study of European institutions and democracy, including to strengthened transparency, we are committed to ensuring the transparency of our funding.
		</p>
		<p>
			This page aims at presenting the financial situation of our foundation, including its income and expenses, and its assets and liabilities, as verified by our auditors.
		</p>
		
		<h2>Income and expenses</h2>
		<h3>Income</h3>
		<p>
			In the financial year 2025, the income received by the foundation stemmed exclusively from private sources: it was made up of financial donations and in-kind contributions and free services for a total amount of €2,808.40.
		</p>
		<p>
			This year, the foundation only received financial donations from legal entities, and not from individual donors. In February 2025, the foundation received a financial donation of €2,000.00 from Volt There, a political foundation based in the Netherlands. This donation had been pledged in 2024 and marked as accounts receivable in last year’s financial statement. It was earmarked for the development of the EPFO’s Phase 2.
		</p>
		<p>
			The foundation also received in-kind contributions and free services for a total amount of €808.40. For instance, the foundation received online hosting for its website, the EPFO, and the website of EuropeanConstitution.eu, SSL certificates, online storage, domain names, and CDN services from European Democracy Consulting. In addition, the foundation started receiving free access to a VPS by VPSBG, as of mid-October.
		</p>
		<p>
			The value of free services is calculated “at arms’ length”, as if the foundation had had to incur these costs itself.
		</p>
		
		<script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

		<tableau-viz id="tableauViz"       
		  src='https://public.tableau.com/views/EDCS-Financialinformation/Income?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
		  toolbar="bottom" hide-tabs width="800" height="600">
		</tableau-viz>
		
		<h3>Expenses</h3>
		
		<p>
			In the financial year 2025, the expenses incurred by the foundation derived from its operations, banking services, and administrative functioning (including donations management and transfer fees). These amounted to €2,183.02.
		</p>
		<ul>
			<li>€2,000 to TULP Interactive for the continued development of additional features to the European Party Funding Observatory.</li>
			<li>€182.85 to Bank Austria in banking fees;</li>
			<li>€0.17 to the Maecenata Stiftung, for the withdrawl of funds from our crowdfunding platform.</li>
		</ul>
		
		<script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

		<tableau-viz id="tableauViz"       
		  src='https://public.tableau.com/views/EDCS-Financialinformation/Expenses?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
		  toolbar="bottom" hide-tabs width="800" height="600">
		</tableau-viz>
		
		<h2>Assets and liabilities</h2>
		
		<p>
			As of 31 December 2025, the assets of the foundation amounted to €26,772.48.
		</p>
		<ul>
			<li>€1,369.54 in current assets on our bank account; and</li>
			<li>€25,403.53 in long-term assets, mainly the online platform of the EPFO, based on its buidling costs.</li>
		</ul>
		<p>
			Meanwhile, the liabilities of the foundation amounted to €10,875, linked to the on-going contract with TULP Interactive.
		</p>
		
		<script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

		<tableau-viz id="tableauViz"       
		  src='https://public.tableau.com/views/EDCS-Financialinformation/Assetsandliabilities?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
		  toolbar="bottom" hide-tabs width="800" height="600">
		</tableau-viz>
	
	<p>
		For more information, see our complete statements of accounts:
	</p>
	<ul>
			<li><a href="{base}/files/edcs_-_statement_of_accounts_2023.pdf">financial year 2023 (June-December)</a>;</li>
			<li><a href="{base}/files/edcs_-_statement_of_accounts_2024.pdf">financial year 2024</a>; and</li>
			<li><a href="{base}/files/edcs_-_statement_of_accounts_2025.pdf">financial year 2025</a>.</li>
	</ul>
	</div>

	<TableOfContents />
</article>