export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: string }>;
}) {
    const { productId } = await params;
    return (
        <div>
            <h1>Details about Product {productId}</h1>
        </div>
    );
}