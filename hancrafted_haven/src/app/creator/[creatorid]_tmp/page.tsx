//THIS IS A TEMP FILE.  TO BE REPLACED

'use client'
import { useParams } from 'next/navigation';

export default function CreatorPage() {
    const { creatorId } = useParams();

    return (
        <main>
            <h1>Creator Details</h1>
            <p>Creator ID: {creatorId}</p>

            <div>Image</div>
            <div>About Me</div>
            <div>Creators Work</div>
            <div>Curated Work</div>
        </main>
    )
}