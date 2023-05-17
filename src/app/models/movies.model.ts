export class Film {
    id?: string;
	liked?: boolean;
	name?: string;
	description?: string;
	year?: string;
	categories?: string;
	rating?: number;
	photo?: string;
	members?: Member[];
	trailer?: string;
}

class Member{
	fullName?: string;
	position?: string;
	photo?: string;
}