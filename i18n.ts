import NextI18Next from "next-i18next";

export const i18n = new NextI18Next({
	defaultLanguage: "en",
	otherLanguages: ["es", "jp"],
	localePath: "/public/locales",
	localeSubpaths: {
		en: "en",
		es: "es",
		jp: "jp",
	},
});

export const { appWithTranslation, withTranslation } = i18n;
