"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/Page";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "TIgDbA6g3L7Q5U05bj4Trwtt",
  use: [apiPlugin],
  components: {
    page: Page,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
