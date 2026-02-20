<script>
	import TableOfContents from '../../lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
		
    page_title.set("Support us");
</script>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>Support us</h1>
		<p>
			The European Democracy Consulting Stiftung is <b>funded entirely by private donations</b>. We therefore need 
			your support for its further development.
		</p>
		
		<p>If you can afford to do so, please consider donating to the European Democracy Consulting Stiftung via <a href="https://donate.stripe.com/6oEbK73N82BS1dCeUU" target="_blank">Stripe</a>. Your donation will go directly to our projects.</p><br />
		
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
		
		<p>You can also make a project-specific donation to the <strong>European Party Funding Observatory</strong> using our dedicated crowdfunding page on <a href="https://www.betterplace.org/en/projects/128176-transparency-on-european-parties-at-last">BetterPlace.org</a>, either as a one-time donation or on a recurring basis. Recurring donations provide planning security, flexibility, and independence from temporary third-party funding.</p>
		
		<div class="iframecenter">
			<iframe title="Donation BetterPlace.org" frameborder="0" marginheight="0" marginwidth="0" src="https://project-widget.betterplace.org/projects/128176?l=en" width="320" height="320" style="border: 0; padding:0; margin:0;">&lt;a href=&#39;https://www.betterplace.org/en/projects/128176-european-party-funding-observatory&#39; target=&#39;_blank&#39;&gt;“European Party Funding Observatory”&lt;/a&gt; – learn more and donate on betterplace.org.</iframe>
		</div>
		
		<p>
			Finally, if you wish to make a donation via BetterPlace.org directly from this website, you can use the form below.
		</p>
		<script type="text/javascript">
		  /* Configure at https://www.betterplace.org/en/manage/projects/128176-transparency-on-european-parties-at-last/iframe_donation_form/new */
		  var _bp_iframe        = _bp_iframe || {};
		  _bp_iframe.project_id = 128176; /* REQUIRED */
		  _bp_iframe.lang       = 'en'; /* Language of the form */
		  _bp_iframe.width = 600; /* Custom iframe-tag-width, integer */
		  _bp_iframe.color = '003399'; /* Button and banderole color, hex without "#" */
		  _bp_iframe.background_color = 'ffffff'; /* Background-color, hex without "#" */
		  _bp_iframe.default_amount = 50; /* Donation-amount, integer 1-99 */
		  _bp_iframe.recurring_interval = 'single'; /* Interval for recurring donations, string out of single, monthly, and yearly */
		  _bp_iframe.bottom_logo = true;
		  (function() {
		    var bp = document.createElement('script'); bp.type = 'text/javascript'; bp.async = true;
		    bp.src = 'https://betterplace-assets.betterplace.org/assets/load_donation_iframe.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(bp, s);
		  })();
		</script>
		<div id="betterplace_donation_iframe" style="background: transparent url('https://www.betterplace.org/assets/new_spinner.gif') 275px 20px no-repeat;" class="donationformcenter">
			<strong><a href="https://www.betterplace.org/en/donate/platform/projects/128176-transparency-on-european-parties-at-last">Donate now for “Transparency on European parties! (at last)”. The donation is processed by our partner betterplace.org</a></strong>
		</div>
		<p>
			Thank you very much for your support to this project, to research on European institutions, and to European democracy.
		</p>
	</div>
	
	<!-- <TableOfContents /> -->
</article>