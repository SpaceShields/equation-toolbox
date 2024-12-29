import { defineQuery } from "next-sanity";

export const EQUATIONS_QUERY = defineQuery(`*[_type == "equation" && defined(slug.current) && !defined($search) || title match $search || category match $search ] | order(title asc) {
  _id, 
  title, 
  slug, 
  description, 
  views, 
  history,
  year_derived, 
  views, 
  category, 
  tex
}`)

export const EQUATION_BY_ID_QUERY = defineQuery(`*[_type == "equation" && _id == $id][0]{
  _id, 
  title, 
  slug, 
  description, 
  views, 
  history,
  year_derived, 
  views, 
  category,
  tex
}`)

export const EQUATION_VIEWS_QUERY = defineQuery(`
  *[_type == 'equation' && _id == $id][0]{
    _id, views
  }
`)

export const AUTHOR_BY_GOOGLE_EMAIL_QUERY = defineQuery(`
    *[_type == 'author' && email == $email][0]{
      _id,
      name,
      email,
      image
    }
`)