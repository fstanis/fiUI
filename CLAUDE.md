# Code Style & Quality

## Code Style

- Follow standard casing conventions for the language (e.g., camelCase for variables/functions, PascalCase for classes).
- Prefix boolean variables with `is`, `has`, `can`, or `should`.
- Avoid optional or nullable types when the empty or default value is functionally identical.
- Always use braces `{}` for control flow blocks. The body must go on its own line inside the braces.
- Do not nest ternaries or use them for multi-way branching. Use conditional statements or a lookup map. A single inline
  ternary is acceptable.
- Write one statement per line.
- Avoid copy-pasting multi-line blocks. Extract shared logic into reusable components.

## Naming

- Use intention-revealing names. Avoid abbreviations and single letters, except for short loop counters.
- Ensure names are pronounceable and searchable.
- Name services and classes as nouns; name actions and methods as verbs.
- Use one word per concept across the codebase.
- Avoid noise words and context already implied by the enclosing module.

## Comments

- In general, DO NOT COMMENT CODE. If code requires explanation, extract it into a well-named variable or function.
- When necessary, limit inline comments to a single terse line explaining external constraints, surprising decisions
  preventing future bugs, or performance choices backed by metrics.
- Write one clear sentence describing the component's contract for every exported function, type, or constant, utilizing
  the language's standard documentation format (e.g. javadoc, jsdoc).
- Do not narrate obvious code.
- Do not leave commented-out code.
- Do not restate the signature in the documentation comment.

## Functions

- Keep functions small and at a single level of abstraction. Extract distinct operational sections into their own
  functions.
- Limit parameters. Group related arguments into a single options object. Avoid positional boolean flags.
- Ensure no side effects occur beyond what the function name implies.
- Keep related code vertically close and order functions caller-above-callee.

## Error Handling

- Throw specific, context-rich error types or classes rather than returning error codes.
- Never swallow errors silently.
- Validate inputs only at system boundaries. Do not re-validate downstream.
- Return an empty collection rather than a null state for "no results."
- Fail fast. Surface bad state at the point of detection.

## Design

- Adhere to the Single Responsibility Principle. A module or class should have one reason to change.
- Keep interfaces small and focused. Consumers should not depend on methods they never call.
- Depend on abstractions. Intercept other components through defined interfaces, not internal logic.
- Favor composition over inheritance.
- Keep components small and cohesive.

## Conditionals & Coupling

- Extract complex boolean expressions into well-named variables or functions.
- Prefer a lookup map or a switch statement over long conditional chains for behavior varying by type.
- Follow the Law of Demeter. Do not chain through objects to reach behavior; communicate only with immediate
  collaborators.

## Good Code Practices

- Never mutate input parameters or return values from other functions. Create new data structures when modifications are
  necessary.
- Collect necessary data early and fall through to shared code paths to prevent duplicated logic across multiple return
  statements.
- Use collections over conditionals for tracking. Track state via an append-only collection and evaluate it at the end
  to eliminate conditional branching.
- Do not create abstractions prematurely. Keep single-use, readable logic inline.
- Extend a shared utility's seam instead of hand-stripping or rewriting inputs before forwarding them. Pre-processing
  creates a parallel version of the utility's contract that drifts as the utility evolves.
