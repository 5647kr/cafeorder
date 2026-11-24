interface Menu {
  id: number;
  category: "커피" | "음료" | "디저트";
  title: string;
  description: string;
  price: number;
  iconImg: string;
  optionIds: number[];
}

interface OrderMenu {
  id: number;
  title: string;
  price: number;
  iconImg: string;
  selectedOpt: SelectedOpt[];
}

interface SelectedOpt {
  id: number;
  label: string;
  price: number;
}

interface Order {
  orderType: string;
  orderMenu: OrderMenu[];
  totalPrice: number
  orderId: string
}