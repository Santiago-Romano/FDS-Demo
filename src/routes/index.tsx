import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock3, MapPin, ShoppingBag, Plus, Minus, Star, Ticket, ArrowUpRight, Instagram, MessageCircle, GlassWater } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { images, menu, money, type Product } from "@/lib/menu";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Fuera de Serie · Hamburguesas en Villa Devoto" },
    { name: "description", content: "Ahora en cartelera: las hamburguesas de Fuera de Serie. Elegí tu favorita, armá tu pedido y pedí por WhatsApp. Bermúdez 2400, Villa Devoto." },
    { property: "og:title", content: "Fuera de Serie · Hamburguesas en Villa Devoto" },
    { property: "og:description", content: "El menú de Fuera de Serie: hamburguesas, promos y mucho más. Pedí por WhatsApp en Villa Devoto." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

const allProducts = menu.flatMap(section => section.products);
const whatsapp = "https://wa.me/541138812448";
function Index() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [delivery, setDelivery] = useState("Retiro por el local");
  const [payment, setPayment] = useState("Efectivo");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const items = allProducts.filter(product => (cart[product.id] || 0) > 0);
  const count = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  const subtotal = items.reduce((sum, product) => sum + product.price * (cart[product.id] || 0), 0);
  const discount = payment === "Efectivo" ? Math.round(subtotal * .1) : 0;
  function change(id: string, amount: number) { setCart(previous => { const next = { ...previous, [id]: Math.max(0, (previous[id] || 0) + amount) }; if (!next[id]) delete next[id]; return next; }); }
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) { if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-section"))); } }, { rootMargin: "-150px 0px -55% 0px" });
    document.querySelectorAll("[data-section]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    const lines = ["*Pedido Fuera de Serie*", "", ...items.map(product => `${cart[product.id]}x ${product.name} — ${money(product.price * (cart[product.id] || 0))}`), "", `Subtotal: ${money(subtotal)}`, ...(discount ? [`Descuento efectivo (10%): -${money(discount)}`] : []), `*Total: ${money(subtotal - discount)}*`, `Nombre: ${name.trim()}`, `Entrega: ${delivery}`, ...(delivery === "Delivery" ? [`Dirección: ${address.trim()}`] : []), `Pago: ${payment}`, ...(notes.trim() ? [`Aclaraciones: ${notes.trim()}`] : [])];
    window.open(`${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }
  return <>
    <header className="site-header"><div className="header-inner">
      <a href="#" className="header-brand text-foreground"><img src={images['logo']} alt="Logo Fuera de Serie" /><div><strong>FUERA DE SERIE</strong><span>HAMBURGUESAS · DEVOTO</span></div></a>
      <div className="header-right"><span className="header-location"><MapPin size={13} /> Bermúdez 2400, Villa Devoto</span><Button variant="cinema" onClick={() => setOpen(true)} aria-label={`Ver mi pedido, ${count} productos`}><ShoppingBag /><span className="cart-label">Mi pedido</span><span className="cart-count">{count}</span><span className="hidden sm:inline">{money(subtotal)}</span></Button></div>
    </div></header>
    <section className="cinema-hero">
      <div className="marquee"><Star size={11} fill="currentColor" /> AHORA EN CARTELERA <Star size={11} fill="currentColor" /></div>
      <img className="hero-logo" src={images['logo']} alt="Fuera de Serie Hamburguesas" />
      <h1>FUERA DE SERIE</h1><p className="hero-subtitle">Hamburguesas con un papel protagónico</p>
      <div className="hero-hours"><span><MapPin size={12} /> Villa Devoto, Buenos Aires</span><span><Clock3 size={12} /> Mié a Lun · 18:00–00:00</span><span>Lun a Vie · 12:00–15:00</span></div>
      <div className="cash-ticket"><Ticket size={17} /><strong>10% OFF</strong><span>pagando en efectivo</span></div>
    </section>
    <nav className="category-bar" aria-label="Categorías del menú"><div className="category-inner">{menu.map((section, i) => <Button asChild variant="ghost" className="category-link" key={section.label}><a href={`#seccion-${i}`} data-active={active === i} onClick={() => setActive(i)}>{section.label}</a></Button>)}</div></nav>
    <main className="menu-content">{menu.map((section, i) => <section className="menu-section" id={`seccion-${i}`} data-section={i} key={section.title}>
      <div className="section-heading"><span className="section-index">{String(i + 1).padStart(2, "0")}</span><h2><span>{section.label}</span> · {i === 0 ? "Promos" : section.title.split(" · ")[1]}</h2><span className="heading-line" /><span className="section-caption">{i === 0 ? "La mejor dupla" : `${section.products.length} en cartelera`}</span></div>
      <div className={`product-grid ${i === 0 ? "promo-grid" : ""}`}>{section.products.map(product => <ProductCard key={product.id} product={product} quantity={cart[product.id] || 0} change={change} />)}</div>
    </section>)}</main>
    <footer className="credits"><img className="credits-logo" src={images['logo']} alt="Fuera de Serie" /><h2>FUERA DE SERIE</h2><p className="production-label">UNA PRODUCCIÓN DE VILLA DEVOTO</p>
      <div className="credit-columns"><div><small>LOCACIÓN</small><strong>Bermúdez 2400</strong><span>Villa Devoto, CABA</span><a href="https://www.google.com/maps/search/?api=1&query=Berm%C3%BAdez+2400+Villa+Devoto+Buenos+Aires" target="_blank" rel="noopener noreferrer">Cómo llegar ↗</a></div><div><small>FUNCIONES</small><strong>Miércoles a Lunes</strong><span>18:00 a 00:00 hs</span><span>Mediodía: Lun a Vie, 12 a 15 hs</span></div><div><small>REPARTO</small><strong>WhatsApp 11 3881-2448</strong><span>Tel. 7513-1895</span><a href="mailto:hamburguesasfds@gmail.com">hamburguesasfds@gmail.com</a></div></div>
      <div className="footer-actions"><Button asChild variant="cinema"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> Pedir por WhatsApp <ArrowUpRight /></a></Button><Button asChild variant="ticket"><a href="https://instagram.com/hamburguesas.fds" target="_blank" rel="noopener noreferrer"><Instagram /> @hamburguesas.fds</a></Button></div><p className="end-title">FIN</p><p className="copyright">© 2026 Fuera de Serie · Hamburguesas</p>
    </footer>
    <Sheet open={open} onOpenChange={setOpen}><SheetContent className="order-sheet"><SheetTitle>Tu pedido</SheetTitle><SheetDescription>{count ? `${count} ${count === 1 ? "protagonista" : "protagonistas"} para tu próxima función.` : "La función todavía no empezó."}</SheetDescription>
      {!items.length ? <div className="empty-order"><ShoppingBag className="mx-auto mb-4" size={36} /><p>Todavía no agregaste nada.</p><Button variant="cinema" className="mt-5" onClick={() => setOpen(false)}>Volver a la cartelera</Button></div> : <>
        <div>{items.map(product => <div className="order-item" key={product.id}>{product.image && <img src={product.image} alt={product.name} />}<span className="order-item-name">{product.name}<small>{money(product.price * (cart[product.id] || 0))}</small></span><Quantity product={product} quantity={cart[product.id] || 0} change={change} /></div>)}</div>
        <form className="checkout-form" onSubmit={send}><label>Tu nombre<input value={name} onChange={event => setName(event.target.value)} placeholder="Nombre" required maxLength={80} /></label><label>Entrega<select value={delivery} onChange={event => setDelivery(event.target.value)}><option>Retiro por el local</option><option>Delivery</option></select></label>{delivery === "Delivery" && <label>Dirección<input value={address} onChange={event => setAddress(event.target.value)} required placeholder="Calle, número y piso" maxLength={200} /></label>}<label>Forma de pago<select value={payment} onChange={event => setPayment(event.target.value)}><option>Efectivo</option><option>Transferencia</option></select></label><label>Aclaraciones<textarea rows={2} value={notes} onChange={event => setNotes(event.target.value)} placeholder="Sin cebolla, punto de la carne…" maxLength={500} /></label><div className="order-totals"><div><span>Subtotal</span><span>{money(subtotal)}</span></div>{discount > 0 && <div className="text-primary"><span>10% OFF efectivo</span><span>−{money(discount)}</span></div>}<div className="order-total"><span>Total</span><span>{money(subtotal - discount)}</span></div></div>{delivery === "Delivery" && <p className="text-xs text-muted-foreground">Costo y disponibilidad de envío a confirmar con el local.</p>}<Button variant="cinema" type="submit" size="lg"><MessageCircle /> Pedir por WhatsApp <ArrowUpRight /></Button></form>
      </>}
    </SheetContent></Sheet>
  </>;
}
function Quantity({ product, quantity, change }: { product: Product; quantity: number; change: (id: string, amount: number) => void }) { return <div className="product-quantity"><Button variant="ghost" size="icon" className="h-7 w-7 text-primary" title={`Quitar ${product.name}`} aria-label={`Quitar ${product.name}`} onClick={() => change(product.id, -1)}><Minus /></Button><span aria-live="polite">{quantity}</span><Button variant="cinemaIcon" size="icon" className="h-7 w-7" title={`Agregar ${product.name}`} aria-label={`Agregar ${product.name}`} onClick={() => change(product.id, 1)}><Plus /></Button></div>; }
function ProductCard({ product, quantity, change }: { product: Product; quantity: number; change: (id: string, amount: number) => void }) { return <article className="product-card"><div className="film-perforation" /><div className="product-image-wrap">{product.image ? <img src={product.image} alt={product.name} loading="lazy" /> : <div className="no-image"><GlassWater size={50} /></div>}{product.premiere && <span className="premiere-label">¡ESTRENO!</span>}</div><div className="product-body"><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><span className="price-ticket">{money(product.price)}</span>{quantity ? <Quantity product={product} quantity={quantity} change={change} /> : <Button variant="cinemaIcon" size="icon" className="h-8 w-8" title={`Agregar ${product.name}`} aria-label={`Agregar ${product.name}`} onClick={() => change(product.id, 1)}><Plus /></Button>}</div></div><div className="film-perforation" /></article>; }
