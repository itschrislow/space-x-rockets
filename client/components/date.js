import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={date}>{format(date, 'MMMM d, yyyy')}</time>
}