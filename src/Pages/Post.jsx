import React from 'react'
import { useState,useEffect } from 'react'
import { json, Link } from 'react-router-dom'

const Post = () => {
  const [posts,setposts]=useState([]);
  const [loader,setloader]=useState(true);
  useEffect (()=>{
    fetchposts();
  },[]);

  async function fetchposts(){
  await fetch('https://jsonplaceholder.typicode.com/posts/').then((data)=>{
      return(
         data.json()
        )})
    .then(json=>setposts(json))
    .then(setTimeout(()=>{
      
        setloader(false)
    
    },4000))
   
    .catch(error=>console.log("internet connection error"))
 }

  return (
    <main className='posts'>

<div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Posts</h1>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Posts</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        {loader
          ? <div className="text-center">Loading...</div>
          : (
            <div className="row">
              {posts.map(post => {
                return(
                  <div className="col-sm-6" key={post.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">
                          {post.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }
      </div>
    </main>
  )
}

export default Post