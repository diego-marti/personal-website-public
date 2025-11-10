export const siteConfig = {
	// Personal information
	name: "Diego Martí",
	profileImage: "/diego.jpg",
	
	// Bio/intro text
	intro: {
		text: [
			"Hi! I'm Diego.",
			"I'm an AI researcher. My goal is to create intelligent systems that can understand their environment and predict the outcomes of their actions to make informed decisions.",
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
		description: "Diego Martí's personal website",
		title: "Diego Martí",
	},
	
	// Section descriptions
	sections: {
		projects: {
			description: "These are some projects I did that were not publication-worthy, but still interesting.",
		},
	},
} as const;

