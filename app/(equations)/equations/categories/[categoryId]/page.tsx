import React from 'react'

const CategoryDetailsPage = async ( { params }: {
    params: Promise<{categoryId: string}>;
} ) => {
    const { categoryId } = await params;

  return (
    <div>CategoryDetailsPage</div>
  )
}

export default CategoryDetailsPage