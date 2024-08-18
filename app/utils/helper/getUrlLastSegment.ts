export default function getUrlLastSegment(url: string): string | null {
    url = url.trim().replace(/[/,]+$/, "");

    const segments: string[] = url.split('/');
    const lastSegment: string | undefined = segments.pop();

    return lastSegment && lastSegment.trim() !== '' ? lastSegment.trim() : null;
} 

export function getSemiUrlLastSegment(url: string, keyword?: string): string | null {
    url = url.trim().replace(/[/,]+$/, "");

    const segments: string[] = url.split('/');
    if (keyword) {
        const keywordIndex = segments.indexOf(keyword);
        if (keywordIndex > 0 && keywordIndex - 1 < segments.length) {
            return segments[keywordIndex - 1]; // Return the segment before the keyword
        } else {
            return null; // Return null if the keyword is not found or out of bounds
        }
    }
    return segments.length > 1 ? segments[segments.length - 2] : null;
} 