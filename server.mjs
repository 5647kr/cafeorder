/**
 * 커피
 * 아메리카노: 4500 / [1, 2, 3] / v
 * 카페라떼: 5000 / [1, 2, 3, 6] / v
 * 바닐라라떼: 5500 / [1, 2, 3, 6, 7] / v
 * 카라멜마끼아또: 5800 / [1, 2, 3, 6, 8] / v
 * 콜드브루: 4800 / [2, 3, 5] / v
 * 카푸치노: 5000 / [1, 2, 3, 6] v
 * 카페모카: 5800 / [1, 2, 3, 6, 8] v
 * 아포가토: 6000 / [3, 12] v
 *
 * 음료
 * 자몽티: 6000 / [1, 2, 4] v
 * 아이스티: 4500 / [2, 4, 5] v
 * 버블티: 6000 / [1, 2, 4, 5] v
 * 말차라떼: 5800 / [1, 2, 4, 6] v
 * 딸기라떼: 5800 / [1, 2, 4, 6] v
 * 레몬에이드: 5500 / [2, 4, 5]
 *
 * 디저트
 * 붕어빵: 1800 / [9, 10] v
 * 와플: 3300 / [10, 12] v
 * 샌드위치: 4100 / [10 ,11] v
 * 초코 브라우니: 3500 / [13, 12]
 * 치즈케이크: 4500 / [12]
 * 크루아상: 3000 / [13, 10]
 */

/** 옵션
 * 음료
 * 1. 온도: hot / ice / 아이콘 2개 필수
 * 2. 사이즈: Regular(+0) / Large(+700) / 컵 사이즈 아이콘 2개 필수
 * 3. 샷 추가: 기본(+0) / 샷 추가(+500) / 텍스트
 * 4. 당도: 50%(+0), 100%(+0), 125%(+0), 150%(+0), / 텍스트
 * 5. 얼음량: 적게(+0) / 보통(+0) / 많이(+0) / 텍스트
 * 6. 우유 변경: 일반 우유(+0) / 저지방 우유(+0) / 오트밀크(+700) / 텍스트
 * 7. 시럽 추가: 바닐라(+500) / 헤이즐넛(+500) / 카라멜(+500) / 아이콘 3개
 * 8. 휘핑 크림: 추가(+500) / 아이콘
 *
 * 디저트
 * 9. 속재료: 팥(+0) / 슈크림(+0) / 고구마(+0) / 아이콘 필수
 * 10. 굽기: 보통(+0) / 바삭하게(+500) / 텍스트
 * 11. 토핑: 치즈(+500) / 양상추(+500) / 계란후라이(+1000) / 토마토(+500) / 파인애플(+500) / 베이컨(+1500) / 아이콘
 * 12. 추가 토핑: 초코시럽(+500) / 메이플시럽(+500)  / 휘핑크림(+500) / 아이콘3개인데 휘핑크림 뺴고
 * 13. 데우기: 데우기(+0) / 데우지 않기(+0) / 텍스트
 */

import { Hono } from "hono";

const categories = ["커피", "음료", "디저트"];

