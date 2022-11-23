"use client";

import { NextSeo } from "next-seo";
import { AppConfig } from "../../utils/AppConfig";

const Meta = ({ meta }: any) => {
	return (
		<>
			<meta charSet="UTF-8" key="charset" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1"
				key="viewport"
			/>
			<meta
				name="facebook-domain-verification"
				content="clksuf1xg6711ghg99m26gendyfce4"
			/>
			<meta name="title" content={meta.title} />
			<meta name="description" content={meta.description} />

			<NextSeo
				title={meta.title}
				description={meta.description}
				canonical={meta.canonical}
				openGraph={{
					title: meta.title,
					description: meta.description,
					url: meta.canonical,
					locale: AppConfig.locale,
					site_name: AppConfig.site_name,
				}}
			/>
		</>
	);
};

export default Meta;
