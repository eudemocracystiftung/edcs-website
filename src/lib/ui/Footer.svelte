<script>
	import { base } from '$app/paths';
</script>

<footer class="w-full sm:w-full bg-primary-color text-white font-light text-sm py-4">
	<div class="container mx-auto p-3 flex justify-around">
		<div>
			<p class="w-64">
				<a href="{base}/">
					<img
						src="{base}/img/logo_edcs_white.png"
						class="h-32 center"
						alt="Logo European Democracy Consulting Stiftung"
					/>
				</a><br />
				The <span class="font-bold">European Democracy Consulting Stiftung</span> is a non-profit association advancing the study of European institutions and democracy.<br /><br />
			</p>
			 <div class="row">
	  			<div class="column">
	   				<a href="https://bsky.app/profile/eudemocracy.bsky.social" target="_blank"><img src="{base}/img/bluesky_white.svg" alt="Logo Bluesky" width="30px" /></a>
	  			</div>
	  			<div class="column">
	    			<a href="https://www.linkedin.com/company/european-democracy-consulting" target="_blank"><img src="{base}/img/linkedin_white.png" alt="Logo LinkedIn" width="30px" /></a>
	  			</div>
			</div> 	
		</div>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/about">About</a></li>
			<li><a href="{base}/financial-transparency">Financial transparency</a></li>
			<li><a href="{base}/privacy">Privacy & data policy</a></li>
			<li><a href="{base}/impressum">Impressum</a></li>
			<li>
				<a
					href="https://cd82914a.sibforms.com/serve/MUIFAKOLm6UBcWkjJED_PfQkaAGrzarS-72PgMqppbYoAkfixvP60tlKrpivGcfm3IQQWnxoxYPV3wwQW7G0NoGWZ-sEqzd6IppYxEitITLC3u6TrO_iiN02yYqzFtNdYFrFG45Pg4dSZX-x2eSEdSQmjMubSeCojblzHlZoRNSJYI0ajHWVAlmFtLFO2ZGbOBUyhMnKqTGoRdCL"
					target="_blank">Contact</a
				>
			</li>
			<li><a href="{base}/support">Support us</a></li>
			<li><br /></li>
			<li>
				<a 
					title="Donate for “Transparency on European parties! (at last)”!" target="_blank" href="https://www.betterplace.org/en/projects/128176-transparency-on-european-parties-at-last"><img style="border:0px" alt="Donate now!" width="160" height="100" src="{base}/img/betterplace.png" /></a
				>
			</li>
		</ul>
	</div>
</footer>

<style>
	a {
		color: white;
		text-decoration: none;
		font-size: var(--scale-0);
		word-break: normal;
	}

	ul {
		margin: 0;
		list-style: none;
	}
	.column {
	  float: left;
	  width: 20%;
	  padding: 5px;
	}
	.row::after {
	  content: "";
	  clear: both;
	  display: table;
	} 
</style>