const items = [
  {
    id: 1,
    category: "커피",
    title: "아메리카노",
    description:
      "깊고 진한 에스프레소가 선사하는 깔끔한 풍미! 한 모금으로 하루의 시작을 깨워보세요.",
    price: 4500,
    iconImg: "/public/americano.png",
    optionIds: [1, 2, 3],
  },
  {
    id: 2,
    category: "커피",
    title: "카페라떼",
    description:
      "진한 에스프레소와 부드러운 우유가 만나 완성된 고소하고 편안한 한 잔을 즐겨보세요.",
    price: 5000,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 3, 6],
  },
  {
    id: 3,
    category: "커피",
    title: "바닐라라떼",
    description:
      "부드러운 우유에 달콤한 바닐라 향을 더해 누구나 기분 좋게 즐길 수 있는 라떼입니다.",
    price: 5500,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 3, 6, 7],
  },
  {
    id: 4,
    category: "커피",
    title: "카라멜마끼아또",
    description:
      "부드러운 우유와 에스프레소 위에 달콤한 카라멜을 더해 풍성한 맛과 향을 즐겨보세요.",
    price: 5800,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 3, 6, 8],
  },
  {
    id: 5,
    category: "커피",
    title: "콜드브루",
    description:
      "차가운 물로 천천히 추출해 깔끔하고 깊은 풍미를 담았습니다. 부드러운 커피의 여운을 느껴보세요.",
    price: 4800,
    iconImg: "/public/cafemoka.png",
    optionIds: [2, 3, 5],
  },
  {
    id: 6,
    category: "커피",
    title: "카푸치노",
    description:
      "진한 에스프레소와 풍성한 우유 거품이 어우러져 부드러움과 커피 본연의 풍미를 함께 느껴보세요.",
    price: 5000,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 3, 6],
  },
  {
    id: 7,
    category: "커피",
    title: "카페모카",
    description:
      "진한 에스프레소와 풍성한 우유 거품이 어우러져 부드러움과 커피 본연의 풍미를 함께 느껴보세요.",
    price: 5800,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 3, 6, 8],
  },
  {
    id: 8,
    category: "커피",
    title: "아포가토",
    description:
      "진한 에스프레소와 풍성한 우유 거품이 어우러져 부드러움과 커피 본연의 풍미를 함께 느껴보세요.",
    price: 6000,
    iconImg: "/public/cafemoka.png",
    optionIds: [3, 12],
  },
  {
    id: 9,
    category: "음료",
    title: "자몽티",
    description:
      "상큼한 자몽의 싱그러움을 한 잔에! 달콤쌉싸름한 향이 기분까지 환하게 밝혀줍니다.",
    price: 6000,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 4],
  },
  {
    id: 10,
    category: "음료",
    title: "아이스티",
    description:
      "상쾌한 달콤함이 가득한 한 잔! 더운 날엔 시원한 아이스티로 갈증을 해소하세요.",
    price: 4500,
    iconImg: "/public/cafemoka.png",
    optionIds: [2, 4, 5],
  },
  {
    id: 11,
    category: "음료",
    title: "버블티",
    description:
      "쫀득한 타피오카 펄과 달콤한 밀크티의 환상적인 만남! 한입마다 기분 좋은 재미가 가득해요.",
    price: 6000,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 4, 5],
  },
  {
    id: 12,
    category: "음료",
    title: "말차라떼",
    description:
      "쌉싸름하고 향긋한 말차와 부드러운 우유가 조화를 이루는 차분하고 고소한 한 잔입니다.",
    price: 5800,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 4, 6],
  },
  {
    id: 13,
    category: "음료",
    title: "딸기라떼",
    description:
      "달콤하고 상큼한 딸기의 풍미에 부드러운 우유를 더해 산뜻한 달콤함을 가득 담았습니다.",
    price: 5800,
    iconImg: "/public/cafemoka.png",
    optionIds: [1, 2, 4, 6],
  },
  {
    id: 14,
    category: "음료",
    title: "레몬에이드",
    description:
      "톡 쏘는 탄산과 상큼한 레몬의 조합! 입안 가득 퍼지는 시원함으로 기분까지 상쾌하게 만들어보세요.",
    price: 5500,
    iconImg: "/public/cafemoka.png",
    optionIds: [2, 4, 5],
  },
  {
    id: 15,
    category: "디저트",
    title: "붕어빵",
    description:
      "바삭한 겉과 달콤한 팥이 가득한 속! 추억을 불러일으키는 따뜻한 붕어빵으로 겨울 감성을 느껴보세요.",
    price: 1800,
    iconImg: "/public/cafemoka.png",
    optionIds: [9, 10],
  },
  {
    id: 16,
    category: "디저트",
    title: "와플",
    description:
      "바삭하고 촉촉한 와플 위에 달콤한 시럽과 신선한 토핑까지! 여유로운 티타임에 딱 맞는 디저트.",
    price: 3300,
    iconImg: "/public/cafemoka.png",
    optionIds: [10, 12],
  },
  {
    id: 17,
    category: "디저트",
    title: "샌드위치",
    description:
      "든든하게 즐기는 한 끼! 신선한 재료를 가득 담아 맛과 영양을 동시에 챙겼어요.",
    price: 4100,
    iconImg: "/public/cafemoka.png",
    optionIds: [10, 11],
  },
  {
    id: 18,
    category: "디저트",
    title: "초코 브라우니",
    description:
      "진한 초콜릿의 달콤함과 묵직하고 촉촉한 식감이 어우러진 한 조각의 달콤한 행복을 만나보세요.",
    price: 3500,
    iconImg: "/public/cafemoka.png",
    optionIds: [13, 12],
  },
  {
    id: 19,
    category: "디저트",
    title: "치즈케이크",
    description:
      "부드럽고 진한 크림치즈의 풍미와 달콤한 여운이 입안 가득 퍼지는 클래식한 치즈케이크입니다.",
    price: 4500,
    iconImg: "/public/cafemoka.png",
    optionIds: [12],
  },
  {
    id: 20,
    category: "디저트",
    title: "크루아상",
    description:
      "겹겹이 쌓인 결이 바삭하게 부서지고 속은 부드럽고 고소한 버터 향이 가득한 크루아상입니다.",
    price: 3000,
    iconImg: "/public/cafemoka.png",
    optionIds: [13, 10],
  },
];

