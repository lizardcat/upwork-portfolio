// src/config/site.ts (renamed for clarity)
export const SITE_CONFIG = {
    name: 'Alex Raza',
    title: 'SEO Content Specialist, Editor & Proofreader',
    description: 'Professional SEO content specialist, editor, and proofreader Alex Raza. Boost your rankings with expert content optimization, editing, and proofreading services.',
    url: 'https://upwork.alexraza.com', // Updated for subdomain
    upworkProfile: 'https://www.upwork.com/freelancers/~0141cff0aab119da4c',
    author: {
        name: 'Alex Raza',
        email: 'alex.raza.ke@gmail.com',
    }
} as const;

export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
] as const;

export const SERVICES = [
    {
        icon: 'search',
        title: 'SEO Content Writing',
        description: 'High-quality, keyword-optimized content that ranks on Google while engaging your audience. Blog posts, articles, and web copy that drives traffic.'
    },
    {
        icon: 'lightbulb',
        title: 'On-Page SEO Optimization',
        description: 'Complete on-page SEO audit and optimization. Title tags, meta descriptions, header structure, and content optimization for better search rankings.'
    },
    {
        icon: 'edit',
        title: 'Content Editing',
        description: 'Professional editing for clarity, flow, and engagement. Transform your existing content into polished pieces that convert readers into customers.'
    },
    {
        icon: 'check',
        title: 'Proofreading',
        description: 'Meticulous proofreading for grammar, spelling, punctuation, and formatting. Perfect for final drafts that need professional polish.'
    },
    {
        icon: 'trending',
        title: 'Keyword Research',
        description: 'In-depth keyword research to identify high-value opportunities. Find the terms your audience is searching for and outrank competitors.'
    },
    {
        icon: 'strategy',
        title: 'Content Strategy',
        description: 'Develop comprehensive content strategies that align with your business goals and drive organic traffic growth over time.'
    }
] as const;

// Image mapping utility
export const getPostImage = (slug: string): string => {
    const imageMap: Record<string, string> = {
        'seo-content-strategy-2025': '/blog-1.jpg',
        'keyword-research-guide': '/blog-2.jpg',
        'on-page-seo-checklist': '/blog-3.jpg'
    };
    return imageMap[slug] || '/blog-1.jpg';
};