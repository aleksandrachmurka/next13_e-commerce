import { PRODUCTS } from "../../data/products";
import type { ProductListItemType } from "@/ui/molecules/ProductListItem.types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = () => (
	<ul
		data-testid="products-list"
		className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
	>
		{PRODUCTS.map((product: ProductListItemType) => (
			<ProductListItem key={product.id} product={product} />
		))}
	</ul>
);
