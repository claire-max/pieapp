import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "66ps81u6",
  dataset: "production",
  apiVersion: "2023-03-01",
  useCdn: true,
  token:
    "skWh9zrYHSuquNrGPqcj0h5BSXQgeJIa2fPHBaFCcNW5pWpvUJWsoYyIRGwTOha0jpeSzAyXnvAewcHDiLcCJt1eSBIZvj2kN5eWFwBFDKIXVbA2eRoQPsSGW9P49iMyB0cw5yGuDohYHf7Qt0p2Hjog3DPmsZ2Qb5eQea6nqMBVOKNvzK6f",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);