// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// It is used to define our endpoints and allow to create the API slice
export const productDataApi = createApi({
 // The unique key that defines where the Redux store will store our cache.
 reducerPath: 'productDataApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  baseUrl: 'https://pacific-meadow-17159.herokuapp.com/',
 }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({
  getAllPost: builder.query({
   query: () => ({
    url: 'products',
    method: 'GET'
   })
  }),
  getPostById: builder.query({
   query: (id) => {
    console.log("ID:", id)
    return {
     url: `products/${id}`,
     method: 'GET'
    }
   }
  }),

  deletePost: builder.mutation({
   query: (id) => {
    console.log("Delete ID:", id)
    return {
     url: `products/${id}`,
     method: 'DELETE'
    }
   }
  }),

  createPost: builder.mutation({
   query: (newPost) => {
    console.log("Create Post: ", newPost)
    return {
     url: `products`,
     method: 'POST',
     body: newPost,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),

  updatePost: builder.mutation({
   query: (updatePostData) => {
    console.log("Update Post: ", updatePostData)
    const { id, ...data } = updatePostData
    console.log("Actual Update Post: ", data)
    return {
     url: `products/${id}`,
     method: 'PUT',
     body: data,
     headers: {
      'Content-type': 'application/json; charset=UTF-8',
     }
    }
   }
  }),
 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByIdQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = productDataApi