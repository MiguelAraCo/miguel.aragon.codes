import NextI18Next from "next-i18next";

export const nextI18NextInstance = new NextI18Next({
	localePath: "public/static/locales",
	defaultLanguage: "en",
	otherLanguages: ["es", "ja"],
	localeSubpaths: {
		en: "en",
		es: "es",
		ja: "jp",
	},
});

export const { appWithTranslation, withTranslation, i18n } = nextI18NextInstance;
