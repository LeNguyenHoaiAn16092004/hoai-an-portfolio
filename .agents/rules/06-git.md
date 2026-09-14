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

## Branch policy
- `main` is the stable branch.
- New features should normally use a focused branch:
  `feature/<short-name>`
- Bug fixes should normally use:
  `fix/<short-name>`
- Performance work may use:
  `perf/<short-name>`
- Documentation-only work may use:
  `docs/<short-name>`

Do not force-push `main`.

## Push policy
The agent may create commits automatically when the task explicitly authorizes Git operations.

The agent may push a feature/fix branch only when the current project workflow explicitly permits
automatic pushing.

Do NOT:
- add a GitHub remote without explicit authorization
- push to `main` automatically during the initial setup
- expose authentication tokens in logs, source files, commits, or prompts

When remote authentication is unavailable, stop at the local commit and report the exact next action.

## Autonomous Git workflow
For an authorized feature:
1. Inspect branch/status.
2. Implement the feature.
3. Validate the implementation.
4. Review diff.
5. Check secrets/unwanted files.
6. Stage only relevant files.
7. Commit with a clear message.
8. Verify commit and working tree.
9. Push only if the workflow explicitly allows it.
10. Report branch, commit, validation results, and push result.

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
