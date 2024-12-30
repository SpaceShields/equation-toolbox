import { defineQuery } from "next-sanity";

export const EQUATIONS_QUERY = defineQuery(`*[_type == "equation" && defined(slug.current) && !defined($search) || title match $search || category match $search ] | order(title asc) {
  _id, 
  title, 
  slug, 
  description, 
  views, 
  history,
  year_derived, 
  category, 
  tex
}`)

export const TOOLBOX_QUERY = defineQuery(`*[_type == "toolbox" && defined(slug.current)] | order(views desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, email, image
  }, 
  description, 
  views,
  equations,
  image,
}`)

export const EQUATION_BY_ID_QUERY = defineQuery(`*[_type == "equation" && _id == $id][0]{
  _id, 
  title, 
  slug, 
  description, 
  views, 
  history,
  year_derived, 
  category,
  tex
}`)

export const TOOLBOX_BY_ID_QUERY = defineQuery(`*[_type == "toolbox" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, email, image
  }, 
  description, 
  views,
  equations,
  image,
}`)

export const EQUATION_VIEWS_QUERY = defineQuery(`
  *[_type == 'equation' && _id == $id][0]{
    _id, views
  }
`)

export const TOOLBOX_VIEWS_QUERY = defineQuery(`
  *[_type == 'toolbox' && _id == $id][0]{
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

export const AUTHOR_BY_ID_QUERY = defineQuery(`
  *[_type == 'author' && _id == $id][0]{
    _id,
    name,
    email,
    image
  }
`)

export const TOOLBOX_BY_AUTHOR_QUERY = defineQuery(`*[_type == "toolbox" && author._ref == $id] | order(views desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, email, image
  }, 
  description, 
  views,
  equations,
  image,
}`)