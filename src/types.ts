export interface APIResponse {
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  count: number;
  from: number;
  hits: Array<{
    _links: {
      self: {
        href: string;
      };
    };
    recipe: {
      image: string;
      label: string;
      totalTime: number;
      uri: string;
    };
  }>;
  to: number;
}

export interface FilterChip {
  labelName: string;
  type: string;
  name: string;
  value: string;
  ariaLabel: string;
}

export interface RecipePage {
 recipe: {
		image: string;
		label: string;
		totalTime: number;
		uri: string;
	};
  nextPage?: string; 
}