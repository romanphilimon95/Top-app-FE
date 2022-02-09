export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantageInterface {
	_id: string;
	title: string;
	description: string;
}

export interface HhDataInterface {
	_id: string | undefined;
	count: number | undefined;
	juniorSalary: number | undefined;
	middleSalary: number | undefined;
	seniorSalary: number | undefined;
	updatedAt: Date | undefined;
}

export interface TopPageModelInterface {
	tags: string[];
	_id: string;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages?: TopPageAdvantageInterface[];
	createdAt: Date;
	updatedAt: Date;
	hh?: HhDataInterface;
}