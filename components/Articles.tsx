import React from 'react'
import Article from '@/components/Article'

export default function Articles({articles}: any) {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    {articles && articles.map((post: any) => {
      return (
        <Article post={post} key={post.id} />
      )})}
      </div>

    
  )
}
