import contentful, { EntryFieldTypes } from "contentful";

export interface Person {
  contentTypeId: "person",
  fields: {
    title: EntryFieldTypes.Text
    firstName: EntryFieldTypes.Text,
    lastName: EntryFieldTypes.Text,
    bio: EntryFieldTypes.RichText,
    jobTitle: EntryFieldTypes.Text,
    slug: EntryFieldTypes.Text,
    headshot: EntryFieldTypes.Object,
    jobType: EntryFieldTypes.Array
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});