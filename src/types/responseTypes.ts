// Response from getMovies request

export interface IGetMoviesResponse {
  docs: IMovieInfo[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovieInfo {
  id: number;
  name: string;
  year: number;
  poster: Poster;
  genres: Genre[];
  alternativeName?: string;
}

export interface Genre {
  name: string;
}

export interface Poster {
  url: string | undefined;
  previewUrl: string;
}

// Response from getMovieById request

export interface IGetMovieByIdResponse {
  id: number;
  type: string;
  externalId: ExternalId;
  name: string;
  rating: Rating;
  description: string;
  votes: Votes;
  distributors: Distributors;
  premiere: Premiere;
  slogan?: string;
  year: number;
  poster: Poster;
  facts: Fact[];
  genres: Genre[];
  countries: Genre[];
  persons: Person[];
  images: Images;
  lists: string[];
  spokenLanguages: SpokenLanguage[];
  productionCompanies: ProductionCompany[];
  typeNumber: number;
  alternativeName?: string;
  backdrop: Poster;
  budget: Budget;
  enName?: string;
  movieLength: number;
  names: Name[];
  fees: Fees;
  updatedAt: string;
  imagesInfo: ImagesInfo;
  shortDescription: string;
  technology: Technology;
  ticketsOnSale: boolean;
  similarMovies: SimilarMovie[];
  sequelsAndPrequels: SequelsAndPrequel[];
  ageRating: number;
  logo: Logo;
  watchability: Watchability;
  top250: number;
  audience: Audience[];
  isSeries: boolean;
  videos: Videos;
}

export interface Videos {
  trailers: Trailer[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface Audience {
  count: number;
  country: string;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo;
  url: string;
}

export interface Logo {
  url: string;
}

export interface SequelsAndPrequel {
  id: number;
  name: string;
  enName?: string;
  alternativeName?: string;
  type: string;
  poster: Poster;
  year: number;
  rating: Rating;
}

export interface SimilarMovie {
  id: number;
  name: string;
  enName?: string;
  alternativeName?: string;
  type: string;
  poster: Poster;
  year: number;
  rating: Rating;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface ImagesInfo {
  framesCount: number;
}

export interface Fees {
  world: World;
}

export interface World {
  value: number;
  currency: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface Budget {}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Genre {
  name: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Premiere {
  world: string;
  russia: string;
  dvd: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: string;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
}

export interface ExternalId {
  imdb: string;
  tmdb: number;
  kpHD: string;
}
