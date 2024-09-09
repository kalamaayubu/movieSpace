import './SkeletonLoader.css'; // Import CSS for the shimmer effect


function SkeletonLoader() {
  return (
    <div className='relative bg-gray-200 shadow-md rounded-sm overflow-hidden h-[250px] '>
      <div className='skeleton-loader w-full h-full dark:bg-gray-500'></div> {/* Shimmering effect */}
    </div>
  )
}

export default SkeletonLoader

