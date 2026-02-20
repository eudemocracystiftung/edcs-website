<script>
	import TableOfContents from '$lib/ui/TableOfContents.svelte';
	import { base } from '$app/paths';
	import { page_title } from '$lib/stores';
	
	import SvelteSeo from "svelte-seo";
		
    page_title.set("ITEF");
</script>

<SvelteSeo
	title="Initiative on Transparency for European party Funding | EDCS"
	description="ITEF is a set of policy proposals developed by the European Democracy Consulting Stiftung to improve transparency on the funding of European political parties."
	canonical="https://edcstiftung.eu/itef"
	keywords="european political party, european party funding, transparency, itef, european democracy"
	themeColor="#003399"
	openGraph={{
		title: "EDCS | Initiative on Transparency for European party Funding",
		determiner: "the",
		locale: "en-UK",
		description:
			"ITEF is a set of policy proposals developed by the European Democracy Consulting Stiftung to improve transparency on the funding of European political parties.",
		image: "https://edcstiftung.eu/img/logo_itef_og.png",
		url: "https://edcstiftung.eu/itef",
		type: "article",
		images: [
			{
				url: "https://edcstiftung.eu/img/logo_itef_og.png",
				width: 1200,
				height: 630,
				alt: "Logo Initiative on Transparency for European party Funding"
			},
		],
		site_name: "European Democracy Consulting Stiftung",
	}}
	twitter={{
		card: "summary_large_image",
		title: "EDCS | Initiative on Transparency for European party Funding",
		description:
			"ITEF is a set of policy proposals developed by the European Democracy Consulting Stiftung to improve transparency on the funding of European political parties.",
		image: "https://edcstiftung.eu/img/logo_itef_og.png",
		imageAlt: "Logo Initiative on Transparency for European party Funding",
	}}
/>

