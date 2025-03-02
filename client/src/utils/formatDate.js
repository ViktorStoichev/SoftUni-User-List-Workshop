export default function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
        year: 'numeric', // '2023'
        month: 'long', // '11'
        day: 'numeric', // '01'
    });
}
