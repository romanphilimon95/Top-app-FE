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
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
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