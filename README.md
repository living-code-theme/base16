<!-- living-code-readme:1 -->
# 🎛️ Living Code for base16 · Stylix · tinted-theming

**Calm slate. Living color.** Living Code for base16 · Stylix · tinted-theming. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Installation

**Stylix (NixOS / home-manager)**

```nix
inputs.living-code = { url = "github:living-code-theme/base16"; flake = false; };

stylix.base16Scheme = "${inputs.living-code}/living-code-night.yaml";
stylix.polarity = "dark";
```

base16 shares 16 slots between ANSI and syntax. Stylix-generated themes use Living Code colors with base16 roles, rather than the native ports' exact syntax mapping. Disable a Stylix target when you install its native Living Code port.

For example, Kitty uses its own input:

```nix
inputs.living-code-kitty = { url = "github:living-code-theme/kitty"; flake = false; };
stylix.targets.kitty.enable = false;
programs.kitty.extraConfig = "include ${inputs.living-code-kitty}/living-code-night.conf";
```

For tinted-theming tools such as tinty, flavours and base16-shell, copy a YAML file into the tool's schemes directory.

## Flavors

Expand a flavor for its activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

```nix
stylix.base16Scheme = "${inputs.living-code}/living-code-night.yaml";
stylix.polarity = "dark";
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

```nix
stylix.base16Scheme = "${inputs.living-code}/living-code-frost.yaml";
stylix.polarity = "dark";
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

```nix
stylix.base16Scheme = "${inputs.living-code}/living-code-paper.yaml";
stylix.polarity = "light";
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

```nix
stylix.base16Scheme = "${inputs.living-code}/living-code-signal.yaml";
stylix.polarity = "dark";
```

</details>

## Configuration

See [base16 · Stylix · tinted-theming's documentation](https://github.com/tinted-theming/home) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

This port supplies theme files for base16 · Stylix · tinted-theming, not the application itself. Install the application separately and follow the installation instructions for its supported configuration format.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/base16/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
