const name = {
	full: "Diego Martí Monsó",
	short: "Diego Martí",
} as const;

export const siteConfig = {
	// Personal information
	name,
	profileImage: "/diego.jpg",
	
	// Bio/intro text
	intro: {
		text: [
			"Hi! I'm Diego.",
			"I'm an AI researcher at <stealth>. My goal is to create intelligent systems that can understand their environment and predict the outcomes of their actions to make informed decisions.",
			"The future is exciting!",
		],
	},
	
	// Social media links
	social: {
		linkedin: "https://linkedin.com/in/diego-marti",
		twitter: "https://x.com/martidiegom",
		scholar: "https://scholar.google.com/citations?user=Wm_P8JAAAAAJ&hl=en",
		github: undefined as string | undefined,
		email: undefined as string | undefined,
	},
	
	// Site metadata
	metadata: {
		description: `${name.short}'s personal website`,
		title: name.short,
	},
	
	// Section descriptions and max entries to show on the homepage
	sections: {
		publications: {
			maxItems: 5,
		},
		blog: {
			maxItems: 5,
		},
		projects: {
			description: "These are some projects I did that were not publication-worthy, but still interesting.",
			maxItems: 5,
		},
	},
} as const;

