import b1Asset from "@/assets/b1.jpg.asset.json";
import b2Asset from "@/assets/b2.jpg.asset.json";
import b3Asset from "@/assets/b3.jpg.asset.json";
import b4Asset from "@/assets/b4.jpg.asset.json";
import b5Asset from "@/assets/b5.jpg.asset.json";
import b6Asset from "@/assets/b6.jpg.asset.json";
import b7Asset from "@/assets/b7.jpg.asset.json";
import c1Asset from "@/assets/c1.jpg.asset.json";
import c2Asset from "@/assets/c2.jpg.asset.json";
import c3Asset from "@/assets/c3.jpg.asset.json";
import chocAsset from "@/assets/choc.jpg.asset.json";
import d1Asset from "@/assets/d1.jpg.asset.json";
import d2Asset from "@/assets/d2.jpg.asset.json";
import d3Asset from "@/assets/d3.jpg.asset.json";
import f1Asset from "@/assets/f1.jpg.asset.json";
import f2Asset from "@/assets/f2.jpg.asset.json";
import f3Asset from "@/assets/f3.jpg.asset.json";
import f4Asset from "@/assets/f4.jpg.asset.json";
import f5Asset from "@/assets/f5.jpg.asset.json";
import f6Asset from "@/assets/f6.jpg.asset.json";
import gotAsset from "@/assets/got.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import moriaAsset from "@/assets/moria.jpg.asset.json";
import pr1Asset from "@/assets/pr1.jpg.asset.json";
import pr2Asset from "@/assets/pr2.jpg.asset.json";
import sn1Asset from "@/assets/sn1.jpg.asset.json";
import sn2Asset from "@/assets/sn2.jpg.asset.json";

export const images: Record<string, string> = {
  b1: b1Asset.url,
  b2: b2Asset.url,
  b3: b3Asset.url,
  b4: b4Asset.url,
  b5: b5Asset.url,
  b6: b6Asset.url,
  b7: b7Asset.url,
  c1: c1Asset.url,
  c2: c2Asset.url,
  c3: c3Asset.url,
  choc: chocAsset.url,
  d1: d1Asset.url,
  d2: d2Asset.url,
  d3: d3Asset.url,
  f1: f1Asset.url,
  f2: f2Asset.url,
  f3: f3Asset.url,
  f4: f4Asset.url,
  f5: f5Asset.url,
  f6: f6Asset.url,
  got: gotAsset.url,
  logo: logoAsset.url,
  moria: moriaAsset.url,
  pr1: pr1Asset.url,
  pr2: pr2Asset.url,
  sn1: sn1Asset.url,
  sn2: sn2Asset.url
};
export type Product = { id: string; name: string; description: string; price: number; image: string; premiere: boolean };
export type MenuSection = { title: string; label: string; products: Product[] };
const source: [string, [string, string, number, string, number?][]][] = [["Estrenos · Promos 10% OFF efectivo",[["2 Doble Cheese + coca 1.5 lts","Dos hamburguesas doble medallón, doble cheddar acompañada de papa…",37110,"pr1"],["2 Simpsons + 2 artesanales","2 hamburguesas \"los simpsons\" + 2 artesanales a elección…",39300,"pr2"]]],["En cartelera · Hamburguesas",[["Moria","Pan PRETZEL, doble medallón a elección, doble queso tybo, mermelada…",18000,"moria",1],["Doble Cheese Burger","Doble medallón y doble cheddar acompañado de papas fritas.",15560,"b1"],["El Hincha!","Hamburguesa doble medallón, doble cheddar, salsa alioli y cebolla…",20900,"b2"],["Los Simpsons","Medallón a elección, doble cheddar, bacon, huevo y salsa ketchup…",18700,"b3"],["La casa de papel","Medallón a elección, queso parmesano, morrón asado, hojas verdes, tomate…",18700,"b4"],["Elite","Medallón de bondiola desmenuzada, cebolla caramelizada, salsa barbacoa y…",18700,"b5"],["Breaking bad","Medallón a elección, salsa rockefort, tomates secos, cebolla caramelizada…",20700,"b6"],["Dark","PAN NEGRO, doble medallón a elección, salsa SUPER FDS, cebolla…",21900,"b7"],["Game of Thrones","Doble medallón a elección, cuádruple cheddar, doble bacon, provoleta y…",23500,"got"]]],["Matiné · Medio día",[["Milanesa de pollo completo con papas","Pan ciabatta, mila de pollo, lechuga, tomate y queso acompañado de papas…",11110,"sn1"],["Bondiola completo con papas","Pan ciabatta, bondiola, lechuga, tomate y queso acompañado de papas…",11110,"sn2"]]],["Intervalo · Para picar",[["Papas solas","Papas fritas solas.",10700,"f1"],["Papas fritas tradicionales","Papas fritas bañadas en cheddar y bacon.",12900,"f2"],["Papas provenzal","Papas fritas bañadas en provenzal.",13100,"f3"],["Chicken Little","Filetes de pollo empanados en avena y panko acompañado de salsa barbacoa.",9300,"f4"],["Chicken Little Grandes","Porción grande de filetes de pollo empanados en avena y panko…",13800,"f5"],["Chipaqueño","5 unidades de chipa-tequeños acompañado de salsa \"nadie se salva\"…",9900,"f6"]]],["Escena post-créditos · Postres",[["Chocotorta boutic","Porción de chocotorta para compartir",7900,"choc"]]],["Brindis · Cervezas",[["2x1 Cerveza artesanal","¡Promo 2x1!",7100,"c1"],["Porrón Corona 330","",4000,"c2"],["Porrón Corona Cero 330","",4000,"c3"]]],["Snack bar · Bebidas",[["Lata Pepsi","",2670,"d1"],["Lata Pepsi MAX","",2670,"d2"],["Lata SevenUP","",2670,"d3"],["Agua sin gas","",1800,""]]]];
export const menu: MenuSection[] = source.map(([title, products], i) => ({ title, label: title.split(" · ")[0] ?? title, products: products.map(([name, description, price, image, premiere], j) => ({ id: `${i}-${j}`, name, description, price, image: images[image] || "", premiere: Boolean(premiere) })) }));
export const money = (amount: number) => "$" + amount.toLocaleString("es-AR");
