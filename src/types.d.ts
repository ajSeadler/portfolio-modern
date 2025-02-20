// src/types.d.ts

declare module "*.mdx" {
  const content: React.ComponentType;
  export const metadata: {
    title: string;
    description: string;
    date: string;
    readingTime: string;
    coverImage: string;
  };
  export default content;
}
