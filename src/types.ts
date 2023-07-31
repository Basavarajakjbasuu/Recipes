export interface Recipe {
	uri: string;
	label: string;
	image: string;
	totalTime: number;
}

export interface RecipeCards {
	recipe: Recipe;
}

export interface filterChips {
	labelName: string;
	type: string;
	name: string;
	value: string;
	ariaLabel: string;
}