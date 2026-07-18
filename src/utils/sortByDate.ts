// Sort collection entries newest first
export const sortByDate = (a: any, b: any) => {
    // If we have pubDate (blog posts), use that
    if (a.data.pubDate && b.data.pubDate) {
        return b.data.pubDate.getTime() - a.data.pubDate.getTime();
    }

    // Otherwise sort by year and month
    if (a.data.year !== b.data.year) {
        return b.data.year - a.data.year;
    }
    return (b.data.month || 0) - (a.data.month || 0);
};
