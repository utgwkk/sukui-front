export interface Image {
  id: number;
  filename: string;
  created_at: string;
  comment?: string;
  urls: {
    image_url: string;
    thumbnail_url: string;
    source?: string;
  };
}

export interface ApiImagesQueryParam {
  count: number;
  maxId?: number;
  sinceId?: number;
}

export interface ApiImagesResponse {
  ok: boolean;
  elapsed_time: number;
  whole_count: number;
  data: Image[];
}

export interface ApiImagesSearchQueryParam {
  all?: string;
  any?: string;
  ex?: string;
  count: number;
  maxId?: number;
  sinceId?: number;
}

export type ApiImagesSearchResponse = ApiImagesResponse;
