# Commit and Push

Use this workflow after completing a coherent feature or milestone when Git operations are authorized.

## Procedure

1. Inspect repository state:
   - `git status`
   - current branch
   - recent commit history

2. Validate the work:
   - lint
   - type-check
   - build
   - tests if available
   - browser/UI QA for UI changes

3. Review changes:
   - inspect `git diff`
   - inspect staged diff after staging
   - confirm only current-task files are included

4. Security check:
   - no `.env` secrets
   - no API keys/tokens/passwords
   - no private credentials
   - no `node_modules`
   - no build artifacts or irrelevant generated files

5. Stage only relevant files.

6. Commit using a Conventional Commit message.

7. Verify:
   - `git status`
   - `git log -1`
   - current branch

8. Push:
   - push only when the project Git policy and current task explicitly authorize it
   - normally push the feature/fix branch, not `main`

9. Final report:
   - branch
   - commit hash/message
   - validation results
   - push result
   - remaining issues, if any

## Never
- Do not blindly run `git add .`.
- Do not force-push `main`.
- Do not reset/clean/discard work to make the tree clean.
- Do not create or modify GitHub authentication credentials inside the project.
- Do not hide validation failures just to create a commit.