<article class="grid grid-cols-1 lg:grid-cols-[1fr_400px]">
	<div class="content">
		<h1>Initiative on Transparency for European party Funding</h1>
		<img src="{base}/img/logo_itef.png" alt="Logo Initiative on Transparency for European Party Funding" style="width:220px; align:center; margin:auto; padding-top:20px; padding-bottom:20px;"/>
		
		<p>
			The Initiative on Transparency for European party Funding is a set of policy proposals developed by the European Democracy Consulting Stiftung to improve transparency on the funding of European political parties and foundations.
		</p>
		
		<p>
			Here is our opinion piece in the <a href="https://euobserver.com/rule-of-law/ar0149ddf9" target="_blank">EU Observer</a>, and here is our list of ITEF proposals in <a href="{base}/files/EDCS_-_Initiative_on_Transparency_for_European_party_Funding_v2.0.pdf" target="_blank">PDF</a> format.
		</p>
		
		<p class="footnote">Note: our ITEF proposals were reviewed and updated in February 2026, to account for the new legal framework laid out in the new Regulation 2025/2445.</p>
		
		<h2>Executive Summary</h2>
		<p>
			The transparency of political finance is a core principle of, and often a major challenge for, democratic societies. Data on the funding of political activities must not only be published online, but should also be complete, contextualised, available in a timely manner, directly accessible, and easy to scrutinise by civil society and the general public. These principles form the preconditions for accountability.
		</p>
		<p>
			Adopted in late 2025, <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202502445" target="_blank">Regulation 2025/2445</a> on the statute and funding of European political parties and European political foundations (recast) contains the legal provisions applicable to these entities. This includes the transmission of information by European political parties and foundations to the Authority on European political parties and European political foundations (APPF) and to the European Parliament (EP), as well as the publication of specific data by these two bodies.
		</p>
		<p>
			Unfortunately, the current transparency regime falls short of modern standards and best practices found across the European Union. As a result, information on the financing of European political parties and foundations is incomplete, hard to access, often only available long after the facts, and almost always provided as bare tables in bland PDF documents. For instance, the final amounts of European taxpayer's money received by European parties for the year 2023 will not be available before mid 2026.
		</p>
		<blockquote>
		<div>
  			<p>
				These proposals aims at improving transparency without additional burden on reporting entities.
			</p>
		</div>	
		</blockquote>
		<p>
			This initiative identifies specific proposals to improve transparency on the funding of European political parties and foundations. However, in order to allow for swifter reform, it stays clear of more substantive issues and focuses instead on reporting and disclosure. These are often small and technical changes to legal provisions that can bring about notable improvements in transparency, and that may be supported by all those who are committed to the transparency of political finance.
		</p>
		<p>
			Most importantly, this report was designed with the goal of improving transparency without additional burden on reporting entities. Instead, it seeks to build upon current reporting and publication requirements, and to leverage digital tools for the benefit of all citizens.
		</p>
		<p>
			In order for these proposals to account for the views of those most concerned, the European Democracy Consulting Stiftung held a technical discussion with European political parties in January 2025, and additional written contributions were later received.
		</p>
		<p>
			European parties overwhelmingly voiced their support for more transparency, and called for transparency measures to be clearly spelled out in the law, rather than be based on voluntary norms or practices. 
		</p>
		<p>
			In particular, parties called for additional clarity on requirements from the APPF and the Financing of Political Parties and Foundations Unit of the European Parliament's Directorate-General for Finance (DG FINS). Recurring complaints included redundant reporting requests, a lack of predictability in what was expected of them, and a lack of feedback and explanations when reported information was later amended by these entities.
		</p>
		<p>
			We believe that the policy proposals of this initiative, if implemented properly and in conjunction with European parties and other stakeholders, can bolster transparency on European party funding and, as a result, strengthen our common European democracy.
		</p>
		<p>
			Finally, we acknowledge that the co-legislators recently came to an agreement on the recast of the Regulation on European political parties, following over four years of discussions, and we respect their compromise. However, the 2021 recast proposal of the Commission did not review provisions, and the co-legislators were therefore not able to amend these provisions either. Our proposal also rests on a clear legal precedent when, in 2019, technical amendments were adopted less than a year after a large-scale review that had been years in the making.
		</p>
		
		<h2>Chapter 1 - Deadlines</h2>
		<h3 id="proposal_1">#1. Ensure the timely publication of donations ahead of European elections (Art. 25 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p id="footnote-root-1">
			European political parties and foundations are required to report donations made within six months of elections to the European Parliament to the APPF on a weekly basis (Article 25.3), by providing the information usually reported for donations (Article 25.2). The APPF is then required to publish the names of donors and their corresponding donations (Article 39.1.e).<sup><a href="#footnote-1">1</a></sup>
		</p>
		<blockquote>
			<p>
				The Regulation does not impose a deadline for expedited publication.
			</p>
		</blockquote>
		<p>
			While the APPF has worked to publish these donations on an expedited basis (usually a few working days), the Regulation itself does not impose a deadline on the APPF for the publication of this information, despite the political importance of electoral finance and the necessity of providing timely information to voters.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p id="footnote-root-2">
			We propose to amend Art. 39.1 to request that the APPF publish donations made within six months of elections to the European Parliament within a few days of their notification to the APPF. The APPF's workload can be eased in this regard with the use of online reporting and disclosure tools – both for European parties and foundation to report to the APPF via an online platform, and for the APPF to easily publish this information on its website.<sup><a href="#footnote-2">2</a></sup>
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the publication of donations made within six months of elections to the European Parliament could be set to two working days.
		</p>
		
		<h3 id="proposal_2">#2. Ensure the timely publication of high-value donations (Art. 25 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			European political parties and foundations are required to immediately report accepted single donations above €12,000 to the APPF (Article 25.4), by providing the information usually reported for donations (Article 25.2). The APPF is then required to publish the names of donors and their corresponding donations (Article 39.1.e).
		</p>
		<p>
			As above, while the APPF has worked to publish these donations on an expedited basis, the Regulation itself does not impose a deadline on the APPF for the publication of this information, despite the political importance of high-value donations.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p id="footnote-root-3">
			We propose to amend Art. 39.1 to request that the APPF publish single donations above the agreed threshold within a few days of their notification to the APPF. As for the previous recommendation, the APPF's workload can be eased in this regard with the use of online reporting and disclosure tools – both for European parties and foundation to report to the APPF via an online platform, and for the APPF to easily publish this information on its website.<sup><a href="#footnote-3">3</a></sup>
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the publication of single donations above the agreed threshold could be set to two working days.
		</p>
		
		<h3 id="proposal_3">#3. Provide a deadline for the publication of documents by the APPF and the European Parliament (Art. 39.1 and 39.2)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Transparency provisions in Regulation 2025/2445 require the APPF and the European Parliament to publish information regarding European political parties and foundations, including their public funding, the donations and contributions they receive, or their list of member parties or organisations.
		</p>
		<p>
			However, while deadlines often exist for the provision of this information to the APPF and Parliament, no deadlines exist for the publication of this information by the APPF and Parliament. 
		</p>
		<blockquote>
			<p>
				Donations made early in the year are not available to the public for two years.
			</p>
		</blockquote>	
		<p>
			For the financial year 2019, for instance, information on donations was provided by European parties and foundations by the end of June 2020 at the latest. Yet, it was not until late February 2021, another eight months later, that a consolidated list of donations and contributions was published by the APPF. For the financial year 2018, this publication took close to a year. This means that donations made early in a financial year were not available to the public for over two years.
		</p>
		<p>
			Here is a list of the information requested for publication from the APPF or European Parliament, along with their applicable deadline (Articles 39.1 and 39.2):
		</p>
		<table>
		<tbody>
		 	<tr>
			    <th width="50%">Item</th>
			    <th>Current deadline</th>
			  </tr>
			  <tr>
			    <td>Registration documents (39.1.a)</td>
			    <td>Four weeks after the APPF has adopted its decision</td>
			  </tr>
			  <tr>
			    <td>Applications not approved (39.1.b)</td>
			    <td>Four weeks after the APPF has adopted its decision</td>
			  </tr>
			  <tr>
			    <td>Annual amounts of public funding paid out (39.1.c)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Annual financial statements and external audit reports, and final reports on work programmes or actions (39.1.d)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Information on donations, contributions, and self-generated resources (39.1.e,f,g)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Sanctions and their justification (39.1.i,j)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Technical support provided to parties (39.1.k)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Evaluation by the EP of the implementation of Regulation 2025/2445 (39.1.l)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>List of MEPs members of European parties (39.1.m)</td>
			    <td></td>
			  </tr>
			  <tr>
			    <td>Legal persons members of European parties (39.2)</td>
			    <td id="footnote-root-4">Unclear (refers to Art. 11.6, which does not refer to obligations on the APPF or EP)<sup><a href="#footnote-4">4</a></sup></td>
			  </tr>
			  <tr>
			    <td>Total number of individual members (39.2)</td>
			    <td></td>
			  </tr>
		</tbody>
		</table> 
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art.39 to include specific and reasonable deadlines for all documents to be published by the APPF or the European Parliament. A disclaimer may be added, where relevant, to indicate that information is under review, as the APPF already does for its expedited publication of donations ahead of elections to the European Parliament or single donations above €12,000.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadlines could be as follows:
		</p>
		<table>
		<tbody>
		 	<tr>
			    <th width="50%">Item</th>
			    <th>Current deadline</th>
			  </tr>
			  <tr>
			    <td>Annual amounts of public funding paid out (39.1.c)</td>
			    <td>As soon as amounts are determined</td>
			  </tr>
			  <tr>
			    <td>Annual financial statements and external audit reports, and final reports on work programmes or actions (39.1.d)</td>
			    <td>1 week after yearly submission</td>
			  </tr>
			  <tr>
			    <td>Information on donations, contributions, and self-generated resources (39.1.e,f,g)</td>
			    <td id="footnote-root-5">1 week after quarterly reporting<sup><a href="#footnote-5">5</a></sup></td>
			  </tr>
			  <tr>
			    <td>Sanctions and their justification (39.1.i,j)</td>
			    <td>1 week after adoption</td>
			  </tr>
			  <tr>
			    <td>Technical support provided to parties (39.1.k)</td>
			    <td>1 month after end of financial year</td>
			  </tr>
			  <tr>
			    <td>Evaluation by the EP of the implementation of Regulation 2025/2445 (39.1.l)</td>
			    <td>1 week following report adoption</td>
			  </tr>
			  <tr>
			    <td>List of MEPs members of European parties (39.1.m)</td>
			    <td>1 week after receiving data from a party</td>
			  </tr>
			  <tr>
			    <td>Legal persons members of European parties (39.2)</td>
			    <td>1 week after notification of change</td>
			  </tr>
			  <tr>
			    <td>Total number of individual members (39.2)</td>
			    <td>1 week after receiving data from a party</td>
			  </tr>
		</tbody>
		</table> 
		
		<h3 id="proposal_4">#4. Publish financial documents following their submission to the APPF (Art. 28.1 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			European parties and foundations are required to submit their financial documents within six months of the end of the financial year, or by 30 June of year N+1 (Art. 28.1).
		</p>
		<blockquote>
			<p>
				The most recent audit documents cover the 2023 and were uploaded in April 2025, or 16 months later.
			</p>
		</blockquote>
		<p>
			However, these documents are not made available to the general public by the European Parliament until much later. For instance, as of February 2026, the most recent audit documents and financial statements cover the financial 2023 and were uploaded in April 2025, or 16 months following the end of the financial year. This delay is particularly detrimental to transparency. Documents for the financial year 2024, shared at the latest by end of June 2025, are still not available.
		</p>
		<p>
			Meanwhile, and despite the absence of clear legal provisions to this effect, the APPF has regularly published donations in an expedited manner before proceeding to their verification, labeling them as "subject to further scrutiny by the Authority". This positive step allows for increased transparency, as information is made available in a timely manner, while making it clear to citizens that information may be amended following review.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39 to request that audit documents and financial statements be published upon their reception by the APPF. As is already common practice, these documents can be labeled as "subject to further scrutiny".
		</p>
		
		<h3 id="proposal_5">#5. Provide a deadline for the publication of the annual report of the Director of the APPF (Art 8.10)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Every year, the Director of the APPF is required to submit a report to the European Parliament, the Council and the Commission on the activities of the Authority (Art. 8.10). However, no deadline is provided in Regulation 2025/2445 for the submission of this report or its publication.
		</p>
		<p>
			While the timely publication of recent reports has improved, previous activity reports took close to a year before being made available.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 8.10 to request that this report be submitted by a fixed deadline following the end of the calendar year, and be made available on the APPF's website alongside its communication to the recipient institutions.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the submission and publication of the annual report could be two months following the end of the financial year.
		</p>
		
		<h3 id="proposal_6">#6. Scatter the deadlines for the publication of financial documents by European parties and foundations, and shorten the deadline for the reporting of donations and contributions (Art. 28.1 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Following the end of the financial year (31 December), European parties and foundations have six months to provide their annual financial statements, an external audit report on the annual financial statements, and the list of donors and contributors and their corresponding donations or contributions (Art. 28.1).
		</p>
		<blockquote>
			<p>
				Bundling donations with audits only adds an unnecessary delay to the release of donations.
			</p>
		</blockquote>
		<p>
			However, establishing and auditing financial statements takes time, while donations and contributions are usually recorded on a rolling basis as they are received. Therefore, bundling the list of donations and contributions with financial statements and audits only adds an unnecessary delay to the release of data on donations and contributions.
		</p>
		<p>
			In addition to providing this information in a more timely manner, scattering deadlines means that the APPF can start processing data on donations and contributions earlier in the year, instead of receiving all financial data at once.
		</p>
		<p id="footnote-root-6">
			Across the EU, national parties – usually receiving far more donations than European parties and foundations<sup><a href="#footnote-6">6</a></sup> – are requested to provide data on donations within 30 to 90 days following the end of the financial year. 
		</p>
		<p>
			Additionally, reporting can be requested on a quarterly basis, as is the case in several Member States. Staggering reporting during the year would further lighten the load on the APPF in its processing of donations and contributions.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 28.1 to create separate deadlines for the provision of financial documents, and to shorten the deadline for the provision of data on donations and contributions.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the provision of data on donations and contributions could be shortened from the current "six months following the end of the financial year" to "one month following the end of each quarter".
		</p>
		
		<h3 id="proposal_7">#7. Shorten the deadline for the reporting of financial statements and their audit (Art. 28.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p id="footnote-root-7">
			Financial statements are key documents for financial transparency and their timely submission is essential for proper transparency. As indicated in proposal <a href="#proposal_6">#6</a>, the current deadline for the reporting of annual financial statements and their external audit report is six months following the end of the financial year (Art. 28.1).<sup><a href="#footnote-7">7</a></sup>
		</p>
		<p>
			Across the EU, national parties are often requested to provide their financial documents within two to four months following the end of the financial year.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art.28.1 to shorten the deadline for the provision of annual financial statements and their audit.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the provision of annual financial statements could be shortened from the current six months to three months, and audits could be provided one to two months later.
		</p>
		
		<h3 id="proposal_8">#8. Require the transmission of the list of European parties' national member parties following each change, instead of once a year (Art. 11.6)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			European political parties are required to provide an updated list of member parties each year; changes after which a European party would no longer meet its registration requirements must be reported within four weeks (Art. 11.6). 
		</p>
		<p>
			This specific point is less comparable to the national context, where national political parties are usually not organised as "parties of parties", so best practices are limited. However, updates to national parties' statutes are usually required to be reported on a regular and timely basis.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 11.6 to request that changes in European parties' party membership (including candidates or observers becoming full members) be notified to the APPF within a fixed timeframe following each change, according to the procedure outlined in a party's statutes, and regardless of whether this membership change impacts a party's ability to meet registration requirements. 
		</p>
		<p>
			The submission and publication of relevant official documents (such as mentions in a national official journal) may occur at a later date.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the notification of changes to the list of member national parties could be set to two weeks, and the submission of official documents could take place within one to two weeks of their official publication.
		</p>
		
		<h3 id="proposal_9">#9. Provide a deadline for the transmission of amendments of statutes to the APPF (Art. 11.5)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			European political parties and foundations are required to provide any amendments to the documents or statutes submitted as part of the application for registration (Art. 11.5). However, Regulation 2025/2445 does not provide a deadline for this submission. 
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 11.5 to request that changes made to the documents or statutes submitted as part of the registration process be notified within a fixed timeframe following their adoption by party instances. The submission and publication of relevant official documents (such as mentions in a national official journal) may occur at a later date.
		</p>
		<p class="forinstance">
			&#8594; for instance: the deadline for the notification of changes to the statutes or other relevant documents could be set to two weeks.
		</p>
		
		
		<h2>Chapter 2 - Donations, contributions</h2>
		<h3 id="proposal_10">#10. Redefine donations and contributions (Art. 2)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			With regards to the reporting of donations, Regulation 2025/2445 requires European parties and foundations to "transmit a list of all donors with their corresponding donations, indicating both the nature and the value of the individual donations" (Art. 25.2).
		</p>
		<p>
			For contributions, the same article states that this "shall also apply to contributions from member parties from the Union and member organisations from the Union" and "to contributions exceeding EUR 1 500 made by individual members".
		</p>
		<blockquote>
			<p>
				The Regulation maintains an arbitrary disctinction between "donations" and the same amounts voluntarily provided by contributors.
			</p>
		</blockquote>
		<p>
			While this phrasing closes a loophole from Regulation 1141/2014 whereby contributions from individual members risked not being properly reported, it leaves an arbitrary distinction between donations from individuals under €1,500 (which are reported, albeit published together as "minor donations") and voluntary contributions from individual members under €1,500 (which are not reported). 
		</p>
		<p>
			This distinction was presumably introduced to respect the privacy of individual members. However, while individual members' identity may be kept private, there is no strong basis to support an exemption from reporting voluntary financial contributions made by individuals on the mere basis on their membership.
		</p>
		<p>
			By contrast, mandatory contributions deriving directly from membership could be kept private (under a given threshold), while voluntary contributions would follow the same reporting standards as donations.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p id="footnote-root-8">
			We propose to redefine donations and contributions in Art. 2.9-10, whereby contributions would be defined as mandatory financial transfers, offerings in kind, or provision below market value of good and services<sup><a href="#footnote-8">8</a></sup> deriving from membership obligations. Meanwhile, donations would be the voluntary provision of the same.
		</p>
		<p>
			Financial reports should also include the structure of of membership fees, the number of paying members in each category, and total amount received.
		</p>
		<p>
			As a result, individuals only contributing their membership fee will see their privacy respected. Donations by individual members separate from membership fees will then be reported with all other donations – published grouped as "minor donations" under a given amount, and together with the donor's identity above this amount.
		</p>
		
		<h3 id="proposal_11">#11. Remove the €1,500-3,000 donation category for which written consent is required for the reporting of information by European parties and foundation and its publication by the APPF (Art. 25.2 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 distinguishes three cases for the reporting of donations made by individuals (Art. 25.2 and 39.1.e):
		</p>
		<ul>	 
			<li>If the annual sum of donations by an individual is above €3,000, their name and the value of their donations is published;</li>
			<li>If the annual sum of donations by an individual is below €1,500, their name is not disclosed, and their donations are grouped with other low-value donations as "minor donations"; and</li>
			<li>If the annual sum of donations by an individual is above €1,500 and below or equal to €3,000, the name of the donor and value of the donations are only published with the written consent of the donor, otherwise their name is not disclosed and amounts are reported as minor donations.</li>
		</ul>
		<blockquote>
			<p>
				Either no individual donor has ever made an annual donation between €1,500 and €3,000, or no donor has ever given their consent.
			</p>
		</blockquote>	
		<p id="footnote-root-9">
			In practice, no information has ever been reported for annual donations between €1,500 and €3,000.<sup><a href="#footnote-9">9</a></sup> Since it is highly unlikely that no individual donor has ever made an annual donation ranging from €1,500 to €3,000, it would seem like no donor has ever given their consent.
		</p>
		<p>
			As a result, the effective threshold for information to be published on individual donors is indeed €3,000. 
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			For purposes of clarity and simplicity, we propose to amend Art. 25.2 and 39.1 to remove the €1,500-€3,000 bracket, in order to simply publish the identity of a donor and the value of their donations above a given value, and an aggregate amount of donations below this value.
		</p>
		
		<h3 id="proposal_12">#12. Lower the thresholds for the reporting and publication of information on individual donors and contributors (Art. 25.2 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			As mentioned in proposal <a href="#proposal_11">#11</a>, Regulation 2025/2445 sets at €1,500 the threshold above which the identity of donors may be published (Art. 39.1). However, since written consent is requested (Art. 25.2) but, in practice, never granted, the effective threshold stands at €3,000.
		</p>
		<p id="footnote-root-10">
			This is six times the threshold set by  <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32003R2004" target="_blank">Regulation 2004/2003</a> – the Regulation replaced by Regulation 1141/2014, which Regulation 2025/2445 replaced – which, between 2004 and 2015, stood at €500.<sup><a href="#footnote-10">10</a></sup>
		</p>
		<blockquote>
  			<p>
				The threshold for the publication of a donor's identity is six times that set by Regulation 2004/2003.
			</p>
		</blockquote>
		<p>
			While donations above €3,000 per year and per donor account for the majority of European parties and foundations' total amount of donations from individual members, they only account for a small fraction of their number of donations. 
		</p>
		<p>
			For instance, between 2018 and 2024, European political parties received €722k from individual donors; donations above €3,000 per year per donor accounted for €406k, or 56%, of this amount. Meanwhile, donations below or equal to €3,000 accounted for €316k, or 44%.
		</p>
		<p id="footnote-root-11">
			By contrast, in the same period, there were only 40 donations above €3,000 from individual donors out of 4,172 such donations, or under 1%. Meanwhile, there were 4,132 donations below or equal to €3,000 from individual donors, over 99%.<sup><a href="#footnote-11">11</a></sup> 
		</p>
		<p>
			At the national level, Member States have widely differing regulations on the reporting and publication of donors' identity. In practice, many have a publication threshold between €100 and a few hundred euros, while several member states publicise all donations. 
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 25.2 and 39.1 to lower the threshold for the publication of a donor's identity. This should be done with due regards for the balance between the obligation of transparency and the respect of donors' privacy, which contributes to political pluralism. In order not to increase the reporting burden on European parties, this proposal should be read in conjunction with proposal <a href="#proposal_22">#22</a>. 
		</p>
		<p class="forinstance">
			&#8594; for instance: the identity of donors could be published for donations of €500 and above per year per donor, in line with the pre-2016 level.
		</p>
		
		<h3 id="proposal_13">#13. Lower the threshold for the immediate reporting of donations (Art. 25.4 and 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 requires that single donations exceeding €12,000 be immediately reported to the APPF (Art. 25.4). While the Regulation does not contain an explicit deadline for publication, the APPF strives to publish these donations on an expedited basis, usually within a week of their reporting.
		</p>
		<p>
			As mentioned in proposal <a href="#proposal_2">#2</a>, this contrasts with "regular" donations, which are currently reported to the APPF, alongside financial documents, within six months of the end of the financial year. These contributions are then published on the APPF's website between 3 and 6 months following this deadline.
		</p>
		<blockquote>
  			<p>
				While donations above €12,000 are published within one to two weeks, donations under €12,000 may not be available until two years later.
			</p>
		</blockquote>	
		<p id="footnote-root-12">
			Expedited reporting therefore makes a dramatic difference in the transparency of donations: while donations exceeding €12,000 will be published within one to two weeks of the donation date, donations under €12,000 may not be publicly available until close to two years later — as donations made in January of financial year N are often not published before the end of year N+1.<sup><a href="#footnote-12">12</a></sup> 
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			Separately from our proposal for the quarterly reporting and publication of donations and contributions, we propose to amend Art. 25.4 and 39.1 to lower the threshold for the immediate reporting of donations. 
		</p>
		<p class="forinstance">
			&#8594; for instance: the threshold for the immediate reporting of donations could decrease from €12,000 down to €6,000.
		</p>
		
		<h3 id="proposal_14">#14. Increase the data reported and published on donations and contributions (Art. 25 and 35.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 currently requires European parties and foundations to report "a list of all donors with their corresponding donations, indicating both the nature and the value of the individual donations" (Art. 25.2). For donations between €1,500 and €3,000, European parties and foundations must also indicate whether the donor has consented to the publication of their donation and identity. 
		</p>
		<p>
			The APPF later publishes "the names of donors and their corresponding donations", except for low-value donations for which only the aggregate value and the number of donors is published (Art. 39.1.e).
		</p>
		<p>
			Regulation 2025/2445 also introduces due diligence measures for donations above €3,000, asking European parties and foundations to "request that such donors provide the necessary information so that they can be properly identified" (Art. 25.5). European parties and foundations shall then "transmit the information received to the Authority upon its request". However, the Regulation does not mention the publication of this additional information. 
		</p>
		<p>
			In practice, and despite the absence of a clear legal provision to this effect, the APPF has long published the country in which donors and contributors are based, and, as of the financial year 2023, it started publishing the national registration number of legal persons making donations. 
		</p>
		<p id="footnote-root-13">
			Despite this welcome progress, the amount of information published by the APPF remains limited. In particular, the date on which donations are made is a useful indicator to correlate private donations, in particular large donations from private companies and lobbies, with the discussion of legislative documents. Additionally, without this information, the expedited reporting carried out ahead of European elections is later merged with regular donations, and observers lose the ability to tell whether donations were made before or after the elections.<sup><a href="#footnote-13">13</a></sup>
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			In order to improve transparency, the APPF should receive and report more information than the mere value of donations and identity of the donor.
		</p>
		<blockquote>
			<p>
				Overall, the amount of information published by the APPF is very limited. 
			</p>
		</blockquote>	
		<p>
			We therefore propose to amend Art. 25 to request that, in addition to currently reported information, European parties and foundations report the list of single donations they have received, the date on which the donations were received, and the result of due diligence verifications, including legal persons' beneficial owners – since European parties are required to perform those verifications, their result ought to be automatically shared with the APPF, avoiding needless work and requests from the APPF. This would apply to all donations. Once again, in order not to increase the reporting burden on European parties, this proposal should be read in conjunction with proposal <a href="#proposal_22">#22</a>. 
		</p>
		<p>
			Similarly, we propose to amend Art. 39.1 to request that the APPF publish the list of single donations received by European parties and foundations and, for each, the date on which the donation was received, the type of donation (financial, in kind, etc.), and the identity of the donor. 
		</p>
		<p id="footnote-root-14">
			In addition, the APPF would publish, for each donor, their member state, type (individual, politician, political party, NGO, think tank, private company, etc.), registration number (for legal persons), the result of due diligence verifications (including the identity of the beneficial owner, for legal persons), and the list of their donations across years. Minor donations should be broken down by member state.<sup><a href="#footnote-14">14</a></sup>
		</p>
		
		<h3 id="proposal_15">#15. Lift the time limit for the publication of individual donors' identity (Art. 40.3)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 requires, for donations by individuals above €3,000 (or above €1,500 where consent was provided), the publication of the donor's identity (Art. 39.1.e).
		</p>
		<p>
			However, it also states that the APPF "shall erase all personal data collected [to ensure the legality, regularity and transparency of the funding] at the latest 24 months after the publication of the relevant parts in accordance with Article 39" (Art. 40.3). As a result, after 24 months, lists of donations and contributions published by the APPF are redacted and the names of all individual donors are erased. 
		</p>
		<blockquote>
			<p>
				The names of individual donors for 2023, published in December 2024, were already redacted by early 2026, barely a year later.
			</p>
		</blockquote>
		<p>
			More worryingly, the provision contained in Art. 40.3 states that this data must be erased "at the latest" 24 months after publication, but does not even provide a minimum amount of time during which the information must be retained online. 
		</p>
		<p>
			As a result, we note that the names of individual donors for the financial year 2023, which were only published around December 2024, were already redacted by early 2026, or barely a year later.
		</p>
		<p>
			While the privacy of political donors can be taken into account, this deletion of information on political donations runs directly against the principle of funding transparency and the recommendations of the Venice Commission, which states in its <a href="https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD%282020%29032-e" target="_blank">Guidelines on Political Party Regulation 2<sup>nd</sup> Edition</a>, that "it is good practice for such financial reports to be made available on publicly available resources in a coherent, comprehensive and timely manner over an extended period of time" (emphasis added). There also seems to be no record, in member states, of similar provisions mandating the deletion of funding data.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			While it may be warranted to request the APPF and European Parliament to redact their records and delete personal data, information on donors should be excluded from the scope of Art. 40.3 in order to ensure the transparency of political funding. Should the legislator insist on a redaction, a much longer duration should apply, with a hard minimum duration (therefore with no "at the latest" qualifier).
		</p>
		<p class="forinstance">
			&#8594; for instance: the time during which donors' identity should remain available for scrutiny should be at least ten years.
		</p>
		
		
		<h2>Chapter 3 - Additional publications</h2>
		<h3 id="proposal_16">#16. Publish a permanent record of European parties' member MEPs and member parties (Art. 39.1 and 39.2)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 requires the European Parliament to publish "an updated list of MEPs who are members of a European political party" (Art. 39.1.m). Likewise, the APPF is required to publish the list of member parties of European political parties (Art. 39.2), which is annexed to the statutes (Art. 4.2).
		</p>
		<blockquote>
			<p>
				Published documents often replace information provided for previous years, making it difficult to track membership over time.
			</p>
		</blockquote>	
		<p>
			However, these documents, published on a yearly basis, have often replaced information provided for previous years, making it difficult to track the evolution of European parties' membership. The APPF also published separate lists of MEPs per party, despite Art. 39.1.m requesting the publication of "an updated list", in the singular.
		</p>
		<p>
			Currently, the APPF's website provides, on average, only two files for MEPs (2024 and 2025), and usually files over the past two years (2024 and 2025) for national member parties, sometimes with information on 2023. All previous records have been removed. Meanwhile, the APPF was set up in 2016, and Regulation 1141/2014 applied as of 1 January 2017 (Art. 41 of Regulation 1141/2014).
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39.1.m to request that the APPF publish a consolidated table of all MEPs past and present, together with their membership of a European political party (or lack thereof), including membership dates, past membership (where applicable), and political group affiliation. All this information is a matter of public record and is not subject to data protection regulations. In line with proposal <a href="#proposal_20">#20</a>, citizens should be able to browse through previous years to see the evolution of European party membership. 
		</p>
		<p>
			A similar consolidated table should be provided for national member parties of a European party or foundation.
		</p>
		
		<h3 id="proposal_17">#17. Publish European parties' and foundations' applications for funding (Art. 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Every year, European parties and foundations apply for European public funding. Since these applications are official requests for European taxpayers' money, their content is of public interest. 
		</p>
		<blockquote>
			<p>
				Applications for funding are official requests for European taxpayers' money, and their content is of public interest. 
			</p>
		</blockquote>	
		<p>
			Under Regulation 1141/2014, applications for funding contained otherwise undisclosed information on the display of European parties' logo on their national parties' website. Regulation 2025/2445 rightfully moved this display requirement outside of the application for funding, and it currently unclear what these applications will contain. This will be detailed in the next call for contributions. Nevertheless, the application can still be relevant to the public record.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39.1 to request that European parties' and foundations' applications for European public funding be published on the website of the APPF within a fixed timeframe following their submission, after due redaction of any personal data therein.
		</p>
		<p class="forinstance">
			&#8594; for instance: European parties' and foundations' applications for European public funding could be published on the website of the APPF within one week of their submission.
		</p>
		
		<h3 id="proposal_18">#18. Publish European parties' and foundations' public funding entitlement and their detailed calculation (Art. 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Following European parties' and foundations' application for public funding, the European Parliament decide how much of taxpayers' money these entities are entitled to. These entitlements depend on the overall amount of European funding allocated for party funding in the EP's budget, on European parties' number of member MEPs, on their planned reimbursable expenses, and on the amounts they actually applied for (Art. 22.4 and 24.1).
		</p>
		<blockquote>
			<p>
				Calculations for entitlements of public funding are published neither by the APPF nor by Parliament, and citizens must request them individually. 
			</p>
		</blockquote>	
		<p>
			However, these entitlement amounts are only published without details by the European Parliament in a PDF document on a page of its sub-website dedicated to "contracts and grants" several months later. 
		</p>
		<p id="footnote-root-15">
			The underlying calculations are published neither by the APPF, nor by the European Parliament, and are only found as an annex of the note of Secretary-General of the European Parliament presented to the Bureau, and which citizens must request via the EP's access to documents procedure. The European Parliament has systematically delayed the publication of these documents.<sup><a href="#footnote-15">15</a></sup>
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39.1 to request that the APPF publish on its website European parties' and foundations' entitlements to European public funding, including their detailed calculations, following their adoption by the Bureau of the European Parliament. While the APPF may argue that this is the European Parliament's remit, this is in keeping with these institutions' obligation to cooperate (Art. 34.1). In line with the APPF's current practice for donations, a notice could remind citizens that amounts may vary.
		</p>
		
		
		<h2>Chapter 4 - Publication modalities</h2>
		<h3 id="proposal_19">#19. Gather all data on a single website (Art. 39.1)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Regulation 2025/2445 stipulates that "the European Parliament, or the Authority, in accordance with the distribution of their responsibilities under this Regulation, shall make public in an open, machine readable format on a website created for that purpose" (Art. 39.1).
		</p>
		<p>
			This changes from Regulation 1141/2014, which previously stated that "the European Parliament shall make [specific information] public, under the authority of its Authorising Officer or under that of the Authority, on a website created for that purpose" (Art. 32.1).
		</p>
		<p>
			The new phrasing places Parliament and the APPF on more equal ground, and more clearly attributes responsibility for publication in line with these institutions' respective remits under the Regulation. 
		</p>
		<p>
			However, the new phrasing maintains the requirement that the information, published by either institution, shall be published "on a website created for that purpose" and, in doing so, confirms the use of the singular for "website".
		</p>
		<p>
			In practice, the European Parliament and the APPF have consistently published information separately: the APPF on its own website, which is dedicated to its party- and foundation-related work, and Parliament on a few pages of its sub-website dedicated to "Contracts and grants".
		</p>
		<p>
			In a January 2021 decision on a complaint brought by European Democracy Consulting, the European Ombudsman called on the APPF to "make available as much information about [European parties] as possible". However, while its website now also includes a link to the website of the European Parliament for documents published there, the APPF has consistently chosen to only publish the minimum amount of information strictly required under the Regulation – and sometimes even less, as evidenced by the long-running absence of a consolidated list of MEPs with their party affiliation.
		</p>
		<blockquote>
  			<p>
				The APPF's practice nullifies the legislator's intent to see all information available to citizens on a single website.
			</p>
		</blockquote>	
		<p id="footnote-root-16">
			The APPF has argued that its website was not "created for the purpose of publishing documents possessed by the European Parliament" and therefore refused to publish documents "that are in the remit of the European Parliament", arguing this would not be in the public interest.<sup><a href="#footnote-16">16</a></sup>
		</p>
		<p>
			This continued practice has nullified the legislator's intent to see all information under Article 39.1 made available to citizens on a single website, despite no other website being available for such purpose.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			Short of a wider reform making the APPF responsible for the public funding of European parties and foundations, instead of the European Parliament, we propose to at least amend Art.39.1 to clearly designate the website of the APPF as the website referred to in this article, so as to ensure that all information mandated by law to be made available may finally be found on a single website, as per the legislator's intent. 
		</p>
		<p>
			The APPF should be explicitly entrusted with the publication of this data, part of which should be procured from the European Parliament in line with these institutions' obligation to cooperate (Art. 34.1-2).
		</p>
		
		<h3 id="proposal_20">#20. Publish past information (Art. 39)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<blockquote>
			<p>
				The APPF has declined to publish relevant financial information for the years in which it has been active, as well as past financial information.
			</p>
		</blockquote>	
		<p>
			In line with its argument that it should not publish documents that are not "part of its remit", the APPF has not only declined to publish relevant financial information for the years in which it was active, but it has also refrained from publishing past information, arguing that it "would be in no position to ensure that the information contained in those documents is correct and up to date."
		</p>
		<p>
			This includes audit reports provided by European political parties, which are not susceptible to later updates, and information on donations and contributions prior to 2018, which is available in official documents of the European Parliament or was reported by European parties (Art. 6 of Regulation 2004/2003).
		</p>
		<p>
			This is despite an explicit obligation of cooperation requiring that "the Authority [and] the Authorising Officer of the European Parliament [share] information and keep each other regularly informed of matters related to funding provisions, controls and sanctions" and "agree on practical arrangements for such exchange of information" (Art. 34.1-2). The absence of this information prevents an observation of the evolution of European party funding.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39 to request that the APPF publish all available official information on the funding of European political parties and foundations since the entry into force of Regulations 2004/2003 and 1141/2014, predecessors of Regulation 2025/2445, in particular information on the public funding of European parties and foundations, their donations and contributions, and their spending.
		</p>
		
		<h3  id="proposal_21">#21. Provide charts, tables, maps, infographics (Art.39)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p id="footnote-root-17">
			In line with their practice of limited publications, the APPF and European Parliament publish requested figures, mostly in PDF files, but do not accompany this data with more interactive tools, such as charts, tables or infographics, the way the European Parliament does for election results, for instance.<sup><a href="#footnote-17">17</a></sup>
		</p>
		<p>
			Since the publication of information by the APPF and European Parliament mandated in Art. 39 aims not merely at publishing data but explicitly at achieving transparency, this goal could be more fully reached by the use of charts showing data per year, per party or per member state, and the evolution of data over time.
		</p>
		<p>
			Likewise, the APPF could publish interactive tables of donations and contributions received by European parties and foundations, as well as searchable directories of donors, national member parties, and MEPs members of European parties.

		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39 to request that the APPF and the European Parliament accompany their data publication with relevant charts, tables, maps, and infographics necessary to achieve proper transparency of financial and other data.
		</p>
		
		<h3 id="proposal_22">#22. Design a digital reporting and disclosure tool to receive, process, and publish data from European political parties and foundations (Art. 39)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p>
			Historically, European parties and foundations have submitted the documents required of them, including lists of donations and contributions, and other financial information, by email — albeit now using a new and more secure upload system. 
		</p>
		<p>
			This requires staff from the APPF and the European Parliament to manually input this information into their data systems for processing, and does not contribute to the publication of this data, which must be handled separately. This results in extended delays, administrative burden, duplication of work, and a higher risk of human error.
		</p>
		<p>
			Conversely, the use of online reporting and disclosure systems allows relevant stakeholders to submit data at any point, directly into the data system, and removes the need for APPF or EP staff to re-enter this information. Review can be partially automated and streamlined, and imported data can directly feed into a public disclosure portal, ensuring that information is provided to citizens in a timely manner. 
		</p>
		<blockquote>
  			<p>
				An online reporting and disclosure system can dramatically simplify data reporting, review, and disclosure.
			</p>
		</blockquote>	
		<p>
			Additionally, several European parties have reported redundant requests for information from the APPF and the Financing of Political Parties and Foundations Unit of the European Parliament's Directorate-General for Finance (DG FINS), as well as a perceived lack of coordination between the two. A reporting and disclosure system accessible by both entities (in case their respective roles are not merged and granted to a single entity) would avoid such duplication and help ensure data integrity and accuracy.
		</p>
		<p>
			Well designed in conjunction with all interested parties, an online reporting and disclosure system can dramatically simplify data reporting, review, and disclosure. It simplifies administrative processes and increases transparency.
		</p>
		<p>
			The adoption of a ditigal system would also directly simplify the implementation of many of the proposals of this initiative, including at least proposals <a href="#proposal_1">#1</a>, <a href="#proposal_2">#2</a>, <a href="#proposal_3">#3</a>, <a href="#proposal_4">#4</a>, <a href="#proposal_8">#8</a>, <a href="#proposal_14">#14</a>, <a href="#proposal_16">#16</a>, <a href="#proposal_17">#17</a>, <a href="#proposal_19">#19</a>, <a href="#proposal_20">#20</a>, and <a href="#proposal_21">#21</a>.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 39 to entrust the APPF with the development of an online reporting and disclosure system for all data and information to be submitted by European political parties and foundations. This exceptional task should be matched with additional human and financial resources allocated to the APPF for the development of this tool.
		</p>
		<p>
			The <a href="https://www.idea.int/publications/catalogue/digital-solutions-political-finance-reporting-and-disclosure-practical-guide?lang=en" target="_blank">practical guide</a> devised by International IDEA, as well as the <a href="https://www.idea.int/publications/catalogue/models-digital-reporting-and-disclosure-of-political-finance-albania?lang=en" target="_blank">detailed review</a> it compiled for Albania, constitute extremely informative guides on reporting and disclosure systems.
		</p>
		
		<h3 id="proposal_23">#23. Give the APPF a mandate of public information (Art. 8)</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<p id="footnote-root-18">
			Beyond the information that must already be made public under Regulation 2025/2445, European citizens' knowledge of their common parties should be actively promoted, albeit in a non-partisan manner. Given the historical weight of national parties, this mission is particularly important in order for European political parties to fulfil their treaty-mandate role.<sup><a href="#footnote-18">18</a></sup>
		</p>
		<p>
			In line with the proposals above, the APPF should therefore publish contextual and historical information, including using infographics and visualisations, ranging from the history and role of European parties and foundations, to the results of European elections from the perspective of European parties. This could also include pre-election awareness-raising efforts to bolster European citizens' awareness of and interest in their common parties.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p id="footnote-root-19">
			We propose to amend Art. 8 to give the APPF an explicit mandate to inform citizens about their common parties and foundations. This should be matched with the necessary increase in financial and human resources for the APPF, and might require extracting the budget of the APPF from that the European Parliament, in order to avoid a competition for resources between the two institutions.<sup><a href="#footnote-19">19</a></sup>
		</p>
		
		<h3 id="proposal_24">#24. Produce reliable and periodic data on European parties</h3>
		<h4 class="toc-exclude">Reasoning</h4>
		<blockquote>
			<p>
				Only with reliable and periodic data can we understand the impact of the measures taken, and decide on further measures.
			</p>
		</blockquote>	
		<p>
			Given the limited awareness of European citizens for their European parties, an essential aspect of increasing transparency is to monitor progress made regarding citizens' "awareness and recall" of European parties and of their funding. Only with reliable and periodic data can we properly understand the impact of the measures taken, and decide on further measures as may be necessary.
		</p>
		<p>
			As part of its proposed mandate of public information, the APPF should reach out to European citizens to assess their knowledge and recall of European parties and of their funding. This can be done directly, should the APPF be provided with the necessary resources, or indirectly via the Eurobarometer surveys and by contracting sampling services.
		</p>
		<p id="footnote-root-20-21-22">
			In particular, Eurobarometers, which are published by the European Parliament, the European Commission, and other EU institutions, have regularly been used to assess European citizens' perception of European institutions — such as of the European Parliament in its <a href="https://europa.eu/eurobarometer/surveys/detail/3093" target="_blank">Spring 2023</a> issue<sup><a href="#footnote-20">20</a></sup> or in the <a href="https://europa.eu/eurobarometer/surveys/detail/2292" target="_blank">Parlemeter 2020</a><sup><a href="#footnote-21">21</a></sup> — or of European democracy — such as in the Parliament's <a href="https://europa.eu/eurobarometer/surveys/detail/3292" target="_blank">Post-electoral survey 2024</a><sup><a href="#footnote-22">22</a></sup> or the Commission's <a href="https://europa.eu/eurobarometer/surveys/browse/all/series/4961" target="_blank">Standard Eurobarometers</a>.
		</p>
		<h4 class="toc-exclude">Proposal</h4>
		<p>
			We propose to amend Art. 8 to mandate the APPF to periodically procure and publish data on European citizens' knowledge and recall of European political parties.
		</p>
		<p>
			In particular, in line with Art. 8.6, the APPF should conclude an agreement with the European Parliament, and, if appropriate, with the European Commission, to enable it to carry out this task.
		</p>
		
		<a href="{base}/files/EDCS_-_Initiative_on_Transparency_for_European_party_Funding_v2.0.pdf" target="_blank">
			<img src="{base}/img/itef_cover.png" alt="Cover Initiative on Transparency for European Party Funding" style="width:40%; margin: auto; text-align: center; padding-top:40px;"/>
		</a>
		
		<hr
			style="height:1px; border-width:0; color:gray; background-color:gray; width:75%; margin-top:30px; margin-bottom:30px;"
		/>
		<p class="footnote" id="footnote-1">
			<sup>1</sup> For more details on the modalities of the reporting of donations, see proposal <a href="#proposal_11">#11</a>.
			<sup><a href="#footnote-root-1">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-2">
			<sup>2</sup> For more details on reporting and disclosure systems, see proposal <a href="#proposal_22">#22</a>.
			<sup><a href="#footnote-root-2">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-3">
			<sup>3</sup> For more details on reporting and disclosure systems, see proposal <a href="#proposal_22">#22</a>.
			<sup><a href="#footnote-root-3">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-4">
			<sup>4</sup> Article 39.2 states that the EP shall make public the list "updated in accordance with Article 11(6)". Article 11.6 merely states that an updated list "shall be sent to the Authority each year" and, in case of changes affecting the registration of the party "within four weeks of any such change".
			<sup><a href="#footnote-root-4">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-5">
			<sup>5</sup> For more on the reporting of donations, see proposal <a href="#proposal_6">#6</a>.
			<sup><a href="#footnote-root-5">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-6">
			<sup>6</sup> For more on the donations received by European and national parties, see the <a href="https://epfo.eu" target="_blank">European Party Funding Observatory</a> and national platforms on party funding.
			<sup><a href="#footnote-root-6">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-7">
			<sup>7</sup> Decision 2019/C 249/02 of the Bureau of the European Parliament indicates that "the European Parliament shall receive directly from the independent external bodies or experts […] the external audit report specified in Article 23(1) point (b)" (Article 7.1), referring to Regulation 1141/2014.
			<sup><a href="#footnote-root-7">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-8">
			<sup>8</sup> See the current long-form definitions in Art. 2.9 and 2.10.
			<sup><a href="#footnote-root-8">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-9">
			<sup>9</sup> Wolfs, Wouter and European Democracy Consulting Stiftung. European Party Funding Observatory Dataset, 2024.
			<sup><a href="#footnote-root-9">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-10">
			<sup>10</sup> The Commission's 2012 <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A52012PC0499" target="_blank">proposal</a> only proposed to raise this threshold to €1,000 and the Parliament did not dispute this figure in its <a href="https://www.europarl.europa.eu/doceo/document/A-7-2013-0140_EN.html" target="_blank">report</a>. The increase to €3,000 only appears following <a href="https://data.consilium.europa.eu/doc/document/PE-62-2014-INIT/en/pdf" target="_blank">agreement</a> with the Council.
			<sup><a href="#footnote-root-10">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-11">
			<sup>11</sup> European Democracy Consulting Stiftung, European Party Funding Observatory dataset, retrieved 17 February 2026, <a href="https://epfo.eu/dataset" target="_blank">https://epfo.eu/dataset</a>.
			<sup><a href="#footnote-root-11">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-12">
			<sup>12</sup> While Regulation 2025/2445 refers to "single donations the value of which exceeds EUR 12 000", the APPF has in the past also reported donations of precisely €12,000.
			<sup><a href="#footnote-root-12">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-13">
			<sup>13</sup> For instance, the <a href="https://www.appf.europa.eu/appf/en/donations-and-contributions" target="_blank">list of donations published by the APPF</a> for 2024 does not make a distinction between donations recorded as part of the pre-electoral expedited reporting and donations made later in the year. For a record of donations made in the six months prior to the 2024 European elections, see European Democracy Consulting's <a href="https://eudemocracy.eu/donations-tracker-ep2024" target="_blank">Donations tracker</a>.
			<sup><a href="#footnote-root-13">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-14">
			<sup>14</sup> For a discussion on minor donations' maximum value, see proposal <a href="#proposal_12">#12</a>.
			<sup><a href="#footnote-root-14">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-15">
			<sup>15</sup> In response to requests for public access to documents placed by the European Democracy Consulting Stiftung, the European Parliament has argued that the note could not be publicised until European parties and foundations had been notified and given the opportunity to submit observations and to appeal the conclusions of the Bureau. However, it has never indicated why the publication of these documents would constitute an impediment to such steps by European parties or foundations.
			<sup><a href="#footnote-root-15">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-16">
			<sup>16</sup> <a href="https://www.ombudsman.europa.eu/en/doc/correspondence/en/133483" target="_blank">Reply from the Authority for European Political Parties and European Political Foundations</a> (APPF) to the European Ombudsman's inquiry into the APPF's alleged failure to comply with transparency obligations, Case <a href="https://www.ombudsman.europa.eu/en/case/en/57305" target="_blank">1094/2020/DL</a>, 4 October 2020.
			<sup><a href="#footnote-root-16">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-17">
			<sup>17</sup> European Parliament, 2024 European election results, <a href="https://results.elections.europa.eu/" target="_blank">https://results.elections.europa.eu/</a>.
			<sup><a href="#footnote-root-17">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-18">
			<sup>18</sup> "Political parties at European level contribute to forming European political awareness and to expressing the will of citizens of the Union", Treaty on European Union, Article 10.4.
			<sup><a href="#footnote-root-18">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-19">
			<sup>19</sup> This would be in line with other entities such as the European Ombudsman and the European Data Protection Supervisor and Board.
			<sup><a href="#footnote-root-19">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-20">
			<sup>20</sup> European Parliament, Eurobarometer: Democracy in action, One year before the European elections, Spring 2003, EB 99.1, PE 734.015.
			<sup><a href="#footnote-root-20-21-22">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-21">
			<sup>21</sup> European Parliament, Eurobarometer: A Glimpse of certainty in uncertain times, Parlemeter 2020, EB 94.2, PE 689.219.
			<sup><a href="#footnote-root-20-21-22">Up</a></sup>
		</p>
		<p class="footnote" id="footnote-22">
			<sup>22</sup> European Parliament, Eurobarometer: EU Post-electoral survey 2024, Special Eurobarometer 101.5.
			<sup><a href="#footnote-root-20-21-22">Up</a></sup>
		</p>
		
	</div>

	<TableOfContents />
</article>

<style>
	blockquote {
		float: right;	
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #003399;
		margin-left: 10px;
		margin-top: 10px;
		margin-bottom: 25px;
		padding-left: 20px;
		padding-top: 5px;
		max-width: 40%;
	}
	blockquote::before,
	blockquote::after {
		content: "";
		display: block;
		width: 80px;
		height: 5px;
		background-color: #003399;
	}
	blockquote p {
		text-align: center;
	}
	.forinstance {
		font-style: italic;
		padding-left: 20px;
		padding-right: 20px;
	}
	table, th, td { 
		border: 1px solid #003399;
		padding: 5px; 
		font-size: small;
	}
</style>	