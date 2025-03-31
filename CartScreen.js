import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back-outline" size={25} color="#000" />
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <Icon name="trash-outline" size={25} color="#000" />
      </View>

      {/* Danh sách món ăn */}
      <Card containerStyle={styles.cartItem}>
        <View style={styles.cartItemContent}>
          <Image
            source={require("./assets/bugger.jpg")}
            style={styles.cartImage}
          />
          <View style={styles.cartDetails}>
            <Text style={styles.itemName}>Burger</Text>
            <View style={styles.rating}>
              <Icon name="star" size={15} color="#FFD700" />
              <Text style={styles.ratingText}>4.8 (3K+ rating)</Text>
            </View>
            <Text style={styles.price}>$28</Text>
          </View>
          <View style={styles.quantity}>
            <TouchableOpacity>
              <Text style={styles.quantityBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>02</Text>
            <TouchableOpacity>
              <Text style={styles.quantityBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>

      {/* Thông tin giao hàng */}
      <View style={styles.deliveryInfo}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Delivery Address</Text>
          <Text style={styles.infoValue}>Dhaka, Bangladesh</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <Icon name="card-outline" size={20} color="#000" />
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tóm tắt thanh toán */}
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Checkout Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal (2)</Text>
          <Text style={styles.summaryValue}>$56</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>$6.20</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Payable Total</Text>
          <Text style={styles.summaryValue}>$62.2</Text>
        </View>
      </View>

      {/* Nút xác nhận */}
      <Button
        title="Confirm Order"
        buttonStyle={styles.confirmButton}
        titleStyle={styles.confirmButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  cartItem: { borderRadius: 10, marginHorizontal: 15 },
  cartItemContent: { flexDirection: "row", alignItems: "center" },
  cartImage: { width: 100, height: 100, borderRadius: 10 },
  cartDetails: { flex: 1, marginLeft: 10 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  rating: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  ratingText: { marginLeft: 5 },
  price: { fontSize: 16, color: "#4A90E2" },
  quantity: { flexDirection: "row", alignItems: "center" },
  quantityBtn: { fontSize: 20, paddingHorizontal: 10 },
  quantityText: { fontSize: 16, marginHorizontal: 10 },
  deliveryInfo: { paddingHorizontal: 15, marginVertical: 10 },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  infoLabel: { fontSize: 14, color: "gray" },
  infoValue: { fontSize: 14 },
  paymentMethod: { flexDirection: "row", alignItems: "center" },
  changeText: { color: "#4A90E2", marginLeft: 10 },
  summary: { paddingHorizontal: 15, marginVertical: 10 },
  summaryTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  summaryLabel: { fontSize: 14, color: "gray" },
  summaryValue: { fontSize: 14 },
  confirmButton: {
    backgroundColor: "#4A90E2",
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 15,
  },
  confirmButtonText: { fontSize: 16 },
});

export default CartScreen;
