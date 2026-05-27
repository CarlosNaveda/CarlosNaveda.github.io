interface postType {
    index: number;
    imageSource: string;
    publishDate: Date;
    tag: string[];
    title: string;
    shortDescription: string;
    author: string; 
    tableOfContents: {index: number, title: string}[];
    content: string;
    serializedContent?: Record<string, unknown>;
}

export default postType;


