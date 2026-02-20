<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';
	import { page_title } from '$lib/stores';
	import { onMount } from 'svelte';
		
	page_title.set("European Democracy Consulting Stiftung");
</script>

<!-- from script above
	import { dsv, json } from 'd3-fetch';
	import { autoType } from 'd3-dsv';
-->

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<hgroup class="mb-12" style="text-align: justify;">		
		<h2>Who we are</h2>
		<p>The European Democracy Consulting Stiftung is a non-profit foundation registered in Austria and dedicated to advancing the study of European institutions and democracy.</p>

		<p>In July 2023, European Democracy Consulting (EDC) set up the <strong>European Democracy Consulting Stiftung</strong> (EDCS) to separate its <em>pro bono</em> projects from paid consulting activities, thereby establishing a clearer distinction between the two activities.</p>
		
		<p>The purpose of the foundation, detailed in its statutes, is to advance the science and research related to European institutions and democracy. Its projects are therefore geared, first and foremost, towards the academic community, and seek to support political scientists in their work relating to the European Union.</p>
		
		<p>Following the setup of the foundation, the European Party Funding Observatory, which was being built by European Democracy Consulting since March 2022, was officially donated to EDCS, now in charge of its development and growth. This project in turn led us to develop our Initiative on Transparency for European Party Funding.</p>
		
		<h2 id="projects">Our projects</h2>
		<h3>European Party Funding Observatory</h3>
		
		<a href="https://epfo.eu/" target="_blank">
			<img src="{base}/img/logo_epfo.png" alt="Logo European Party Funding Observatory" style="width:220px; float: right; margin-left:35px; margin-top:6px;"/>
		</a>
		
		<p>The <a href="https://epfo.eu/" target="_blank">European Party Funding Observatory</a> (EPFO) is the flagship project of the European Democracy Consulting Stiftung.</p>
		
		<p>Since 2019, European Democracy Consulting had produced a <a href="https://eudemocracy.eu/category/political-parties/european-parties" target="_blank">wide array of outputs</a> and made contributions to the discussion on European political parties. In particular, European Democracy Consulting had focused on <a href="https://eudemocracy.eu/a-smarter-funding-system-for-european-parties" target="_blank">party financing</a> and on <a href="https://eudemocracy.eu/category/transparency" target="_blank">transparency</a> — proposing numerous recommendations for both — and on the nexus between the two. This had led to yearly <a href="https://eudemocracy.eu/visualising-donations-and-contributions-2023" target="_blank">visualisations of donations and contributions</a>, using data from the Authority for European Political Parties and European Political Foundations (APPF).</p>
		
		<p>The next step in this effort was the development of stand-alone, permanent observatory of the funding of European political parties, which European public institutions had declined to build. </p>
		
		<p>In March 2022, European Democracy Consulting started compiling data with a view to developing an online platform providing up-to-date data and visualisations on the funding of European parties since the advent of public funding for European parties in 2004. This observatory would provide answers about the funding and expenses of European parties (thereby increasing transparency), and generate interest in these little-known parties that seek to represent us all (thereby enhancing democracy). </p>
		
		<p>In July 2023, the draft Observatory, along with associated domain names, was officially transferred to the European Democracy Consulting Stiftung, which took over its development and update. </p>
		
		<p>The European Party Funding Observatory was officially launched in December 2023 — read more in <a href="https://www.euractiv.com/section/politics/opinion/its-party-time/" target="_blank">our op-ed</a> published by Euractiv.</p>
		
		<h3>Initiative on Transparency for European Party Funding</h3>
		
		<a href="{base}/itef">
			<img src="{base}/img/logo_itef.png" alt="Logo Initiative on Transparency for European Party Funding" style="width:220px; float: right; margin-left:35px; margin-top:6px;"/>
		</a>
		
		<p>The <a href="{base}/itef">Initiative on Transparency for European party Funding</a> (ITEF) is a list of targeted policy proposals aimed at improving the transparency framework on European party funding.</p>
		
		<p>Political finance transparency is a core principle of democratic societies, and a precondition for political accountability. Information on the funding of political parties must not be merely published, but also accessible, contextualised, available in a timely manner, and easy to scrutinise.</p>
 
		<p>To remedy the absence of an official platform, EDCS launched the European Party Funding Observatory in 2023, covering 22 parties over more than 20 years, to provide citizens with increased transparency on the funding of European political parties. We used the experience from our work on the EPFO to draft concrete policy proposals.</p>
 
		<p>Developed in conjunction with stakeholders, ITEF was designed to improve transparency without additional burden on reporting entities. Instead, ITEF builds upon current reporting and publication requirements, and leverages digital tools for the benefit of all citizens.</p>
 
		<p>Read here our opinion piece in the <a href="https://euobserver.com/rule-of-law/ar0149ddf9" target="_blank">EU Observer</a>, and below is the full text of the initiative, updated following the entry into force of Regulation 2025/2445, in PDF format.</p>
		
		<a href="{base}/files/EDCS_-_Initiative_on_Transparency_for_European_party_Funding_v2.0.pdf" target="_blank">
			<img src="{base}/img/itef_cover.png" alt="Cover Initiative on Transparency for European Party Funding" style="width:40%; margin: auto; text-align: center"/>
		</a>
		
		<h2>Statutory information</h2>
		
		<p>The European Democracy Consulting Stiftung is registered as a non-profit foundation in Austria. Its number in the Austrian association register is 1456952063.</p>
		
		<p>The statutes of the European Democracy Consulting Stiftung can be found here:</p>
		
		<ul>
			<li><a href="{base}/files/statutes/EDCS-Statutes-DE.pdf" target="_blank">EDCS - Statuten</a> (DE, official)</li>
			<li><a href="{base}/files/statutes/EDCS-Statutes-EN.pdf" target="_blank">EDCS - Statutes</a> (EN, translated)</li>
		</ul>
		
		<h2>Financial transparency</h2>
		
		<p>Below is a summary of our income for the financial year 2025. For more detailed information, including on previous years, visit our <a title="Financial transparency" href="{base}/financial-transparency">financial transparency</a> page.</p>
		
		<script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></script>

		<tableau-viz id="tableauViz"       
		  src='https://public.tableau.com/views/EDCS-Financialinformation/Income?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'      
		  toolbar="bottom" hide-tabs width="800" height="600">
		</tableau-viz>
		
		<h2>Donations</h2>
		
		<p>The European Democracy Consulting Stiftung is a non-profit association and relies on donations for its work, in particular to pay technical contractors and run IT services. We therefore <strong>need your support</strong> for our projects.</p>
		
		<p>If you can afford to do so, please consider donating to the European Democracy Consulting Stiftung. Your donation will go directly to our projects.</p><br />
		
		<div style="margin: auto; text-align: center;">
			<script async
			  src="https://js.stripe.com/v3/buy-button.js">
			</script>
			
			<stripe-buy-button
			  buy-button-id="buy_btn_1Q3aEwF5eiMcSiKwiQ88e3j5"
			  publishable-key="pk_live_51NqWtKF5eiMcSiKwuYMYcMmRw8FZrPJ3W28swUepVowMV1S0cMZLUZLIIYIrdBAjl3gezjam9GFandOsRExmBtIo00HMYTFURc"
			>
			</stripe-buy-button>
		</div>
		
		<br />
		<p>Alternatively, you can donate with an ordinary bank transfer using the banking details below.</p>
		
		<ul>
			<li>IBAN: AT55 1200 0100 4082 2651</li>
			<li>BIC: BKAUATWW</li>
			<li>Bank: UniCredit Bank Austria AG</li>
		</ul>
		
		<p>Finally, you can make a project-specific donation to the <strong>European Party Funding Observatory</strong> using our dedicated <a href="https://www.betterplace.org/en/projects/128176-transparency-on-european-parties-at-last" target="_blank">crowdfunding page</a> or the button below:</p>
		
		<div class="iframecenter">
			<iframe title="Donation BetterPlace.org" frameborder="0" marginheight="0" marginwidth="0" src="https://project-widget.betterplace.org/projects/128176?l=en&amp;donate_button=true" width="320" height="103" style="border: 0; padding-top:20px; margin:0;">&lt;a href=&#39;https://www.betterplace.org/en/projects/128176-european-party-funding-observatory&#39; target=&#39;_blank&#39;&gt;“European Party Funding Observatory”&lt;/a&gt; – learn more and donate on betterplace.org.</iframe>
		</div>
		
		<h2>Contact</h2>
		
		<p>
			For more information about the European Democracy Consulting Stiftung and its projects, do not hesitate to contact us using our <a
					href="https://cd82914a.sibforms.com/serve/MUIFAKOLm6UBcWkjJED_PfQkaAGrzarS-72PgMqppbYoAkfixvP60tlKrpivGcfm3IQQWnxoxYPV3wwQW7G0NoGWZ-sEqzd6IppYxEitITLC3u6TrO_iiN02yYqzFtNdYFrFG45Pg4dSZX-x2eSEdSQmjMubSeCojblzHlZoRNSJYI0ajHWVAlmFtLFO2ZGbOBUyhMnKqTGoRdCL"
					target="_blank">contact form</a> or by email at contact [at] edcstiftung.eu.
		</p>
	</hgroup>
	
	<TableOfContents />
</article>
