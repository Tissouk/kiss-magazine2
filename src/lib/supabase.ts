import { createClient } from '@supabase/supabase-js'

// Configuration par défaut pour le développement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Créer le client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types pour TypeScript
export type Database = {
  public: {
    Tables: {
      korean_brands: {
        Row: {
          id: string
          name: string
          description: string
          logo_url: string
          website_url: string
          category: string
          country_origin: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          logo_url: string
          website_url: string
          category: string
          country_origin?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          logo_url?: string
          website_url?: string
          category?: string
          country_origin?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          image_url: string
          brand_id: string
          category: string
          korean_origin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          image_url: string
          brand_id: string
          category: string
          korean_origin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          image_url?: string
          brand_id?: string
          category?: string
          korean_origin?: boolean
          updated_at?: string
        }
      }
      loyalty_members: {
        Row: {
          id: string
          email: string
          name: string
          tier: string
          points: number
          seoul_trip_entries: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          tier?: string
          points?: number
          seoul_trip_entries?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          tier?: string
          points?: number
          seoul_trip_entries?: number
          updated_at?: string
        }
      }
    }
  }
}

// Helper functions pour les APIs
export const supabaseAdmin = supabase

// Fonction pour vérifier la connexion
export async function testConnection() {
  try {
    const { data, error } = await supabase.from('korean_brands').select('count', { count: 'exact', head: true })
    if (error) throw error
    return { success: true, message: 'Supabase connected successfully' }
  } catch (error) {
    console.log('Supabase connection test failed:', error)
    return { success: false, message: 'Using mock data - Supabase not configured' }
  }
}

// Mock data pour le développement
export const mockKoreanBrands = [
  {
    id: '1',
    name: 'Seoul Fashion',
    description: 'Authentic Korean streetwear brand',
    logo_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
    website_url: 'https://seoul-fashion.kr',
    category: 'Fashion',
    country_origin: 'South Korea',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2', 
    name: 'K-Beauty Seoul',
    description: 'Premium Korean skincare products',
    logo_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=100&h=100&fit=crop',
    website_url: 'https://kbeauty-seoul.com',
    category: 'Beauty',
    country_origin: 'South Korea',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

export const mockProducts = [
  {
    id: '1',
    name: 'Korean Glass Skin Serum',
    description: 'Achieve the perfect glass skin look',
    price: 45.99,
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    brand_id: '2',
    category: 'Skincare',
    korean_origin: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Seoul Streetwear Hoodie',
    description: 'Trendy Korean streetwear hoodie',
    price: 89.99,
    image_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop',
    brand_id: '1',
    category: 'Fashion',
    korean_origin: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]