// This port owns its application mappings. Inputs come only from the pinned local palette.
import { hex } from '../scripts/color.mjs';

const BASE16 = {
  base00: "base", base01: "surface0", base02: "surface2", base03: "comment",
  base04: "subtext", base05: "text",
  base08: "flare", base09: "copper", base0A: "amber", base0B: "moss",
  base0C: "teal", base0D: "steel", base0E: "orchid", base0F: "rose",
};

function base16(f) {
  const [L, C, h] = f.raw.text;
  const step = f.light ? -1 : 1;
  const out = Object.fromEntries(Object.entries(BASE16).map(([k, n]) => [k, f.c(n)]));
  Object.assign(out, {
    base08: f.ansi16("red"), base0A: f.ansi16("yellow"), base0B: f.ansi16("green"),
    base0C: f.ansi16("cyan"), base0D: f.ansi16("blue"), base0E: f.ansi16("magenta"),
  });
  out.base06 = hex([L + step * 0.03, C * 0.7, h]);
  out.base07 = hex([L + step * 0.055, C * 0.4, h]);
  return Object.fromEntries(Object.keys(out).sort().map((k) => [k, out[k]]));
}

const base16Port = {
files: (f) => {
    const s = base16(f);
    return [{
      path: `${f.slug}.yaml`,
      content: `system: "base16"
name: "${f.name}"
slug: "${f.slug}"
author: "Living Code (https://github.com/living-code-theme/base16)"
variant: "${f.light ? "light" : "dark"}"
palette:
${Object.entries(s).map(([k, v]) => `  ${k}: "${v}"`).join("\n")}
`,
    }];
  }
};

export function generate(flavors) {
  return [...flavors.flatMap(f => base16Port.files(f)), ...(base16Port.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
