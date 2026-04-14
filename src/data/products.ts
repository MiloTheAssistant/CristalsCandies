export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  flavors: string[];
  dietary: string[];
  ingredients: string;
  story: string;
  image: string;
  images: string[];
  inStock: boolean;
  limitedEdition?: boolean;
  bestseller?: boolean;
  related: string[];
}

export const categories = [
  { slug: "classic", name: "Classic Hard Candies", description: "Timeless flavors, handcrafted with care" },
  { slug: "seasonal", name: "Seasonal Specials", description: "Limited-edition flavors for every occasion" },
  { slug: "gift-boxes", name: "Gift Boxes", description: "Curated collections for every sweet tooth" },
  { slug: "custom", name: "Custom Orders", description: "Your vision, our craft — made to order" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "honey-amber-drops",
    name: "Honey Amber Drops",
    tagline: "Pure Idaho honey, crystallized to perfection",
    description:
      "Golden drops of pure, locally-sourced Idaho honey transformed into delicate hard candies. Each piece captures the warmth of summer fields and the quiet hum of happy bees.",
    longDescription:
      "Our Honey Amber Drops begin with raw honey from small apiaries across the Snake River Valley. We slowly heat and pull the honey by hand, creating a translucent amber candy that dissolves into pure, floral sweetness on your tongue. No added sugars, no artificial flavors — just honey, patience, and a little magic. Each batch yields only 120 pieces, and once they're gone, they're gone until the next harvest.",
    price: 14.99,
    category: "classic",
    flavors: ["Honey", "Wildflower"],
    dietary: ["organic", "gluten-free", "dairy-free"],
    ingredients: "Organic raw honey (Idaho-sourced), organic cane sugar, purified water",
    story: "Cristal discovered her first jar of raw honey at the Rigby Farmers Market in 2019. The beekeeper told her that hard candy was a lost art — so she brought it back.",
    image: "/images/honey-amber-drops.jpg",
    images: ["/images/honey-amber-drops.jpg"],
    inStock: true,
    bestseller: true,
    related: ["lavender-twilight-melts", "cinnamon-heart-warms"],
  },
  {
    id: "2",
    slug: "lavender-twilight-melts",
    name: "Lavender Twilight Melts",
    tagline: "Serenity in every slow-dissolving drop",
    description:
      "Delicate lavender buds from our own garden blended into a smooth, floral hard candy that melts as slowly as a summer sunset over the Tetons.",
    longDescription:
      "We grow English lavender right here in Rigby — the same plants that fill our garden with purple haze each July. The buds are dried, sifted, and infused into our organic candy base alongside a whisper of vanilla bean. The result is a candy that doesn't just taste good; it slows you down. Lavender Twilight Melts are meant to be savored, not rushed. Perfect for unwinding after a long day or tucking into a care package for someone who needs a little calm.",
    price: 16.99,
    category: "classic",
    flavors: ["Lavender", "Vanilla"],
    dietary: ["organic", "gluten-free", "dairy-free", "vegan"],
    ingredients: "Organic cane sugar, organic lavender buds (Rigby-grown), organic vanilla extract, purified water",
    story: "The lavender patch started as three small plants behind the kitchen. Now it's a full garden — and our most requested flavor.",
    image: "/images/lavender-twilight.jpg",
    images: ["/images/lavender-twilight.jpg"],
    inStock: true,
    bestseller: true,
    related: ["honey-amber-drops", "rose-garden-petals"],
  },
  {
    id: "3",
    slug: "cinnamon-heart-warms",
    name: "Cinnamon Heart Warms",
    tagline: "Big cinnamon energy, small-batch soul",
    description:
      "Bold, warming cinnamon hard candies with a gentle heat that builds and fades into sweet. Made with real Ceylon cinnamon — never the fake stuff.",
    longDescription:
      "Most cinnamon candies hit you with artificial fire and leave a chemical aftertaste. Ours don't. We use only Ceylon cinnamon — the real, smooth, complex kind — sourced from a small importer who's been in the business for 40 years. Each candy is hand-pulled to a glass-like finish and wrapped individually, because the little details matter. Cinnamon Heart Warms are the candy equivalent of a warm hug from someone who means it.",
    price: 13.99,
    category: "classic",
    flavors: ["Cinnamon"],
    dietary: ["organic", "gluten-free", "dairy-free", "vegan"],
    ingredients: "Organic cane sugar, Ceylon cinnamon bark, organic corn syrup, purified water",
    story: "Cristal's grandmother kept cinnamon drops in her coat pocket every winter. This candy is a love letter to that memory.",
    image: "/images/cinnamon-heart.jpg",
    images: ["/images/cinnamon-heart.jpg"],
    inStock: true,
    related: ["honey-amber-drops", "spiced-cider-jewels"],
  },
  {
    id: "4",
    slug: "rose-garden-petals",
    name: "Rose Garden Petals",
    tagline: "A love letter written in sugar and roses",
    description:
      "Elegant rose-flavored hard candies shaped like petals, infused with Damascus rose water and a touch of lemon zest.",
    longDescription:
      "Rose Garden Petals are our most romantic creation. We use Damascus rose water — the kind perfumers fight over — and blend it with bright lemon zest and organic sugar. Each candy is hand-pulled and shaped into a delicate petal form. They look almost too beautiful to eat. Almost. These are the candies that end up in wedding favors, anniversary gifts, and the pockets of people who believe in romance.",
    price: 17.99,
    category: "classic",
    flavors: ["Rose", "Lemon"],
    dietary: ["organic", "gluten-free", "dairy-free", "vegan"],
    ingredients: "Organic cane sugar, Damascus rose water, organic lemon zest, organic corn syrup, purified water",
    story: "A bride wrote to us asking if we could make rose candies for her wedding. We said yes. Now we can't stop.",
    image: "/images/rose-garden.jpg",
    images: ["/images/rose-garden.jpg"],
    inStock: true,
    limitedEdition: false,
    related: ["lavender-twilight-melts", "honey-amber-drops"],
  },
  {
    id: "5",
    slug: "spiced-cider-jewels",
    name: "Spiced Cider Jewels",
    tagline: "Autumn in Idaho, captured in hard candy",
    description:
      "Warm apple cider, clove, and nutmeg come together in a jewel-toned hard candy that tastes like the first crisp day of fall.",
    longDescription:
      "Every September, we press local Idaho apples and simmer the cider with whole cloves, star anise, and fresh nutmeg until the kitchen smells like a dream. Then we transform that liquid autumn into glistening hard candies that capture the season perfectly. Spiced Cider Jewels are a seasonal favorite that sell out by November every year. If you want them, don't wait — nature doesn't.",
    price: 15.99,
    category: "seasonal",
    flavors: ["Apple Cider", "Spice"],
    dietary: ["organic", "gluten-free", "dairy-free", "vegan"],
    ingredients: "Organic apple cider (Idaho-pressed), whole cloves, star anise, fresh nutmeg, organic cane sugar, purified water",
    story: "The first batch was an experiment that went right. Now it's the candy everyone waits all year for.",
    image: "/images/spiced-cider.jpg",
    images: ["/images/spiced-cider.jpg"],
    inStock: true,
    limitedEdition: true,
    related: ["cinnamon-heart-warms", "winterberry-frost"],
  },
  {
    id: "6",
    slug: "winterberry-frost",
    name: "Winterberry Frost",
    tagline: "Cranberry and peppermint — the holidays just got real",
    description:
      "Tart cranberry meets cool peppermint in a candy that's as festive as it gets. Limited holiday release.",
    longDescription:
      "Winterberry Frost is our holiday showstopper. We simmer fresh cranberries until they're screaming red, then blend the tart juice with cool, organic peppermint oil. The result is a candy that tastes like a snowball fight followed by hot cocoa — brisk, bright, and a little bit magical. Available October through December, and then it vanishes like the first snow.",
    price: 16.99,
    category: "seasonal",
    flavors: ["Cranberry", "Peppermint"],
    dietary: ["organic", "gluten-free", "dairy-free", "vegan"],
    ingredients: "Organic cranberries, organic peppermint oil, organic cane sugar, organic corn syrup, purified water",
    story: "Holiday markets in Rigby deserve a candy that matches the season. This one does.",
    image: "/images/winterberry-frost.jpg",
    images: ["/images/winterberry-frost.jpg"],
    inStock: true,
    limitedEdition: true,
    related: ["spiced-cider-jewels", "classic-assortment-box"],
  },
  {
    id: "7",
    slug: "classic-assortment-box",
    name: "The Classic Assortment",
    tagline: "Can't choose? We made it easy.",
    description:
      "A curated gift box featuring our four bestselling classic flavors — Honey Amber, Lavender Twilight, Cinnamon Heart, and Rose Garden. The perfect introduction to Cristal's Candies.",
    longDescription:
      "The Classic Assortment is our most popular gift item for a reason: it lets someone experience everything we do best. Inside a beautiful kraft box with a hand-tied ribbon, you'll find generous portions of our four signature classic flavors. It's the gift you give when you want to say 'I thought of you' without saying a word. Each box includes a card telling the story behind every candy — because the story is half the experience.",
    price: 42.99,
    category: "gift-boxes",
    flavors: ["Assorted"],
    dietary: ["organic", "gluten-free", "dairy-free"],
    ingredients: "See individual candy descriptions for full ingredient lists",
    story: "People kept asking for 'one of everything.' So we made a box for them.",
    image: "/images/classic-assortment.jpg",
    images: ["/images/classic-assortment.jpg"],
    inStock: true,
    bestseller: true,
    related: ["honey-amber-drops", "lavender-twilight-melts", "cinnamon-heart-warms", "rose-garden-petals"],
  },
  {
    id: "8",
    slug: "sweet-surprise-box",
    name: "The Sweet Surprise Box",
    tagline: "Let us surprise you — trust us on this one",
    description:
      "A mystery assortment of our current favorites and limited releases, hand-selected by Cristal. No two boxes are the same.",
    longDescription:
      "The Sweet Surprise Box is for the adventurous candy lover. Each month, Cristal personally selects a mix of classics, seasonals, and experimental flavors that aren't available anywhere else. You might get a prototype that never made it to the shop, a seasonal flavor that's about to disappear, or a brand-new creation that hasn't been announced yet. It's a little bit of magic in a box — and the only way to taste everything we're working on.",
    price: 34.99,
    category: "gift-boxes",
    flavors: ["Surprise"],
    dietary: ["organic", "gluten-free"],
    ingredients: "Varies — all organic, all-natural. Includes an ingredient card with each box.",
    story: "The surprise box started as a thank-you to our most loyal customers. Now it's a monthly ritual.",
    image: "/images/surprise-box.jpg",
    images: ["/images/surprise-box.jpg"],
    inStock: true,
    related: ["classic-assortment-box", "custom-candy-creation"],
  },
  {
    id: "9",
    slug: "custom-candy-creation",
    name: "Custom Candy Creation",
    tagline: "Your flavor. Your candy. Your story.",
    description:
      "Work directly with Cristal to design a one-of-a-kind hard candy — choose your flavor, color, and shape. Perfect for weddings, corporate events, and once-in-a-lifetime celebrations.",
    longDescription:
      "This is what makes Cristal's Candies different from every candy company on the internet: we'll make your candy. Your flavor. Your color. Your shape. Whether it's lavender-lemon for a spring wedding, whiskey-pecan for a retirement party, or something nobody's ever tried before — we'll figure it out together. Each custom order includes a private consultation, flavor development (with samples shipped to you), and handcrafted production in our Rigby kitchen. Custom orders start at 50 pieces and typically ship within 3–4 weeks.",
    price: 59.99,
    category: "custom",
    flavors: ["Custom"],
    dietary: ["varies"],
    ingredients: "Custom — all organic and natural ingredients. Full ingredient disclosure provided before production.",
    story: "Every custom candy starts with a conversation. Tell us your story, and we'll make it sweet.",
    image: "/images/custom-creation.jpg",
    images: ["/images/custom-creation.jpg"],
    inStock: true,
    related: ["classic-assortment-box", "sweet-surprise-box"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestsellers(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getLimitedEditions(): Product[] {
  return products.filter((p) => p.limitedEdition);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}