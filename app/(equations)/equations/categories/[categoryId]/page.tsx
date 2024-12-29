import React from 'react'
import { promises as fs } from 'fs';

interface Equation {
    id: number;
    name: string;
    description: string;
    latex_equation: string;
    created_in: string;
}

interface Category {
    id: number;
    name: string;
    description: string;
    discipline: string;
    image_url: string;
    top_contributors: string[];
}

const CategoryDetailsPage = async ( { params }: {
    params: Promise<{categoryId: string}>;
} ) => {

    const file = await fs.readFile(process.cwd() + '/app/fields.json', 'utf8');
    const data: Category[] = JSON.parse(file);
    const { categoryId } = await params;

    const file2 = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data2: Equation[] = JSON.parse(file2);

  return (
    <div>CategoryDetailsPage</div>
  )
}

export default CategoryDetailsPage