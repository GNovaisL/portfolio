import { StaticImageData } from 'next/image';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    stack: string[];
    metrics?: string[];
    link?: string;
    github?: string;
    featured?: boolean;
}
