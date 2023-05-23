import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    <h1> {blok.headline} </h1>
  </main>
);

export default Page;
