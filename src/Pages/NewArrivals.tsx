import BagListing from '../Components/newArrivals/Bag-Listing'
import FilterSidebar from '../Components/newArrivals/Filter-Sidebar'
import HeroBanner from '../Components/newArrivals/Hero-Banner'
import ImageCardGrid from '../Components/newArrivals/image-card-grid'
import SortingComponent from '../Components/newArrivals/Sorting-Component'
import { getBags } from '../lib/Data'
import { luxuryItems } from '../lib/Images-Data'

export default function NewArrivals() {
  const bags = getBags()

  return (
    <>
      <HeroBanner />
      <div className='screen'>
        <main className='min-h-screen bg-white'>
          <div className='container mx-auto px-4 py-6'>
            <div className='flex justify-between items-end p-2 mb-6 border-b-[1px] border-[#e0e0e0]'>
              <p className='text-sm font-medium'>
                {bags.length.toLocaleString()} Items
              </p>
              <SortingComponent />
            </div>

            <div className='flex flex-col lg:flex-row gap-8'>
              <div className='w-full lg:w-1/4'>
                <div className='mb-4 flex justify-center items-center'>
                  <button className='flex items-center text-sm text-gray-600 hover:text-gray-900'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 mr-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                      />
                    </svg>
                    SAVE NEW SEARCH
                  </button>
                </div>
                <FilterSidebar />
              </div>
              <div className='w-full lg:w-3/4'>
                <ImageCardGrid
                  items={luxuryItems}
                  columns={{ sm: 1, md: 2, lg: 3 }}
                  gap='gap-x-6 gap-y-12'
                  onLikeToggle={(id: any, liked: any) => {
                    console.log(`Product ${id} ${liked ? 'liked' : 'unliked'}`)
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
