export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-16 text-white text-center">
        <h1 className="text-6xl font-bold mb-8">
          🇰🇷 Kiss Magazine
        </h1>
        <h2 className="text-3xl mb-8 text-yellow-300">
          ✅ NEW CLEAN REPOSITORY
        </h2>
        <p className="text-xl mb-8">
          Korean Culture Hub - No Git LFS Issues!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl mb-4">🛍️</div>
            <h3 className="text-xl font-bold mb-2">Korean Fashion</h3>
            <p>Authentic style from Seoul</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl mb-4">💄</div>
            <h3 className="text-xl font-bold mb-2">K-Beauty</h3>
            <p>Glass skin secrets</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Seoul Trip</h3>
            <p>Monthly raffle for members</p>
          </div>
        </div>

        <div className="mt-16 bg-green-500/20 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">🎉 Repository Status</h2>
          <p className="text-lg">✅ Clean Git history</p>
          <p className="text-lg">✅ No node_modules in Git</p>
          <p className="text-lg">✅ Ready for Vercel deployment</p>
        </div>
      </div>
    </div>
  )
}