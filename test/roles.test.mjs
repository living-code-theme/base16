// Port-owned role-contract tests, exercising generated files and real grammars.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {resolveAll} from '../scripts/palette.mjs';
import {generate} from '../src/generate.mjs';

const flavors = resolveAll();

const base16 = f => Object.fromEntries([...generate([f])[0].content.matchAll(/^  (base[0-9A-Fa-f]{2}): "(#[a-f0-9]{6})"/gm)].map(m=>[m[1],m[2]]));

test("base16 slots keep the roles the base16 spec gives them", async () => {

  for (const f of flavors) {
    const s = base16(f);
    assert.equal(s.base00, f.r("bg"), `${f.id} base00 is the background`);
    assert.equal(s.base05, f.r("fg"), `${f.id} base05 is the foreground`);
    assert.equal(s.base03, f.r("comment"), `${f.id} base03 is comments`);
    assert.equal(s.base09, f.r("number"), `${f.id} base09 is numbers and constants`);
    for (const [slot, ansi] of [["base08", "red"], ["base0A", "yellow"], ["base0B", "green"], ["base0C", "cyan"], ["base0D", "blue"], ["base0E", "magenta"]]) {
      assert.equal(s[slot], f.ansi16(ansi), `${f.id} ${slot} is ANSI ${ansi}`);
    }
  }
});
