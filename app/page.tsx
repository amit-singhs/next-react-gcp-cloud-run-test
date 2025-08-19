export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 opacity-90"></div>
        
        {/* Floating mountains */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/30 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white/25 rounded-full blur-md animate-pulse delay-500"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            {process.env.NEXT_PUBLIC_APP_NAME || 'Switzerland'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Where Alpine Dreams Come True
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1">
              Explore Destinations
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              Plan Your Trip
            </button>
          </div>
          
          {/* Environment Info */}
          <div className="mt-8 p-4 bg-black/20 backdrop-blur-sm rounded-lg">
            <p className="text-sm opacity-90">
              Environment: {process.env.NEXT_PUBLIC_ENVIRONMENT || 'unknown'} | 
              Version: {process.env.NEXT_PUBLIC_APP_VERSION || 'unknown'} | 
              Provider: {process.env.NEXT_PUBLIC_CLOUD_PROVIDER || 'unknown'}
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Why Choose Switzerland?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mountain Adventures */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Mountain Adventures</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience world-class skiing, hiking, and mountaineering in the majestic Swiss Alps.
              </p>
            </div>

            {/* Cultural Heritage */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Cultural Heritage</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover centuries-old traditions, charming villages, and world-renowned museums.
              </p>
            </div>

            {/* Natural Beauty */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Natural Beauty</h3>
              <p className="text-gray-600 leading-relaxed">
                Marvel at pristine lakes, cascading waterfalls, and breathtaking landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">
            Must-Visit Destinations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Zermatt */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Zermatt</h3>
              <p className="text-sm opacity-90">Car-free mountain paradise with the iconic Matterhorn</p>
            </div>

            {/* Lucerne */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Lucerne</h3>
              <p className="text-sm opacity-90">Medieval charm with stunning lake and mountain views</p>
            </div>

            {/* Interlaken */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interlaken</h3>
              <p className="text-sm opacity-90">Adventure capital between two pristine lakes</p>
            </div>

            {/* Geneva */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white border border-white/20 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Geneva</h3>
              <p className="text-sm opacity-90">International city with French flair and lake beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Ready for Your Swiss Adventure?
          </h2>
          <p className="text-xl mb-8 drop-shadow-lg">
            Start planning your dream vacation to Switzerland today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              Get Travel Guide
            </button>
            <button className="px-8 py-4 bg-black/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-black/30 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
          
          {/* Environment Variables Display */}
          <div className="mt-8 p-4 bg-black/20 backdrop-blur-sm rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Environment Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <p><span className="font-medium">API URL:</span> {process.env.NEXT_PUBLIC_API_URL || 'Not set'}</p>
              <p><span className="font-medium">Contact:</span> {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'Not set'}</p>
              <p><span className="font-medium">Analytics ID:</span> {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'Not set'}</p>
              <p><span className="font-medium">Deployment:</span> {process.env.NEXT_PUBLIC_DEPLOYMENT_TIMESTAMP || 'Not set'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">Discover the Magic of Switzerland</p>
          <p className="text-gray-400">
            © 2024 Switzerland Tourism. Experience the beauty of the Alps.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with Next.js on {process.env.NEXT_PUBLIC_CLOUD_PROVIDER || 'Cloud Platform'}
          </p>
        </div>
      </footer>
    </div>
  );
}
