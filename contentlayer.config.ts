import { makeSource, defineDocumentType, ComputedFields } from "@contentlayer/source-files"; //needed to import ComputedFields from contentlayer
// import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const blogsComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join(),
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`, // was a bug here
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
  },
  computedFields: blogsComputedFields, // this computed fields was in the wrong line, moved to this correct line so object is formatted correctly.
}));

export default makeSource({
  contentDirPath:'content',
  documentTypes: [Blog], //bug here... was documentType should be -> documentTypes
  mdx: {
    rehypePlugins: [rehypeSlug]
  }
});
