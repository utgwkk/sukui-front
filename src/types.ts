export interface Image {
  id: number;
  filename: string;
  craeted_at: string;
  comment?: string;
  urls: {
    image_url: string;
    thumbnail_url: string;
    source?: string;
  };
}

export interface ApiImagesResponse {
  ok: boolean;
  elapsed_time: number;
  whole_count: number;
  data: Image[];
}
