import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Search,
  ShoppingBag,
  Heart,
  Filter,
  Star
} from 'lucide-react-native';

import Header from '@/components/common/Header';
import { useTheme } from '@/hooks/useTheme';
import ProductCard from '@/components/shop/ProductCard';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'supplements', name: 'Supplements' },
  { id: 'devices', name: 'Devices' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'nutrition', name: 'Nutrition' },
];

const products = [
  {
    id: '1',
    name: 'Vitamin D3 + K2 Complex',
    price: 29.99,
    rating: 4.8,
    reviewCount: 256,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Smart Heart Rate Monitor',
    price: 89.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Organic Protein Powder',
    price: 49.99,
    rating: 4.7,
    reviewCount: 372,
    image: 'https://images.pexels.com/photos/4078040/pexels-photo-4078040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Fitness Resistance Bands',
    price: 19.99,
    rating: 4.6,
    reviewCount: 195,
    image: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export default function ShopScreen() {
  const { colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Header 
        title="Health Shop" 
        rightIcon={<ShoppingBag size={24} color={colors.text} />}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: colors.cardBackground }]}>
          <Search size={20} color={colors.textSecondary} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search health products..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={[styles.filterButton, { backgroundColor: colors.primary }]}>
            <Filter size={16} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                activeCategory === category.id && { 
                  backgroundColor: colors.primary 
                }
              ]}
              onPress={() => setActiveCategory(category.id)}
            >
              <Text 
                style={[
                  styles.categoryText, 
                  { 
                    color: activeCategory === category.id 
                      ? colors.white 
                      : colors.textSecondary 
                  }
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Item */}
        <TouchableOpacity 
          style={[styles.featuredContainer, { backgroundColor: '#EBF7FF' }]}
        >
          <View style={styles.featuredContent}>
            <View style={styles.featuredBadge}>
              <Text style={styles.featuredBadgeText}>FEATURED</Text>
            </View>
            <Text style={styles.featuredTitle}>Omega-3 Fish Oil</Text>
            <Text style={styles.featuredSubtitle}>Premium quality with 1000mg EPA & DHA</Text>
            <View style={styles.featuredPriceContainer}>
              <Text style={styles.featuredPrice}>$34.99</Text>
              <TouchableOpacity 
                style={[styles.featuredButton, { backgroundColor: colors.primary }]}
              >
                <Text style={styles.featuredButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/8101531/pexels-photo-8101531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
            style={styles.featuredImage}
          />
        </TouchableOpacity>

        {/* Popular Products */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Popular Products
          </Text>
          <TouchableOpacity>
            <Text style={[styles.viewAll, { color: colors.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </View>

        {/* Recommended for You */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Recommended for You
          </Text>
          <TouchableOpacity>
            <Text style={[styles.viewAll, { color: colors.primary }]}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productsGrid}>
          {products.slice().reverse().map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginLeft: 8,
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  featuredContainer: {
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  featuredContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  featuredBadge: {
    backgroundColor: '#0A84FF',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
  },
  featuredTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#0A84FF',
    marginBottom: 4,
  },
  featuredSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginBottom: 16,
  },
  featuredPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredPrice: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    marginRight: 12,
  },
  featuredButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  featuredButtonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  featuredImage: {
    width: 120,
    height: '100%',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  viewAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});