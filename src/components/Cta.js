import React from 'react'

const Cta = () => {
    return (
        <div>
            <aside class="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
                <div class="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 class="text-4xl font-bold sm:text-5xl">
                            New product launched!
                            <span class="hidden sm:block">
                                Impossible to put down
                            </span>
                        </h2>

                        <p class="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit excepturi, fuga voluptatum ex rem enim deleniti
                            officiis, odio voluptatibus non soluta! Quo, explicabo aspernatur!
                        </p>

                        <a class="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" href="">
                            Get it now

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-4 h-4 ml-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="absolute inset-0 w-full h-full mix-blend-multiply">
                    <img
                        src="https://thegadgetflow.com/wp-content/uploads/2021/07/Nothing-ear-1-earbuds-featured-1200x675.jpeg"
                        alt="New wireless earbuds"
                        class="absolute inset-0 object-cover object-top w-full h-full"
                    />
                </div>
            </aside>
        </div>
    )
}

export default Cta