const options = [
  {
    id: 1,
    name: "온도",
    labels: ["HOT", "ICE"],
    icons: ["/public/hot.png", "/public/ice.png"],
    require: true,
    // 단일 선택
    maxSelect: 1,
    default: "HOT",
  },
  {
    id: 2,
    name: "사이즈",
    labels: ["Regular", "Large"],
    prices: [0, 700],
    require: true,
    // 단일 선택
    maxSelect: 1,
    default: "Regular",
  },
  {
    id: 3,
    name: "샷 추가",
    labels: ["기본", "샷 추가"],
    prices: [0, 500],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "기본",
  },
  {
    id: 4,
    name: "당도",
    labels: ["50%", "100%", "125%", "150%"],
    prices: [0, 0, 0, 0],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "100%",
  },
  {
    id: 5,
    name: "얼음량",
    labels: ["적게", "보통", "많이"],
    prices: [0, 0, 0, 0],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "보통",
  },
  {
    id: 6,
    name: "우유 변경",
    labels: ["일반 우유", "저지방 우유", "오트밀크"],
    prices: [0, 0, 700],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "일반 우유",
  },
  {
    id: 7,
    name: "시럽 추가",
    labels: ["바닐라", "헤이즐넛", "카라멜"],
    prices: [500, 500, 500],
    icons: ["/public/hot.png", "/public/ice.png"],
    require: false,
    // 다중 선택
    maxSelect: 3,
    default: "",
  },
  {
    id: 8,
    name: "휘핑 크림",
    labels: ["추가 안함", "추가"],
    prices: [0, 500],
    icons: ["/public/hot.png"],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "추가 안함",
  },
  {
    id: 9,
    name: "속재료",
    labels: ["팥", "슈크림", "고구마"],
    prices: [0, 0, 0],
    icons: ["/public/hot.png", "/public/hot.png", "/public/hot.png"],
    require: true,
    // 단일 선택
    maxSelect: 1,
    default: "팥",
  },
  {
    id: 10,
    name: "굽기",
    labels: ["보통", "바삭하게"],
    prices: [0, 500],
    require: false,
    // 단일 선택
    maxSelect: 1,
    default: "보통",
  },
  {
    id: 11,
    name: "토핑",
    labels: ["치즈", "양상추", "계란후라이", "토마토", "파인애플", "베이컨"],
    prices: [500, 500, 1000, 500, 500, 1500],
    require: false,
    // 다중 선택
    maxSelect: 6,
    default: "",
  },
  {
    id: 12,
    name: "추가 토핑",
    labels: ["초코 시럽", "메이플 시럽", "휘핑 크림"],
    prices: [500, 500, 500],
    require: false,
    // 다중 선택
    maxSelect: 2,
    default: "",
  },
  {
    id: 13,
    name: "데우기",
    labels: ["데우기", "데우지 않기"],
    prices: [0, 0],
    require: false,
    // 단일 선택
    maxSelect: 1,
    // 기본값
    defaultValue: "데우기",
  },
];

const app = new Hono();
const orders = new Map(); // 주문 데이터 저장 공간

// 카테고리 목록 가져오기: GET http://localhost:5173/api/categories
app.get("/api/categories", (c) => {
  return c.json(categories);
});

// 상품 목록 가져오기: GET http://localhost:5173/api/items
app.get("/api/items", (c) => {
  const itemList = items.map(({ optionIds, description, ...item }) => item);

  return c.json(itemList);
});

// 상품 상세 데이터 가져오기: GET http://localhost:5173/api/items
app.get("/api/items/:id", (c) => {
  const id = Number(c.req.param("id"));

  const item = items.find((item) => item.id === id);

  if (!item) {
    return c.json(
      {
        message: "상품을 찾을 수 없습니다.",
      },
      404,
    );
  }

  return c.json(item);
});

// 옵션 목록 가져오기: GET http://localhost:5173/api/options
app.get("/api/options", (c) => {
  return c.json(options);
});

// 주문하기: POST http://localhost:5173/api/orders
app.post("/api/orders", async (c) => {
  const body = await c.req.json();

  const orderId = crypto.randomUUID();

  const order = {
    orderId,
    orderNumber: String(orders.size + 1).padStart(3, "0"),
    totalPrice: body.totalPrice,
    items: body.items,
    createdAt: new Date().toISOString(),
  };

  orders.set(orderId, order);

  return c.json(
    {
      message: "주문이 접수되었습니다.",
      order,
    },
    201,
  );
});
/**
 * content-type: application/json

{
  "totalPrice": 5000,
  "items": [
    {
      "itemId": 1,
      "quantity": 1,
      "options": [
        {
          "optionId": 1,
          "labels": ["HOT"]
        },
        {
          "optionId": 2,
          "labels": ["연하게"]
        },
        {
          "optionId": 3,
          "labels": ["설탕시럽 추가", "바닐라 시럽 추가"]
        }
      ]
    }
  ]
}
 */

// 주문 목록 가져오기: GET http://localhost:5173/api/orders/:orderId
app.get("/api/orders/:orderId", (c) => {
  const orderId = c.req.param("orderId");

  const order = orders.get(orderId);

  if (!order) {
    return c.json(
      {
        message: "주문 내역을 찾을 수 없습니다.",
      },
      404,
    );
  }
  return c.json(order);
});

export default app;
