import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar rounded source={require("./assets/user.jpg")} size="medium" />
        <View style={styles.location}>
          <Icon name="location-outline" size={20} color="#4A90E2" />
          <Text style={styles.locationText}>Toan nguyen </Text>
        </View>
        <Icon name="notifications-outline" size={25} color="#000" />
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#fff"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search your food" style={styles.searchInput} />
      </View>

      {/* Danh mục món ăn */}
      <View style={styles.categories}>
        {["Pizza", "Burger", "Drink", "Rice"].map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <View style={styles.categoryIcon}>
              <Text style={styles.categoryText}>{category.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Banner ưu đãi */}
      <Card containerStyle={styles.offerCard}>
        <View style={styles.offerBadge}>
          <Text style={styles.badgeText}>10% OFF</Text>
        </View>
        <Text style={styles.offerTitle}>TODAY'S HOT OFFER</Text>
        <Image
          source={require("./assets/bugger.jpg")}
          style={styles.offerImage}
        />
        <View style={styles.rating}>
          <Icon name="star" size={15} color="#FFD700" />
          <Text style={styles.ratingText}>4.9 (3K+ rating)</Text>
        </View>
      </Card>

      {/* Món ăn phổ biến */}
      <View style={styles.popularSection}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <View style={styles.popularItems}>
        <Image
          source={require("./assets/bugger.jpg")}
          style={styles.popularImage}
        />
        <Image
          source={require("./assets/pizza.jpg")}
          style={styles.popularImage}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFF9C4",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    flex: 1,
  },
  locationText: { marginLeft: 5, fontSize: 16 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: "#fff", paddingVertical: 10 },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  categoryItem: { alignItems: "center" },
  categoryIcon: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    width: 70,
    alignItems: "center",
  },
  categoryText: { fontSize: 12, fontWeight: "bold" },
  offerCard: { borderRadius: 10, marginHorizontal: 15 },
  offerBadge: {
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    padding: 5,
    alignSelf: "flex-start",
  },
  badgeText: { color: "#fff", fontSize: 12 },
  offerTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  offerImage: { width: "100%", height: 150, borderRadius: 10 },
  rating: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  ratingText: { marginLeft: 5 },
  popularSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  viewAll: { color: "#4A90E2" },
  popularItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  popularImage: { width: 150, height: 100, borderRadius: 10 },
});

export default HomeScreen;
