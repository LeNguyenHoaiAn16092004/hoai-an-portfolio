# Commit and Push

Use this workflow after completing a coherent feature or milestone when Git operations are authorized.

## Procedure

```
Inspect
  ↓
Create/switch feature branch
  ↓
Implement
  ↓
Validate
  ↓
Review diff
  ↓
Security check
  ↓
Stage relevant files
  ↓
Commit
  ↓
Verify
  ↓
Push feature branch
  ↓
Report
```

### Step 1 — Inspect
- Run `git status`.
- Check current branch.
- Review recent commit history.
- Confirm the task explicitly authorizes autonomous Git workflow.
- If the current branch is `main`, switch to `feature/<short-name>`.

### Step 2 — Create/switch feature branch
- Determine the branch type: feature, fix, perf, or docs.
- Create or switch to the appropriate branch: `feature/<short-name>`, `fix/<short-name>`, `perf/<short-name>`, or `docs/<short-name>`.
- Verify the branch is NOT `main`.

### Step 3 — Implement
- Implement the feature according to the task requirements.
- Follow the project architecture and design rules.
- Do not modify `.agents/`, `docs/`, or the remote URL unless explicitly requested.

### Step 4 — Validate
Run all relevant validation commands:
- `npm run lint`
- `npm run type-check`
- `npm run build`
- Tests if available.
- Browser/UI QA for UI changes.

If any validation fails, DO NOT commit. Fix the issue or stop and report it.

### Step 5 — Review diff
- Inspect `git diff`.
- Inspect staged diff after staging (`git diff --cached`).
- Confirm only current-task files are included.
- Do not blindly run `git add .`.

### Step 6 — Security check
Verify no secrets or sensitive files are staged or tracked:
- No `.env` or `.env.*` files containing secrets.
- No API keys, access tokens, or passwords.
- No private credentials or certificates.
- No `node_modules/` or `dist/`.
- No build artifacts or irrelevant generated files.

### Step 7 — Stage relevant files
Stage only files related to the current task.

### Step 8 — Commit
Commit using a Conventional Commit message.
Prefer one coherent commit per completed feature or milestone.
Do not create noisy commits for every tiny edit.

### Step 9 — Verify
- Run `git status`.
- Run `git log -1`.
- Verify the current branch is NOT `main`.
- Verify the working tree is clean.
- Verify commit history remains intact.

### Step 10 — Push feature branch
- Verify branch is NOT `main`.
- Verify remote is `origin`.
- Use normal `git push origin <branch>` (never force push).
- If the task explicitly authorizes pushing `main`, push `main` only when the user explicitly requests it.

### Step 11 — Report
Report:
- Branch
- Commit hash/message
- Validation results
- Push result
- Remaining issues, if any

## Never
- Do not blindly run `git add .`.
- Do not force-push `main`.
- Do not reset/clean/discard work to make the tree clean.
- Do not create or modify GitHub authentication credentials inside the project.
- Do not hide validation failures just to create a commit.
- Do not push directly to `main` during autonomous workflow.
- Do not ask for confirmation for every normal Git operation when the task explicitly authorizes autonomous Git workflow.
