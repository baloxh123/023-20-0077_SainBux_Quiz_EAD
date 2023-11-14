import ProductCard from "./ProductCard";

export default function Auction() {
    return (
        <div >
            <div className="flex justify-between mx-2"><h3 className="text-2xl font-semibold">HOT AUCTION</h3> <a href="#">View All</a></div>
            <div className="flex flex-wrap justify-center gap-8 py-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}
