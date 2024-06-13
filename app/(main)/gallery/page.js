import NavBar from "@/app/components/layouts/NavBar";

const Gallery = () => {
  return (
    <>
      <NavBar />
      <div className="mt-0.5">
        <section className="bg-gray-100 dark:bg-gray-800 py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold text-center mb-4 md:mb-6">
              Gallery
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md mx-auto mb-8 md:mb-12">
              Explore our collection of stunning images.
            </p>
          </div>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-6 py-8">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 1"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Serene Landscape</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A peaceful meadow with a flowing stream.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 2"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Vibrant Cityscape</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The bustling heart of the city at night.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 3"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Majestic Mountains</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Towering peaks reaching towards the sky.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 4"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Autumn Foliage</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Vibrant colors of the changing seasons.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 5"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Sunset Silhouette</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A breathtaking sunset over the horizon.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 6"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Enchanted Forest</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A mystical woodland with towering trees.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 7"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Coastal Serenity</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Peaceful waves lapping against the shore.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Image 8"
              width={400}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="bg-white dark:bg-gray-950 p-2 text-center">
              <h3 className="text-base font-semibold">Starry Night Sky</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A breathtaking view of the cosmos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
