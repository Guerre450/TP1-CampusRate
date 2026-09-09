

## Description

<!-- Explain in 2-3 sentences what this PR does. -->



## Associated issues

<!--
for a PR task/* -> feature/*, mention the child-issue : Refs #3
for a PR feature/* -> main, mention the parent issue : Closes #1
-->


## PR Types

<!-- Check only one -->

- [ ] `feat` — new fonctionality or behavior
- [ ] `fix` — corrects a bug
- [ ] `docs` — documentation
- [ ] `test` — adds or correct a bug
- [ ] `refactor` — refactoring of the code without new features
- [ ] `chore` — configuration, dependencies or other technical work.

## Source branch and target branch

- Source branch : `<task/xx-description>`
- Target branch : `<feature/xx-description>` or `main`


## Modifications

- <Modification 1>
- <Modification 2>
- <Modification 3>

## Verifications done

- [ ] The projects compiles with `npm run build`
- [ ] The lint is succesfull with `npm run lint`
- [ ] The unit test are successfull with `npm run test`
- [ ] The E2E tests are successful with `npm run test:e2e`
- [ ] The manual tests were done
- [ ] No secrets were added
- [ ] The documentation is up to date

## Test procedures(If applicable)

<!-- Give the steps which others can use to test the changes -->

1. Step 1
2. Step 2
3. Expected Result

## Modified routes(If applicable)

<!-- Deleted this section if no routes or responses were modified -->
<!-- Supprimer cette section si aucun endpoint ou format de données n'est modifié. -->

| Method | Route | Statut| Effect |
|---|---|---:|---|
| `<GET>` | `</api/v1/...>` | `<200>` | `<Description>` |

New Response :

```json
{
  "example": "value"
}
```

## Screenshot (If applicable)

<!-- Screenshot if the work cannot be determined throught tests or commits -->


## Anything Else? (If applicable)

<!-- signal a limit, dependency, a decision or work left. -->


## Control list before merge

- [ ] The PR affects a single issue
- [ ] The title is formated as follows: `description (#ref_issue)`
- [ ] The issue is referenced in the description
- [ ] The target branch is correct
- [ ] The revision comments were acknowledged 
- [ ] The PR is up to date with the target branch (if possible breaking changes were done)
- [ ] The issue satisfies the above
