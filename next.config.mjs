import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // gray-matter dynamically requires `esprima` (for an engine we don't use),
  // which webpack bundles into a vendor chunk that intermittently fails to
  // resolve under the dev static-paths worker. Loading it as a node external
  // sidesteps the chunk entirely.
  serverExternalPackages: ["gray-matter"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, { name: "frontmatter" }],
      remarkGfm,
    ],
  },
});

export default withMDX(nextConfig);
