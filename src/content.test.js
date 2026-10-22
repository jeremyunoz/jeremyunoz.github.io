import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import {
  copy,
  filters,
  filterProjects,
  pipeline,
  PROFILE,
  projects,
} from "./content.js";

test("project filters show the intended overlapping categories", () => {
  assert.deepEqual(
    filterProjects("all").map((p) => p.id),
    ["aurabot", "bincredible"],
  );
  assert.deepEqual(
    filterProjects("embedded").map((p) => p.id),
    ["aurabot", "zotfitness"],
  );
  assert.deepEqual(
    filterProjects("ai").map((p) => p.id),
    ["aurabot", "bincredible"],
  );
  assert.deepEqual(
    filterProjects("iot").map((p) => p.id),
    ["bincredible", "zotfitness"],
  );
  assert.deepEqual(filterProjects("unknown"), []);
  assert.ok(projects.some((p) => p.id === "zotfitness"));
});

test("every project has complete bilingual content and real local assets", () => {
  assert.equal(new Set(projects.map((p) => p.id)).size, projects.length);
  for (const p of projects) {
    for (const file of [p.image, p.gallery].filter(Boolean))
      assert.ok(existsSync(`public${file}`), file);
    assert.ok(p.categories.every((category) => filters.includes(category)));
    assert.deepEqual(Object.keys(p.en).sort(), Object.keys(p.zh).sort());
    for (const lang of ["en", "zh"]) {
      assert.ok(Object.values(p[lang]).every(Boolean));
      assert.equal(p[lang].decisions.length, 3);
    }
  }
  assert.ok(existsSync(`public${PROFILE.resume}`));
});

test("language dictionaries cover the same controls and system stages", () => {
  assert.deepEqual(Object.keys(copy.en).sort(), Object.keys(copy.zh).sort());
  for (const lang of ["en", "zh"]) {
    assert.ok(filters.every((filter) => copy[lang].filters[filter]));
    assert.ok(pipeline.every((stage) => stage.label[lang] && stage[lang]));
    assert.equal(copy[lang].backgroundItems.length, 3);
    assert.ok(
      copy[lang].backgroundItems.every(
        (item) => item.length === 3 && item.every(Boolean),
      ),
    );
  }
  assert.match(copy.en.education[0][2], /Spring 2027/);
  assert.equal(copy.zh.name, "郑剑铭");
});
