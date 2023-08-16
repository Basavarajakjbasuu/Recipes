export interface RootObject {
	_links: RootObjectLinks;
	count:  number;
	from:   number;
	hits:   Hit[];
	to:     number;
 }
 
 export interface RootObjectLinks {
	next: Next;
 }
 
 export interface Next {
	href:  string;
	title: Title;
 }
 
 export enum Title {
	NextPage = "Next page",
	Self = "Self",
 }
 
 export interface Hit {
	_links: HitLinks;
	recipe: Recipe;
 }
 
 export interface HitLinks {
	self: Next;
 }
 
 export interface Recipe {
	image:     string;
	label:     string;
	totalTime: number;
	uri:       string;
 }
 

export interface filterChips {
	labelName: string;
	type: string;
	name: string;
	value: string;
	ariaLabel: string;
}