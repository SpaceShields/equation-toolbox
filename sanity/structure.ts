import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("equation").title("Equations"),
      S.documentTypeListItem("toolbox").title("Toolboxes"),
      S.documentTypeListItem('variable').title("Variables"),
      S.documentTypeListItem('category').title("Categories"),
      S.documentTypeListItem('discipline').title("Disciplines"),
    ])
