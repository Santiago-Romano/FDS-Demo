import b1Img from "@/assets/b1.jpg";
import b2Img from "@/assets/b2.jpg";
import b3Img from "@/assets/b3.jpg";
import b4Img from "@/assets/b4.jpg";
import b5Img from "@/assets/b5.jpg";
import b6Img from "@/assets/b6.jpg";
import b7Img from "@/assets/b7.jpg";
import c1Img from "@/assets/c1.jpg";
import c2Img from "@/assets/c2.jpg";
import c3Img from "@/assets/c3.jpg";
import chocImg from "@/assets/choc.jpg";
import d1Img from "@/assets/d1.jpg";
import d2Img from "@/assets/d2.jpg";
import d3Img from "@/assets/d3.jpg";
import f1Img from "@/assets/f1.jpg";
import f2Img from "@/assets/f2.jpg";
import f3Img from "@/assets/f3.jpg";
import f4Img from "@/assets/f4.jpg";
import f5Img from "@/assets/f5.jpg";
import f6Img from "@/assets/f6.jpg";
import gotImg from "@/assets/got.jpg";
import logoImg from "@/assets/logo.png";
import moriaImg from "@/assets/moria.jpg";
import pr1Img from "@/assets/pr1.jpg";
import pr2Img from "@/assets/pr2.jpg";
import sn1Img from "@/assets/sn1.jpg";
import sn2Img from "@/assets/sn2.jpg";

export const images: Record<string, string> = {
  b1: b1Img,
  b2: b2Img,
  b3: b3Img,
  b4: b4Img,
  b5: b5Img,
  b6: b6Img,
  b7: b7Img,
  c1: c1Img,
  c2: c2Img,
  c3: c3Img,
  choc: chocImg,
  d1: d1Img,
  d2: d2Img,
  d3: d3Img,
  f1: f1Img,
  f2: f2Img,
  f3: f3Img,
  f4: f4Img,
  f5: f5Img,
  f6: f6Img,
  got: gotImg,
  logo: logoImg,
  moria: moriaImg,
  pr1: pr1Img,
  pr2: pr2Img,
  sn1: sn1Img,
  sn2: sn2Img
};
export type Product = { id: string; name: string; description: string; price: number; image: string; premiere: boolean };
export type MenuSection = { title: string; label: string; products: Product[] };
const source: [string, [string, string, number, string, number?][]][] = [["Estrenos · Promos 10% OFF efectivo",[["2 Doble Cheese + coca 1.5 lts","Dos hamburguesas doble medallón, doble cheddar acompañada de papa…",37110,"pr1"],["2 Simpsons + 2 artesanales","2 hamburguesas \"los simpsons\" + 2 artesanales a elección…",39300,"pr2"]]],["En cartelera · Hamburguesas",[["Moria","Pan PRETZEL, doble medallón a elección, doble queso tybo, mermelada…",18000,"moria",1],["Doble Cheese Burger","Doble medallón y doble cheddar acompañado de papas fritas.",15560,"b1"],["El Hincha!","Hamburguesa doble medallón, doble cheddar, salsa alioli y cebolla…",20900,"b2"],["Los Simpsons","Medallón a elección, doble cheddar, bacon, huevo y salsa ketchup…",18700,"b3"],["La casa de papel","Medallón a elección, queso parmesano, morrón asado, hojas verdes, tomate…",18700,"b4"],["Elite","Medallón de bondiola desmenuzada, cebolla caramelizada, salsa barbacoa y…",18700,"b5"],["Breaking bad","Medallón a elección, salsa rockefort, tomates secos, cebolla caramelizada…",20700,"b6"],["Dark","PAN NEGRO, doble medallón a elección, salsa SUPER FDS, cebolla…",21900,"b7"],["Game of Thrones","Doble medallón a elección, cuádruple cheddar, doble bacon, provoleta y…",23500,"got"]]],["Matiné · Medio día",[["Milanesa de pollo completo con papas","Pan ciabatta, mila de pollo, lechuga, tomate y queso acompañado de papas…",11110,"sn1"],["Bondiola completo con papas","Pan ciabatta, bondiola, lechuga, tomate y queso acompañado de papas…",11110,"sn2"]]],["Intervalo · Para picar",[["Papas solas","Papas fritas solas.",10700,"f1"],["Papas fritas tradicionales","Papas fritas bañadas en cheddar y bacon.",12900,"f2"],["Papas provenzal","Papas fritas bañadas en provenzal.",13100,"f3"],["Chicken Little","Filetes de pollo empanados en avena y panko acompañado de salsa barbacoa.",9300,"f4"],["Chicken Little Grandes","Porción grande de filetes de pollo empanados en avena y panko…",13800,"f5"],["Chipaqueño","5 unidades de chipa-tequeños acompañado de salsa \"nadie se salva\"…",9900,"f6"]]],["Escena post-créditos · Postres",[["Chocotorta boutic","Porción de chocotorta para compartir",7900,"choc"]]],["Brindis · Cervezas",[["2x1 Cerveza artesanal","¡Promo 2x1!",7100,"c1"],["Porrón Corona 330","",4000,"c2"],["Porrón Corona Cero 330","",4000,"c3"]]],["Snack bar · Bebidas",[["Lata Pepsi","",2670,"d1"],["Lata Pepsi MAX","",2670,"d2"],["Lata SevenUP","",2670,"d3"],["Agua sin gas","",1800,""]]]];
export const menu: MenuSection[] = source.map(([title, products], i) => ({ title, label: title.split(" · ")[0] ?? title, products: products.map(([name, description, price, image, premiere], j) => ({ id: `${i}-${j}`, name, description, price, image: images[image] || "", premiere: Boolean(premiere) })) }));
export const money = (amount: number) => "$" + amount.toLocaleString("es-AR");
