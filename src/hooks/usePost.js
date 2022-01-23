import { useMemo } from "react/cjs/react.development"


export const useSortedPosts= (posts, sort) => {
    const sortedPosts = useMemo(()=> {
        if (sort) {
          console.log(sort, ...posts);
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      },[sort, posts])

      return sortedPosts
}

export const usePosts = (posts, sort, query ) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return  sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchedPosts;
}