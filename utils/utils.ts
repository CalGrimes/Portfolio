export function generateQuery(category: string | null, searchQuery: string) {
    return { 
      $and: [
        category ? { 'data.category': category } : {},
        {
          $or: [
            { 'data.title': { $regex: searchQuery, $options: 'i' } },
            { 'data.excerpt': { $regex: searchQuery, $options: 'i' } }
          ]
        }
      ]
    };
  }