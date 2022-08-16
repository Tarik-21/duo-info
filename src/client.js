import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "5egpc37t",
  dataset: "production",
  apiVersion: "2022-07-30",
  useCdn: true,
  token: "skUZTOkAHsUaLqcnUWYdOhWxFsty2GkU1Ajw48jAttBc9b6koPlg8cxv0lqK2BOTmscpLgUM43HXcxzGCzE6XHXycRUVvpREpsUnQ5sWP4DFFlzGGEwHN8yzdQy796xpaC1lvBsLGIjtJZ0E0O7jC2cucZwHYgNeFqNivp5820iAQ5786LoT",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
