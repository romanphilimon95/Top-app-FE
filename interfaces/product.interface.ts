export interface ProductCharacteristicInterface {
	value: string;
	name: string;
}

export interface ReviewModelInterface {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModelInterface {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	description: string;
	characteristics: ProductCharacteristicInterface[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	image: string;
	initialRating: number;
	reviews: ReviewModelInterface[];
	reviewCount: number;
	reviewAvg?: number;
	advantages?: string;
	disadvantages?: string;
}