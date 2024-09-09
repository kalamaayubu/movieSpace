import './SkeletonLoader.css'

function VideoSkeletonLoader() {
  return (
    <div className="w-full h-[90%] px-2">
        <div className='skeleton-loader w-full h-full dark:bg-gray-500'></div> {/* Shimmering effect */}
    </div>
  )
}

export default VideoSkeletonLoader;
