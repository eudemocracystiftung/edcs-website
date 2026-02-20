<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
		
    page_title.set("Impressum");
</script>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>Impressum</h1>
		<h2>About us</h2>
		<p>
			The European Democracy Consulting Stiftung is an Austrian non-profit association advancing the study of European institutions and democracy.
		</p>
		<img src="{base}/img/logo_edcs.png" style="height: 200px;" alt="Logo European Democracy Consulting Stiftung" /> 
		<p>
			European Democracy Consulting Stiftung<br />
			Vally-Weigl-Gasse 1, 1100 Wien, Austria<br />
			Association registry number: 1456952063<br />
			contact [at] edcstiftung.eu<br />
			<a href="https://edcstiftung.eu" target="_blank">https://edcstiftung.eu</a>
		</p>
		<h2>Funding</h2>
		<p>
			The European Democracy Consulting Stiftung is funded by grants and private donations, including financial donations and in-kind contributions and free services.
		</p>
		<p>
			Since its inception, the European Democracy Consulting Stiftung has received in-kind contributions and free services for its IT operations from <a href="https://eudemocracy.eu/" target="_blank">European Democracy Consulting</a>; these services are detailed in our statements of accounts.
		</p>
		<p>
			In 2022, the European Democracy Consulting Stiftung received, for the development of its European Party Funding Observatory (then developed by European Democracy Consulting), a €5,000 grant from Volt There, a political foundation in the Netherlands. Subsequently, Volt There supported the development of the EPFO's Phase 2 with three grants totalling €4,000.
		</p>
		<img src="{base}/img/logo_volt_there.svg" alt="Logo Volt There" style="height:90px;" />
		<p>
			Volt There Stichting<br />
			Koninginnegracht 7, 2514AA, Den Haag, Netherlands<br />
			<a href="https://voltthere.eu/" target="_blank">https://voltthere.eu/</a>
		</p>
		<p>
			Starting in October 2025, VPSBG has been providing us with free access to a VPS, which hosts a detection service to keep abreast of changes on the websites of the European Parliament and APPF. Additionally, we are currently working to build a chatbot using this VPS.
		</p>
		<img src="{base}/img/logo_vpsbg.svg" alt="Logo VPSBG" style="height:60px;" />
		<p>
			VPS.BG Ltd.<br />
			Blvd. Bulgaria 58, ent. C, fl. 4, office 15; Sofia 1680, Bulgaria<br />
			<a href="https://www.vpsbg.eu/" target="_blank">https://www.vpsbg.eu/</a>
		</p>
		<p>
			Grantors and donors are not responsible for the content of this website and of our projects, and cannot be held liable.
		</p>

		<h2>Design and data visualisations</h2>
		<p>
			This website is based on the design of the European Party Funding Observatory by TULP Interactive, a data visualisation agency based in the Netherlands.
		</p>
		<img src="{base}/img/logo_tulp_interactive.png" alt="Logo TULP Interactive" style="height:70px;" />
		<p>
			TULP interactive<br />
			Rieteiland 2, 2285JV Rijswijk, Netherlands<br />
			<a href="https://tulpinteractive.com/" target="_blank">https://tulpinteractive.com/</a>
		</p>

		<h2>Copyright</h2>
		<p>
			The content, structure and design of this website is copyrighted. Printing items, graphics or
			abstracts is permitted, provided the European Democracy Consulting Stiftung is named as the source
			of the material.
		</p>
		<h3>Copyright notice</h3>
		<p>
			The website of the European Democracy Consulting Stiftung is licensed under a
			<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"
				>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a
			>.
		</p>
		<p>
			<img src="{base}/img/logo_creative_commons.png" alt="Logo Creative Commons Licence BY-NC-SA 4.0" />
		</p>
		<p>
			Permissions
			beyond the scope of this license may be available at
			contact [at] edcstiftung.eu.
		</p>
		<h3>Your rights and obligations</h3>
		<p>You are free to:</p>
		<ul>
			<li>
				<b>Share</b> — copy and redistribute the material in any medium or format
			</li>
			<li>
				<b>Adapt</b> — remix, transform, and build upon the material
			</li>
		</ul>
		<p>The licensor cannot revoke these freedoms as long as you follow the license terms.</p>
		<p>Under the following terms:</p>
		<ul>
			<li>
				<b>Attribution</b> — You must give appropriate credit, provide a link to the license, and indicate
				if changes were made. You may do so in any reasonable manner, but not in any way that suggests
				the licensor endorses you or your use.
			</li>
			<li>
				<b>NonCommercial</b> — You may not use the material for commercial purposes.
			</li>
			<li>
				<b>ShareAlike</b> — If you remix, transform, or build upon the material, you must distribute
				your contributions under the same license as the original.
			</li>
			<li>
				<b>No additional restrictions</b> — You may not apply legal terms or technological measures that
				legally restrict others from doing anything the license permits.
			</li>
		</ul>
		<p>
			Please send a copy or a hyperlink to contact [at] edcstiftung.eu.
		</p>

		<h2>Liability notice</h2>
		<p>
			The information on this website is updated regularly. Nevertheless, data may change in the
			meantime. Therefore, we assume no liability for the topicality, accuracy or completeness of
			the information provided on this website. In case of questions, we encourage
			you to notify us using tour <a
					href="https://cd82914a.sibforms.com/serve/MUIFAKOLm6UBcWkjJED_PfQkaAGrzarS-72PgMqppbYoAkfixvP60tlKrpivGcfm3IQQWnxoxYPV3wwQW7G0NoGWZ-sEqzd6IppYxEitITLC3u6TrO_iiN02yYqzFtNdYFrFG45Pg4dSZX-x2eSEdSQmjMubSeCojblzHlZoRNSJYI0ajHWVAlmFtLFO2ZGbOBUyhMnKqTGoRdCL"
					target="_blank">contact form</a> or at contact [at] edcstiftung.eu.
		</p>
	</div>

	<TableOfContents />
</article>
