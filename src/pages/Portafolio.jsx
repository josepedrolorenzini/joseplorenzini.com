import React, { useEffect, useState } from 'react'

function Portafolio() {
         const [posts,setPost] = useState({})

    const fetchData = async () =>{
       
       
       try {
       // const res = await fetch("http://localhost:4540/posts") ; 
       // const res    = await fetch("http://13.58.219.169:5000/posts") ;
        const res    = await fetch("https://joseplorenzini.com/api/posts") ;
        const data = await res.json()
        console.log(data)
        setPost(data)
       } catch (error) {
        console.error(error);
       }
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <h2></h2>Portafolio
             {/* 🚀 RESPONSIVE 3-COLUMN GRID SECTION (Original Section) */}
      <section className='mb-12'>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Full Posts Grid</h2>
        
        {/* Responsive Grid Setup */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id || post.id} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-[#242424]">
                <div className="flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={post.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                      alt={post.title || "Post image"}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div 
                      className="text-xs font-bold tracking-wider text-[#b4fb51] uppercase mb-1"
                         >{post.category}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{post.description}</p>
                      <p className="mt-3 text-sm text-gray-500 line-clamp-3">
                        {post.body}
                      </p>
                    </div>
                    <a 
                      href={post.url || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-indigo-500 hover:text-indigo-700 font-medium text-sm transition duration-150"
                    >
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No posts available.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Portafolio