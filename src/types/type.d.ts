// 상품 목록
interface Menus {
  id: number;
  category: "커피" | "음료" | "디저트";
  title: string;
  price: number;
  iconImg: string;
}

// 상품 상세
interface Menu extends Menus {
  description: string;
  optionIds: number[];
  options: Options[];
}

// 주문하려는 메뉴
interface OrderMenu {
  id: number;
  title: string;
  price: number;
  iconImg: string;
  selectedOpt: SelectedOpt[];
  amount: number;
}

// 선택한 옵션
interface SelectedOpt {
  id: number;
  name: string;
  price: number[];
  value: string[];
}

// 주문 내역
interface Order {
  orderType: string;
  orderMenu: OrderMenu[];
  totalPrice: number;
  orderId: string;
}

// 옵션
interface Options {
  id: number;
  name: string;
  labels: string[];
  prices?: number[];
  icons?: string[];
  require: boolean;
  maxSelect: number;
  default: string;
}
