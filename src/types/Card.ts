export interface Card {
	id: string;
	title: string;
	body: string;
	slug: string;
	img?: string;
	short?: string;
	createdAt: Date;
	updatedAt: Date;
}
