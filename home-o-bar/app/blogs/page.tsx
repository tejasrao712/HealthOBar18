import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    return (

        <div>
            <section className="mt-10 min-h-screen">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Blog Items */}
                        {[
                            {
                                index:1,
                                title: "Healthy Living By health-O-Bar",
                                description: "The first Blog By Health-O-Bar is dedicated to curate day to day eating habits and lifestyle to attain healthy lifestyle"
                            },
                            {
                                index:2,
                                title: "Healthy Living By health-O-Bar",
                                description: "The first Blog By Health-O-Bar is dedicated to curate day to day eating habits and lifestyle to attain healthy lifestyle"
                            },
                            {
                                index:3,
                                title: "Healthy Living By health-O-Bar",
                                description: "The first Blog By Health-O-Bar is dedicated to curate day to day eating habits and lifestyle to attain healthy lifestyle"
                            },
                            {
                                index:4,
                                title: "Healthy Living By health-O-Bar",
                                description: "The first Blog By Health-O-Bar is dedicated to curate day to day eating habits and lifestyle to attain healthy lifestyle"
                            },
                        ].map((blog) => (
                            <div
                                key={blog.index}
                                className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
                            >
                                <Image
                                    src={`/images/blog-${blog}.jpg`}
                                    alt={`Blog Title ${blog.title}`}
                                    className="mb-4 w-full h-40 object-cover rounded"
                                    width={400}
                                    height={300}
                                />
                                <h3 className="text-xl font-bold mb-2"> {blog.title}</h3>
                                <p className="text-gray-700 mb-4">
                                    {blog.description}
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-color font-semibold hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs