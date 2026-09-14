# Git Policy

## Purpose
Git is the project's version-control and recovery mechanism. Git operations must preserve
the project history and must never be used as a shortcut to rewrite, reset, or discard work.

## Protected project assets
The agent MUST NOT delete, rename, move, or overwrite:
- `.agents/`
- `docs/`
- user-authored source/content/configuration files
unless the current task explicitly requires a specific edit.

Never run destructive Git commands such as:
- `git reset --hard`
- `git clean -fd`
- `git checkout -- .`
- `git restore .`
- history rewriting commands
unless the user explicitly requests them.

## Main branch protection
`main` is the stable branch.

`main` is NEVER the automatic destination for feature implementation.

The agent MUST NOT automatically push feature work directly to `main`.

The agent MUST NOT force-push `main`.

The agent may push `main` only when the user explicitly requests a main-branch push.

## Branch policy
`main` is the stable branch.

Branch naming conventions:

- Feature branches: `feature/<short-name>` (e.g., `feature/design-system`)
- Bug fixes: `fix/<short-name>` (e.g., `fix/mobile-nav-overflow`)
- Performance work: `perf/<short-name>` (e.g., `perf/reduce-hero-3d`)
- Documentation: `docs/<short-name>` (e.g., `docs/update-architecture`)

Use short, descriptive branch names.

## Before committing
Before every commit:
1. Run `git status`.
2. Inspect `git diff` and, when needed, `git diff --cached`.
3. Verify that only files related to the current task are staged.
4. Check for secrets and sensitive files.
5. Run the relevant validation:
   - lint
   - type-check
   - build
   - tests, if present
   - browser/UI QA for UI changes
6. Do not commit broken or unverified work.

## Push safety
Before pushing:
1. Verify branch is NOT `main`.
2. Verify working tree contains only intended changes.
3. Verify validation passes (lint, type-check, build).
4. Verify no secrets are tracked.
5. Verify remote is `origin`.
6. Use normal `git push` (never force push).

## Files that must never be committed
Never commit:
- `.env`
- `.env.*` files containing secrets
- API keys
- access tokens
- passwords
- private credentials
- certificates/private keys
- `node_modules/`
- build output such as `dist/`
- logs
- local IDE/system artifacts
unless a file is intentionally part of the repository and contains no secret.

Maintain `.gitignore` accordingly.

## Commit policy
Use clear Conventional Commit-style messages, for example:
- `chore: initialize portfolio foundation`
- `feat: build editorial project index`
- `feat: add responsive theme system`
- `fix: correct mobile navigation overflow`
- `perf: reduce hero 3d workload`
- `docs: update architecture guidance`

Prefer one coherent commit per completed feature or milestone.
Do not create noisy commits for every tiny edit.

## Autonomous Git workflow
When the current task explicitly authorizes autonomous Git workflow, the agent should be able to:
1. Inspect branch/status.
2. Create or switch to the appropriate feature branch.
3. Implement the feature.
4. Run lint.
5. Run type-check.
6. Run build.
7. Run tests if available.
8. Perform browser/UI QA when relevant.
9. Inspect `git diff`.
10. Inspect `git status`.
11. Check for secrets/unwanted files.
12. Stage only relevant files.
13. Commit with a Conventional Commit message.
14. Verify commit and working tree.
15. Push the feature branch to `origin`.
16. Report branch, commit, validation results, and push result.

The agent should NOT ask for confirmation for every normal Git operation when the current task explicitly authorizes autonomous Git workflow.

The agent MUST NOT push directly to `main` during autonomous workflow. Always push the feature branch.

## Push policy
The agent may create commits automatically when the task explicitly authorizes Git operations.

The agent may push a feature/fix branch only when the current project workflow explicitly permits
automatic pushing.

Do NOT:
- add a GitHub remote without explicit authorization
- push to `main` automatically during the initial setup
- expose authentication tokens in logs, source files, commits, or prompts

When remote authentication is unavailable, stop at the local commit and report the exact next action.

## Failure handling
If lint, type-check, build, tests, or browser QA fails:
- DO NOT commit broken work.
- Fix the issue if it is clearly caused by the current task.
- If the problem cannot be safely fixed, stop and report it.

If unexpected deletion or mass modification is detected:
- STOP.
- Do not reset or clean automatically.
- Inspect `git status` and `git diff`.
- Preserve the current state.
- Report the problem before taking destructive recovery actions.

## Recovery rule
If unexpected file deletion, mass modification, repository corruption, or an unfamiliar Git state
is detected:
- STOP.
- Do not reset or clean automatically.
- Inspect `git status` and `git diff`.
- Preserve the current state.
- Report the problem before taking destructive recovery actions.

## Git is not a substitute for QA
A successful commit does not mean the feature is complete.
The Definition of Done remains the quality policy in `.agents/rules/04-quality.md`.
