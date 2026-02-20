<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
		
    page_title.set("Privacy & data policy");
</script>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>Privacy & Data Policy</h1>
		<p>
			This privacy policy will explain how we use the personal
			data we collect from you when you use our website.
		</p>

		<h2>What data do we collect?</h2>
		<p>For its functioning, this website collects the following data:</p>
		<ul>
			<li>IP address</li>
			<li>Browser User Agent</li>
		</ul>
		<p>
			If you use the contact form or write to us by email, we also collect the optional information
			you provide, such as your email address and other data.
		</p>

		<h2>How do we obtain your data?</h2>
		<p>
			By connecting to our website and using its functionalities, you directly provide all the data
			we collect. We collect data and process data when you:
		</p>
		<ul>
			<li>Use or view our website; and</li>
			<li>Voluntarily provide feedback or questions via our contact form or by email.</li>
		</ul>
		<p>We do not indirectly collect data about you.</p>

		<h2>How will we use your data?</h2>
		<p>The European Democracy Consulting Stiftung collects your data so that we can:</p>
		<ul>
			<li>Operate our website and better understand its users and their interests; and</li>
			<li>Respond to your message when you write to us (should you provide your contact details)</li>
		</ul>

		<h3>Server</h3>
		<p>Our website is hosted by our processor STRATO AG.</p>
		<p>
			Connection data are processed to provide and to deliver the website. Data are not stored
			beyond access for the mere purpose of delivery and provision of the website. However, our
			processor keeps connection data for security purposes. The duration of processing for security
			purposes varies and ends with the necessity of the security measures. Furthermore, our
			processor anonymizes collected data immediately after such data were collected and provides us
			with statistics for analysis containing anonymous data. We use these statistics for debugging
			and the sophistication of our website.
		</p>
		<p>
			The legal basis of processing is the absolute technical necessity to provide and deliver the
			"website" service which you have explicitly requested according to § 165 Abs. 3 TKG 2021 by
			visiting the website.
		</p>
		<p>Company information:</p>
		<ul>
			<li>STRATO AG</li>
			<li>Otto-Ostrowski-Straße 7, 10249 Berlin, Germany</li>
			<li>
				<a href="https://www.strato.de/ueber-uns/" target="_blank"
					>https://www.strato.de/ueber-uns/</a
				>
			</li>
		</ul>

		<h3>CDN</h3>
		<p>
			We use the services of a Content Delivery Network (CDN). A CDN stores and delivers content, including images and fonts, on behalf
			of a website to reduce loading time and allow the website’s server to handle more requests.
			When files are retrieved from a CDN, data from the user’s end device is also transmitted to
			the CDN operator. This is not technically possible otherwise, and includes the IP address and
			the browser user agent of the end device, which are regarded as personal data by the General
			Data Protection Regulation.
		</p>
		<p>CDN services are provided by our processor BunnyWay.</p>
		<p>Company information:</p>
		<ul>
			<li>BunnyWay d.o.o.</li>
			<li>Cesta komandanta Staneta 4A, 1215 Medvode, Slovenia</li>
			<li><a href="https://bunny.net/about/" target="_blank">https://bunny.net/about/</a></li>
		</ul>

		<h3>Analytics</h3>
		<p>
			We use Matomo, a privacy-minded, analytics software, for the collection and analysis of user
			data. Matomo On-Premise is installed on our Strato servers, in Germany, and your data are
			therefore not stored on or transfered to Matomo or other servers.
		</p>
		<p>
			Matomo is configured to anynomise and aggregate user data, so that it may not be tied to users
			but only provide statistics about the website's use.
		</p>
		<p>Data privacy and retention for data stored in Matomo:</p>
		<ul>
			<li>the last bytes of visitors IP addresses are anonymised (192.168.xxx.xxx);</li>
			<li>
				the URL from which you come to our website (referrer) has its query parameters deleted;
			</li>
			<li>data collection does not use cookies;</li>
			<li>all visits and actions raw data are deleted after 90 days; and</li>
			<li>all aggregated reports are deleted after 12 months.</li>
		</ul>
		<p>Company information:</p>
		<ul>
			<li>ePrivacy Holding GmbH</li>
			<li>Große Bleichen 21, 20354 Hamburg, Germany</li>
			<li><a href="https://matomo.org/about/" target="_blank">https://matomo.org/about/</a></li>
		</ul>

		<h3>Contact form</h3>
		<p>
			You can contact us by using a <a href="https://cd82914a.sibforms.com/serve/MUIFAKOLm6UBcWkjJED_PfQkaAGrzarS-72PgMqppbYoAkfixvP60tlKrpivGcfm3IQQWnxoxYPV3wwQW7G0NoGWZ-sEqzd6IppYxEitITLC3u6TrO_iiN02yYqzFtNdYFrFG45Pg4dSZX-x2eSEdSQmjMubSeCojblzHlZoRNSJYI0ajHWVAlmFtLFO2ZGbOBUyhMnKqTGoRdCL" target="_blank">contact form</a> provided 
			on our website or by email. While using the contact form, you may be requested to confirm you are a human 
			being via an automated process.
		</p>
		<p>
			We will store the information provided in the form, but you are under no obligation to provide
			personal information. If you wish for a reply, a contact email will be necessary.
		</p>
		<p>
			We use Brevo, a GDPR-compliant customer relationship management platform, to manage the contact form.
		</p>
		<p>Company information:</p>
		<ul>
			<li>Brevo / Sendinblue S.A.S.</li>
			<li>106 boulevard Haussmann, 75008 Paris, France</li>
			<li><a href="https://www.brevo.com/gdpr/" target="_blank">https://www.brevo.com/gdpr/</a></li>
		</ul>

		<h2>How do we store your data?</h2>
		<p>We store the above data on the servers of our processors STRATO, Brevo, and BunnyWay.</p>
		<p>STRATO is a German company and exclusively stores its data in its own data centres in Germany.</p>
		<p>Brevo is a French company based in Paris and stores its data in its own data centres in France, close to Paris.</p>
		<p>
			BunnyWay is a Slovenian company. By nature of a CDN, BunnyWay spreads its data across data centres, in order to serve users
			with data as close to them as possible. However, by set up, all these centres are located in
			the European Union.
		</p>

		<h2>Marketing</h2>
		<p>
			The European Democracy Consulting Stiftung does not use, share or sell visitors’ data for marketing purposes.
		</p>

		<h2>What are your data protection rights?</h2>
		<p>
			While we do not collect any identifiable information, we would like to make sure you are fully
			aware of all of your data protection rights.
		</p>
		<p>Every user is entitled to the following:</p>
		<ul>
			<li>
				<b>The right to access</b> – You have the right to request that the European Democracy Consulting Stiftung
				provide copies of your personal data. We may charge you a small fee for this service.
			</li>
			<li>
				<b>The right to rectification</b> – You have the right to request that the European Party Funding
				Observatory correct any information you believe is inaccurate. You also have the right to request
				that the European Democracy Consulting Stiftung complete the information you believe is incomplete.
			</li>
			<li>
				<b>The right to erasure</b> – You have the right to request that the European Democracy Consulting Stiftung
				erase your personal data, under certain conditions.
			</li>
			<li>
				<b>The right to restrict processing</b> – You have the right to request that the European Party
				Funding Observatory restrict the processing of your personal data, under certain conditions.
			</li>
			<li>
				<b>The right to object to processing</b> – You have the right to object to the European Party
				Funding Observatory’s processing of your personal data, under certain conditions.
			</li>
			<li>
				<b>The right to data portability</b> – You have the right to request that the European Party
				Funding Observatory transfer the data that we have collected to another organization, or directly
				to you, under certain conditions.
			</li>
		</ul>
		
		<div id="matomo-opt-out"></div>
		<script src="https://epfo.eu/analytics/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1"></script>
      
		<p>
			If you make a request, we have one month to respond to you. If you would like to exercise any
			of these rights, please contact us at our email: contact [at] edcstiftung.eu.
		</p>

		<h2>Cookies</h2>
		<p>
			Cookies are text files placed on your computer to collect standard Internet log information
			and visitor behaviour information. For further information, visit <a
				href="https://allaboutcookies.org/"
				target="_blank">allaboutcookies.org</a
			>.
		</p>
		<p>
			We do not use cookies, either for the functioning of the Observatory or for analytics purposes
			via Matomo.
		</p>
		<p>
			For better privacy, we also encourage you to use a privacy-respecting browser, such as <a
				href="https://www.mozilla.org/en-US/firefox/new/"
				target="_blank">Firefox</a
			> or the <a
				href="https://mullvad.net/en/browser"
				target="_blank">Mullvad Browser</a
			>.
		</p>

		<h2>Privacy policies of other websites</h2>
		<p>
			The website of the European Democracy Consulting Stiftung contains links to other websites. Our privacy policy
			applies only to our website, so if you click on a link to another website, you should read
			their privacy policy.
		</p>

		<h2>Changes to our privacy policy</h2>
		<p>
			We keep our privacy policy under regular review and place any update on this web page. This
			privacy policy was last updated on 21 October 2023.
		</p>

		<h2>How to contact us</h2>
		<p>
			If you have any questions about the European Democracy Consulting Stiftung’s privacy policy, the
			data we hold on you, or you would like to exercise one of your data protection rights, please
			do not hesitate to contact us using our <a
					href="https://cd82914a.sibforms.com/serve/MUIFAKOLm6UBcWkjJED_PfQkaAGrzarS-72PgMqppbYoAkfixvP60tlKrpivGcfm3IQQWnxoxYPV3wwQW7G0NoGWZ-sEqzd6IppYxEitITLC3u6TrO_iiN02yYqzFtNdYFrFG45Pg4dSZX-x2eSEdSQmjMubSeCojblzHlZoRNSJYI0ajHWVAlmFtLFO2ZGbOBUyhMnKqTGoRdCL"
					target="_blank">contact form</a> or by email at contact [at] edcstiftung.eu.
		</p>
	</div>

	<TableOfContents />
</article>
