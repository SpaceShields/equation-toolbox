import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("equation").title("Equation"),
      S.documentTypeListItem("equationItems").title("Equation Items"),
      S.documentTypeListItem("toolbox").title("Toolbox"),
    ])
