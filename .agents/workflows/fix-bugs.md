# Bug Fix Workflow

1. Reproduce the issue.
2. Capture the exact error/state.
3. Identify the root cause before changing code.
4. Make the smallest safe fix.
5. Run the previously failing check.
6. Run lint/build.
7. If UI-related, verify in browser.
8. Check for regression in nearby functionality.
9. Update documentation only if behavior/architecture changed.
10. Report root cause, fix, and verification.
