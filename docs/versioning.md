**# Versioning Policy for Sunny Components**

## **Semantic Versioning Overview**
Sunny Components follows **semantic versioning** (SemVer) to ensure clear and predictable version bumps. Version numbers follow the format:

```
MAJOR.MINOR.PATCH
```
- **MAJOR (prefix: `change`)** – Breaking changes that alter how the library or components are used.
- **MINOR (prefix: `add`)** – New features, components, or enhancements.
- **PATCH (prefix: `fix`)** – Bug fixes, documentation updates, or minor improvements.
- **Non-user-facing (prefix: `util`, `doc` or `config`)** – Internal tooling changes, CI/CD updates, internal documentation, and other non-functional updates.

---

## **Versioning Categories & PR Naming**
To automate versioning, pull request (PR) titles should include one of the following prefixes:

### **🔹 MAJOR (`change`) – Breaking Changes**
**Examples:**
- Removing or renaming an existing component
- Changing a component’s API in a way that breaks existing usage
- Refactoring the core system in a way that requires user adjustments
- Addition or major restructuring of theming or configuration

**PR Title Format:**
```
change: remove deprecated Button `size` prop
```
```
change: introduce color theming
```

---

### **🔹 MINOR (`add`) – New Features & Enhancements**
**Examples:**
- Adding a new component
- Introducing theme presets or additional design tokens
- Expanding component capabilities with new (optional) props
- Performance optimizations that don’t change the API

**PR Title Format:**
```
add: new `Card` component
```

---

### **🔹 PATCH (`fix`) – Bug Fixes & Small Improvements**
**Examples:**
- Fixing a bug in a component
- Improving styles, responsiveness, or accessibility
- Updating documentation
- Making an existing feature more robust

**PR Title Format:**
```
fix: resolve alignment issue in `River` component
```

---

### **🔹 NON-USER-FACING (`util`, 'doc' or `config`) – Internal Changes**
**Examples:**
- Updating ESLint rules or other dev tooling
- CI/CD updates (GitHub Actions, publishing automation)
- Dependency updates (unless breaking)
- Internal refactoring with no API changes
- Adding internal documentation

**PR Title Format:**
```
util: update ESLint rules
doc: add documentation on token generation
config: improve GitHub Actions workflow
```

---

## **Special Case: Adding a Prop to a Component**
Adding a new prop can fall into different categories:
- If the new prop is **optional and doesn’t break existing functionality** → **MINOR (`add`)**
- If the new prop **is required or changes existing behavior** → **MAJOR (`change`)**
- If the new prop **fixes a bug in an existing implementation** → **PATCH (`fix`)**

**Examples:**
```
add: add required `loading` prop to `Button`
change: rename `variant` prop in `Button`
fix: correct `align` prop behavior in `Grid`
```

---

## **Final Notes**
- **Always use clear, descriptive PR titles** following this format.
- **Versioning is automated based on PR titles**, so consistency is key.

