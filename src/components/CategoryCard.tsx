import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Category } from "@/data/skills";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = category.icon;
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="bg-card hover:bg-brand-light hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col justify-between border-2 border-brand-primary/30 rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold text-brand-text">{category.name}</CardTitle>
          <Icon className="h-8 w-8 text-brand-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;