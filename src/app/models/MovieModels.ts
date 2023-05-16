export interface Movie {
  "adult": boolean,
  "backdrop_path": string,
  "id": number,
  "title": string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "poster_path": string,
  "media_type": string,
  "genre_ids": number[],
  "popularity": number,
  "release_date": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}

export interface Actor {
  "adult": boolean,
  "gender": number,
  "id": number,
  "known_for_department": string,
  "name": string,
  "original_name": string,
  "popularity": number,
  "profile_path": string,
  "cast_id": number,
  "character": string,
  "credit_id": string,
  "order": number
}

export interface HeaderLink {
  name: string,
  path: string,
  regex: RegExp
}
