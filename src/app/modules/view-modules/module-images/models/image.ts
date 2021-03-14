export interface Image {
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    id: number;
    favorite: boolean;
}

export interface ImagesRatio {
  images: Image[];
  ratio: string;
}

