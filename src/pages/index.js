import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Our Coffee Shop</title>
        <meta name="description" content="Discover our artisanal coffee and cozy atmosphere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative h-96">
          <Image
            src="/images/coffee-shop.jpg"
            alt="Coffee Shop Interior"
            //layout="fill"
            fill={true}
            //objectFit="cover"
            style={{objectFit: "cover"}}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Coffee Shop</h1>
              <p className="text-xl text-white mb-8">Discover the perfect brew for every moment</p>
              <Link href="/menu" className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Items */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">Featured Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Featured Item 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/espresso.jpg"
                  alt="Espresso"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Artisanal Espresso</h3>
                  <p className="text-gray-600">Our signature blend, perfect for a quick pick-me-up</p>
                </div>
              </div>
              {/* Featured Item 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/latte.jpg"
                  alt="Latte"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Creamy Latte</h3>
                  <p className="text-gray-600">Smooth and velvety, a customer favorite</p>
                </div>
              </div>
              {/* Featured Item 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/images/pastry.jpg"
                  alt="Pastry"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Fresh Pastries</h3>
                  <p className="text-gray-600">Baked daily, the perfect complement to your coffee</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
