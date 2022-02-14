import React from 'react'

const productList = [
  {
    'name': 'Earbuds 1',
    'price': '$99',
    'colors': '2',
    'image': 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    'name': 'Earbuds 2',
    'price': '$129',
    'colors': '3',
    'image': 'https://images.unsplash.com/photo-1615147921504-4a42d643446c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    'name': 'Earbuds 3',
    'price': '$169',
    'colors': '4',
    'image': 'https://images.unsplash.com/photo-1632200004922-bc18602c79fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    'name': 'Earbuds 4',
    'price': '$199',
    'colors': '6',
    'image': 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80'
  }
]



const Products = () => {
  return (
    <div>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <span class="inline-block w-12 h-1 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
              True Wireless Stereo Buds
            </h2>
          </div>

          <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
            {productList.map((product, i) => (
              <a href="" class="block">
                <div class="flex justify-center">
                  <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
                </div>

                <img
                  alt="Trainer Product"
                  src={product.image}
                  class="object-cover w-full -mt-3 h-96"
                />

                <h5 class="mt-4 text-sm text-black/90">
                  {product.name}
                </h5>

                <div class="flex items-center justify-between mt-4 font-bold">
                  <p class="text-lg">
                    {product.price}
                  </p>

                  <p class="text-xs tracking-wide uppercase">
                    {product.colors} Colors
                  </p>
                </div>
              </a>
            ))}



          </div>
        </div>
      </section>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <span class="inline-block w-12 h-1 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
              Smart Watches
            </h2>
          </div>

          <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
            {productList.map((product, i) => (
              <a href="" class="block">
                <div class="flex justify-center">
                  <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black"> New </strong>
                </div>

                <img
                  alt="Trainer Product"
                  src={product.image}
                  class="object-cover w-full -mt-3 h-96"
                />

                <h5 class="mt-4 text-sm text-black/90">
                  {product.name}
                </h5>

                <div class="flex items-center justify-between mt-4 font-bold">
                  <p class="text-lg">
                    {product.price}
                  </p>

                  <p class="text-xs tracking-wide uppercase">
                    {product.colors} Colors
                  </p>
                </div>
              </a>
            ))}



          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
