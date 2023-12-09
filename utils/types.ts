export type Skills =
  | {
      id: string;
      name: string;
      sub_categories: string[] | null;
    }[]
  | null;

export type Careers =
  | {
      id: string;
      name: string;
      description: string;
      image: string;
      job_title: string;
      demand: number;
      skills: string[];
      resources?: string[];
    }[]
  | null;
