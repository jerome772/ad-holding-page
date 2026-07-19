import { MetadataRoute } from "next";

// Balanced AI crawler policy: allow bots that retrieve content live for an
// answer engine response (visibility for ADV), disallow bots that only
// harvest content for model training (no visibility benefit in return).
const AI_RETRIEVAL_BOTS = [
  "ChatGPT-User",
  "Claude-Web",
  "PerplexityBot",
  "OAI-SearchBot",
  "Claude-SearchBot",
];

const AI_TRAINING_BOTS = [
  "GPTBot",
  "Google-Extended",
  "anthropic-ai",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: AI_RETRIEVAL_BOTS, allow: "/" },
      { userAgent: AI_TRAINING_BOTS, disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.advhq.com.au/sitemap.xml",
  };
}
