# Content Management Guide

This site uses Astro Content Collections to manage publications, projects, and blog posts. Here's how to add new content:

## Adding a New Publication

1. Create a new `.md` file in `src/content/publications/`
2. Use this template:

```markdown
---
title: "Your Paper Title"
authors: ["Your Name", "Co-author Name"]
venue: "Conference or Journal Name"
year: 2024
thumbnail: "/publications/paper-thumbnail.jpg"  # Optional - 5:3 aspect ratio
website: "https://your-project-page.com"  # Optional
code: "https://github.com/username/repo"  # Optional
arxiv: "https://arxiv.org/abs/2401.12345"  # Optional
doi: "10.1234/example"  # Optional
pdf: "/papers/your-paper.pdf"  # Optional
featured: true  # Optional, for highlighting important papers
---

Your detailed paper description goes here...
```

## Adding a New Project

1. Create a new `.md` file in `src/content/projects/`
2. Use this template:

```markdown
---
title: "Project Name"
description: "Brief description of what the project does"
year: 2024
thumbnail: "/projects/project-thumbnail.jpg"  # Optional - 5:3 aspect ratio
project_page: "https://your-project-page.com"  # Optional
code: "https://github.com/username/repo"  # Optional
pdf: "/projects/project-documentation.pdf"  # Optional
---

Detailed project description...
```

## Adding a New Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Use this template:

```markdown
---
title: "Blog Post Title"
description: "Brief description of the post"
pubDate: 2024-01-15
tags: ["AI", "research"]  # Optional
featured: true  # Optional
---

Your blog post content goes here...
```

## File Naming

- Use kebab-case for filenames (e.g., `my-awesome-paper.md`)
- Avoid spaces and special characters
- The filename becomes the URL slug

## Content Structure

- **Publications**: Automatically sorted by year (newest first)
- **Projects**: Automatically sorted by year (newest first)  
- **Blog**: Automatically sorted by publication date (newest first)

## Required vs Optional Fields

### Publications
- **Required**: `title`, `authors`, `venue`, `year`
- **Optional**: `thumbnail`, `website`, `code`, `arxiv`

### Projects
- **Required**: `title`, `description`, `year`
- **Optional**: `thumbnail`, `project_page`, `code`, `pdf`

### Blog
- **Required**: `title`, `description`, `pubDate`
- **Optional**: `tags`, `featured`

## Development

To see your changes:

```bash
npm run dev
```

The site will automatically rebuild when you add, modify, or remove content files.
