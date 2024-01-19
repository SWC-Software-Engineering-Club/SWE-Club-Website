import { makeSource, defineDocumentType } from '@contentlayer/source-files';

const ComputedFields = {
    slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
    },
    slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join(),
    },
  }

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx,`,
  contentType: 'mdx',
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
  ...ComputedFields
}}));

export default makeSource({
  /* options */
  contentDirPath: 'content',
  documentType: [Blog],
});
