'use client';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
    const { creatorId, productId } = useParams();

    return (
        <main>
            <h1>Product Details</h1>
            <p>Product ID: {productId}</p>
            <p>Creator ID: {creatorId}</p>
            <div>Image</div>
            <div>Descriptions</div>
            <div>Reviews</div>
            <div>Other Products By Creator</div>
        </main>
    )
}