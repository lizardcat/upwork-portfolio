// src/config/constants.ts
export const SITE_CONFIG = {
    name: 'Alex Raza',
    title: 'SEO Content Specialist, Editor & Proofreader',
    description: 'Professional SEO content specialist, editor, and proofreader Alex Raza. Boost your rankings with expert content optimization, editing, and proofreading services.',
    url: 'https://alexraza.com',
    upworkProfile: 'https://www.upwork.com/freelancers/~0141cff0aab119da4c',
    author: {
        name: 'Alex Raza',
        email: 'alex.raza.ke@gmail.com',
    }
} as const;

export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
] as const;

export const SERVICES = [
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>`,
        title: 'SEO Content Writing',
        description: 'High-quality, keyword-optimized content that ranks on Google while engaging your audience. Blog posts, articles, and web copy that drives traffic.'
    },
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>`,
        title: 'On-Page SEO Optimization',
        description: 'Complete on-page SEO audit and optimization. Title tags, meta descriptions, header structure, and content optimization for better search rankings.'
    },
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>`,
        title: 'Content Editing',
        description: 'Professional editing for clarity, flow, and engagement. Transform your existing content into polished pieces that convert readers into customers.'
    },
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        title: 'Proofreading',
        description: 'Meticulous proofreading for grammar, spelling, punctuation, and formatting. Perfect for final drafts that need professional polish.'
    },
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>`,
        title: 'Keyword Research',
        description: 'In-depth keyword research to identify high-value opportunities. Find the terms your audience is searching for and outrank competitors.'
    },
    {
        icon: `<svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
        </svg>`,
        title: 'Content Strategy',
        description: 'Develop comprehensive content strategies that align with your business goals and drive organic traffic growth over time.'
    }
] as const;