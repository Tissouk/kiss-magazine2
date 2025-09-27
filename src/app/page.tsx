import { MagazineHero } from '../components/homepage/MagazineHero';


export default async function HomePage() {
  // Fetch initial data
  const [articles, trendingProducts, communityPosts] = await Promise.all([
    getLatestArticles(),
    getTrendingProducts(),
    getCommunityPosts({ limit: 6 })
  ]);

  return (
    <div className="min-h-screen">
      {/* Magazine Hero Section */}
      <MagazineHero articles={articles.slice(0, 4)} />
      
      {/* Theme Sections */}
      <ThemeSections articles={articles} />
      
      {/* Influencer Spotlight */}
      <InfluencerSpotlight />
      
      {/* YouTube Feed */}
      <YouTubeFeed />
      
      {/* New Arrivals - Korea Trending */}
      <ProductCarousel 
        title="New Arrivals — Korea Trending"
        subtitle="Fresh from Seoul streets"
        products={trendingProducts}
        theme="trending"
      />
      
      {/* Shop by Look */}
      <ShopByLook />
      
      {/* Seoul Street Style */}
      <SeoulStreetStyle />
      
      {/* Best Sellers */}
      <BestSellers />
      
      {/* K-Beauty Must-Haves */}
      <KBeautyMustHaves />
      
      {/* Instagram Feed */}
      <InstagramFeed />
      
      {/* Community Highlights */}
      <CommunityHighlights posts={communityPosts} />
      
      {/* Loyalty Banner */}
      <LoyaltyBanner />
    </div>
  );
}