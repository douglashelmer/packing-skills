import type { NextConfig } from "next";

// Em produção (skill.helmer.com.br) o site roda na raiz — basePath vazio.
// No build do GitHub Pages o site fica em /packing-skills, então o workflow
// define GITHUB_PAGES=true para aplicar o basePath só nesse caso.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? "/packing-skills" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
