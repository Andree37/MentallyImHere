export function formatObjectAsText(obj: any) {
    let formattedText = '';
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            formattedText += `${key}: ${value.join(', ')}\n`;
        } else if (typeof value === 'object') {
            formattedText += `${key}:\n`;
            formattedText += formatObjectAsText(value).replace(/^/gm, '  '); // Add indentation for nested objects
        } else {
            formattedText += `${key}: ${value}\n`;
        }
    }
    return formattedText;
}
