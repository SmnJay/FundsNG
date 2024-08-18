export default function getUrlLastSegment(url: string): string | null {
    url = url.trim().replace(/[/,]+$/, "");

    const segments: string[] = url.split('/');
    const lastSegment: string | undefined = segments.pop();

    return lastSegment && lastSegment.trim() !== '' ? lastSegment.trim() : null;
} 