import p_img1 from './drawing_1.jpg'
import p_img2_1 from './drawing_2.jpg'
import p_img2_2 from './drawing_2.jpg'
import p_img2_3 from './drawing_2.jpg'
import p_img2_4 from './drawing_2.jpg'
import p_img3 from './drawing_3.jpg'
import p_img4 from './drawing_4.jpg'
import p_img5 from './drawing_5.jpg'
import p_img6 from './drawing_6.jpg'
import p_img7 from './drawing_7.jpg'
import p_img8 from './drawing_8.jpg'
import p_img9 from './drawing_9.jpg'
import p_img10 from './drawing_10.jpg'
import p_img11 from './drawing_11.jpg'
import p_img12 from './drawing_12.jpg'
import p_img13 from './drawing_13.jpg'
import p_img14 from './drawing_14.jpg'
import p_img15 from './drawing_15.jpg'
import p_img16 from './drawing_16.jpg'
import p_img17 from './drawing_17.jpg'
import p_img18 from './drawing_18.jpg'
import p_img19 from './drawing_19.jpg'
import p_img20 from './drawing_20.jpg'
import p_img21 from './drawing_21.jpg'
import p_img22 from './drawing_22.jpg'
import p_img23 from './drawing_23.jpg'
import p_img24 from './drawing_24.jpg'
import p_img25 from './drawing_25.jpg'
import p_img26 from './drawing_26.jpg'
import p_img27 from './drawing_27.jpg'
import p_img28 from './drawing_28.jpg'
import p_img29 from './drawing_29.jpg'
import p_img30 from './drawing_30.jpg'

// start repeating drawings randomly between 1–30
import p_img31 from './drawing_5.jpg'
import p_img32 from './drawing_14.jpg'
import p_img33 from './drawing_22.jpg'
import p_img34 from './drawing_7.jpg'
import p_img35 from './drawing_3.jpg'
import p_img36 from './drawing_18.jpg'
import p_img37 from './drawing_9.jpg'
import p_img38 from './drawing_25.jpg'
import p_img39 from './drawing_12.jpg'
import p_img40 from './drawing_28.jpg'
import p_img41 from './drawing_4.jpg'
import p_img42 from './drawing_17.jpg'
import p_img43 from './drawing_8.jpg'
import p_img44 from './drawing_30.jpg'
import p_img45 from './drawing_20.jpg'
import p_img46 from './drawing_1.jpg'
import p_img47 from './drawing_11.jpg'
import p_img48 from './drawing_24.jpg'
import p_img49 from './drawing_6.jpg'
import p_img50 from './drawing_19.jpg'
import p_img51 from './drawing_2.jpg'
import p_img52 from './drawing_27.jpg'



import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
   {
  _id: "aaaaa",
  name: "Abstract Landscape Drawing",
  description: "A beautifully hand-drawn abstract landscape sketch.",
  price: 100,
  image: [p_img1],
  category: "Drawing",
  subCategory: "Abstract",
  medium: "Canvas",     // replaced sizes
  forSale: true,        // new field
  date: 1716634345448,
  bestseller: true
},
{
  _id: "aaaab",
  name: "Modern Sketch Drawing",
  description: "A fine-lined sketch drawing on premium paper.",
  price: 200,
  image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
  category: "Drawing",
  subCategory: "Sketch",
  medium: "Digital",
  forSale: false,
  date: 1716621345448,
  bestseller: true
},
{
  _id: "aaaac",
  name: "Watercolor Painting",
  description: "A delicate watercolor painting on premium paper.",
  price: 220,
  image: [p_img3],
  category: "Drawing",
  subCategory: "Painting",
  medium: "A4 Paper",
  forSale: true,
  date: 1716234545448,
  bestseller: true
},
{
  _id: "aaaad",
  name: "Ink Pen Drawing",
  description: "Detailed ink pen drawing with clean lines.",
  price: 110,
  image: [p_img4],
  category: "Drawing",
  subCategory: "Sketch",
  medium: "Canvas",
  forSale: true,
  date: 1716621345448,
  bestseller: true
},
{
  _id: "aaaae",
  name: "Contemporary Portrait",
  description: "A portrait drawing in contemporary style.",
  price: 130,
  image: [p_img5],
  category: "Drawing",
  subCategory: "Portrait",
  medium: "Digital",
  forSale: true,
  date: 1716622345448,
  bestseller: true
},
{
  _id: "aaaaf",
  name: "Children’s Book Illustration",
  description: "Hand-drawn illustration suitable for children’s books.",
  price: 140,
  image: [p_img6],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "A4 Paper",
  forSale: false,
  date: 1716623423448,
  bestseller: true
},
{
  _id: "aaaag",
  name: "Pencil Sketch Landscape",
  description: "A soft pencil sketch of a natural landscape.",
  price: 190,
  image: [p_img7],
  category: "Drawing",
  subCategory: "Sketch",
  medium: "Canvas",
  forSale: true,
  date: 1716621542448,
  bestseller: false
},
{
  _id: "aaaah",
  name: "Digital Abstract Art",
  description: "A vibrant digital abstract art piece.",
  price: 140,
  image: [p_img8],
  category: "Drawing",
  subCategory: "Abstract",
  medium: "Digital",
  forSale: false,
  date: 1716622345448,
  bestseller: false
},

   {
  _id: "aaaai",
  name: "Children's Storybook Illustration",
  description: "Hand-drawn colorful illustration perfect for children's storybooks.",
  price: 100,
  image: [p_img9],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "A4 Paper",
  forSale: true,
  date: 1716621235448,
  bestseller: false
},
{
  _id: "aaaaj",
  name: "Urban Landscape Sketch",
  description: "Detailed pencil sketch capturing an urban cityscape.",
  price: 110,
  image: [p_img10],
  category: "Drawing",
  subCategory: "Sketch",
  medium: "Canvas",
  forSale: false,
  date: 1716622235448,
  bestseller: false
},
{
  _id: "aaaak",
  name: "Minimalist Portrait Drawing",
  description: "A minimalist portrait hand-drawn with fine ink lines.",
  price: 120,
  image: [p_img11],
  category: "Drawing",
  subCategory: "Portrait",
  medium: "Digital",
  forSale: true,
  date: 1716623345448,
  bestseller: false
},
{
  _id: "aaaal",
  name: "Floral Watercolor Artwork",
  description: "Soft and elegant watercolor artwork featuring floral patterns.",
  price: 150,
  image: [p_img12],
  category: "Drawing",
  subCategory: "Painting",
  medium: "Watercolor Paper",
  forSale: true,
  date: 1716624445448,
  bestseller: false
},
{
  _id: "aaaam",
  name: "Abstract Line Art",
  description: "Contemporary abstract line drawing in black and white.",
  price: 130,
  image: [p_img13],
  category: "Drawing",
  subCategory: "Abstract",
  medium: "Canvas",
  forSale: false,
  date: 1716625545448,
  bestseller: false
},
{
  _id: "aaaan",
  name: "Cartoon Character Sketch",
  description: "Playful hand-drawn cartoon character illustration.",
  price: 160,
  image: [p_img14],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "Digital",
  forSale: true,
  date: 1716626645448,
  bestseller: false
},
{
  _id: "aaaao",
  name: "Charcoal Landscape Drawing",
  description: "Deep and textured charcoal landscape drawing.",
  price: 140,
  image: [p_img15],
  category: "Drawing",
  subCategory: "Sketch",
  medium: "Charcoal Paper",
  forSale: false,
  date: 1716627745448,
  bestseller: false
},
{
  _id: "aaaap",
  name: "Fantasy Scene Illustration",
  description: "Hand-drawn fantasy scene with rich details.",
  price: 170,
  image: [p_img16],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "A3 Paper",
  forSale: true,
  date: 1716628845448,
  bestseller: false
},

   {
  _id: "aaaaq",
  name: "Mountain Landscape Drawing",
  description: "A detailed pencil drawing of a serene mountain landscape.",
  price: 150,
  image: [p_img17],
  category: "Drawing",
  subCategory: "Landscape",
  medium: "A3 Paper",
  forSale: true,
  date: 1716629945448,
  bestseller: false
},
{
  _id: "aaaar",
  name: "Children's Character Illustration",
  description: "Hand-drawn character illustration perfect for kids’ books.",
  price: 180,
  image: [p_img18],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "Digital",
  forSale: true,
  date: 1716631045448,
  bestseller: false
},
{
  _id: "aaaas",
  name: "Cartoon Style Portrait",
  description: "A playful cartoon-style portrait illustration.",
  price: 160,
  image: [p_img19],
  category: "Drawing",
  subCategory: "Portrait",
  medium: "A4 Paper",
  forSale: false,
  date: 1716632145448,
  bestseller: false
},
{
  _id: "aaaat",
  name: "Abstract Color Splash",
  description: "Vibrant abstract drawing with bold color splashes.",
  price: 190,
  image: [p_img20],
  category: "Original Paintings",
  subCategory: "Abstract Splash",
  medium: "Canvas",
  forSale: true,
  date: 1716633245448,
  bestseller: false
},
{
  _id: "aaaau",
  name: "Winter Scene Illustration",
  description: "Hand-drawn winter scene with soft pencil shading.",
  price: 170,
  image: [p_img21],
  category: "Fine Art Prints",
  subCategory: "Winter Landscape",
  medium: "Charcoal Paper",
  forSale: true,
  date: 1716634345448,
  bestseller: false
},
{
  _id: "aaaav",
  name: "Floral Sketch Artwork",
  description: "Elegant floral sketch with fine details.",
  price: 200,
  image: [p_img22],
  category: "Concept Sketches",
  subCategory: "Botanical Flowers",
  medium: "Watercolor Paper",
  forSale: false,
  date: 1716635445448,
  bestseller: false
},
{
  _id: "aaaaw",
  name: "Comic Scene Illustration",
  description: "Hand-drawn comic scene panel with bold lines.",
  price: 180,
  image: [p_img23],
  category: "Digital Illustrations",
  subCategory: "Comic Panel",
  medium: "Digital",
  forSale: true,
  date: 1716636545448,
  bestseller: false
},
{
  _id: "aaaax",
  name: "Fantasy Creature Drawing",
  description: "Creative fantasy creature drawing full of detail.",
  price: 210,
  image: [p_img24],
  category: "Character Design",
  subCategory: "Fantasy Creature",
  medium: "A3 Paper",
  forSale: false,
  date: 1716637645448,
  bestseller: false
},
{
  _id: "aaaay",
  name: "Sunset Beach Drawing",
  description: "Hand-drawn sunset at the beach with soft shading.",
  price: 190,
  image: [p_img25],
  category: "Scenery Artworks",
  subCategory: "Beach Sunset",
  medium: "A3 Paper",
  forSale: true,
  date: 1716638745448,
  bestseller: false
},
{
  _id: "aaaaz",
  name: "Winter Cityscape Sketch",
  description: "Detailed sketch of a city in winter, drawn with pencil.",
  price: 220,
  image: [p_img26],
  category: "Architectural Drawings",
  subCategory: "Winter Cityscape",
  medium: "Charcoal Paper",
  forSale: false,
  date: 1716639845448,
  bestseller: false
},
{
  _id: "aaaba",
  name: "Children’s Book Illustration",
  description: "Colorful illustration for children’s storybooks.",
  price: 200,
  image: [p_img27],
  category: "Storybook Art",
  subCategory: "Children’s Illustration",
  medium: "Digital",
  forSale: true,
  date: 1716640945448,
  bestseller: false
},
{
  _id: "aaabb",
  name: "Vintage Car Pencil Drawing",
  description: "Highly detailed pencil drawing of a vintage car.",
  price: 230,
  image: [p_img28],
  category: "Vehicle Artwork",
  subCategory: "Vintage Car Sketch",
  medium: "A4 Paper",
  forSale: true,
  date: 1716642045448,
  bestseller: false
},
{
  _id: "aaabc",
  name: "Wildflower Botanical Sketch",
  description: "Botanical sketch of wildflowers with fine detailing.",
  price: 210,
  image: [p_img29],
  category: "Nature Studies",
  subCategory: "Wildflower Sketch",
  medium: "Watercolor Paper",
  forSale: false,
  date: 1716643145448,
  bestseller: false
}
,
{
  _id: "aaabd",
  name: "Forest Trail Drawing",
  description: "Atmospheric drawing of a forest trail in charcoal.",
  price: 240,
  image: [p_img30],
  category: "Drawing",
  subCategory: "Landscape",
  medium: "Charcoal Paper",
  forSale: true,
  date: 1716644245448,
  bestseller: false
},
{
  _id: "aaabe",
  name: "Architectural Line Art",
  description: "Line drawing of a classic building facade.",
  price: 220,
  image: [p_img31],
  category: "Drawing",
  subCategory: "Architecture",
  medium: "Ink on Paper",
  forSale: false,
  date: 1716645345448,
  bestseller: false
},
{
  _id: "aaabf",
  name: "Character Concept Sketch",
  description: "Original character concept art with pencil and ink.",
  price: 250,
  image: [p_img32],
  category: "Drawing",
  subCategory: "Concept Art",
  medium: "Digital",
  forSale: true,
  date: 1716646445448,
  bestseller: false
},
{
  _id: "aaabg",
  name: "Animal Portrait Drawing",
  description: "Realistic animal portrait created with graphite pencils.",
  price: 230,
  image: [p_img33],
  category: "Drawing",
  subCategory: "Wildlife",
  medium: "A3 Paper",
  forSale: false,
  date: 1716647545448,
  bestseller: false
},

   {
  _id: "aaabh",
  name: "Mountain River Drawing",
  description: "A scenic hand-drawn artwork of a mountain river landscape.",
  price: 260,
  image: [p_img34],
  category: "Drawing",
  subCategory: "Landscape",
  medium: "A3 Paper",
  forSale: true,
  date: 1716648645448,
  bestseller: false
},
{
  _id: "aaabi",
  name: "Winter Street Sketch",
  description: "Sketch of a street in winter using pencil and charcoal.",
  price: 240,
  image: [p_img35],
  category: "Drawing",
  subCategory: "Cityscape",
  medium: "Charcoal Paper",
  forSale: false,
  date: 1716649745448,
  bestseller: false
},
{
  _id: "aaabj",
  name: "Snow-Covered Cottage Drawing",
  description: "Charcoal drawing of a snow-covered countryside cottage.",
  price: 270,
  image: [p_img36],
  category: "Drawing",
  subCategory: "Architecture",
  medium: "A4 Paper",
  forSale: true,
  date: 1716650845448,
  bestseller: false
},
{
  _id: "aaabk",
  name: "Abstract Floral Illustration",
  description: "Modern abstract floral line illustration.",
  price: 250,
  image: [p_img37],
  category: "Drawing",
  subCategory: "Abstract",
  medium: "Digital",
  forSale: false,
  date: 1716651945448,
  bestseller: false
},
{
  _id: "aaabl",
  name: "Urban Building Sketch",
  description: "Detailed pencil sketch of an urban building facade.",
  price: 280,
  image: [p_img38],
  category: "Drawing",
  subCategory: "Architecture",
  medium: "Ink on Paper",
  forSale: true,
  date: 1716653045448,
  bestseller: false
},
{
  _id: "aaabm",
  name: "Vintage Bicycle Drawing",
  description: "A fine-line pencil drawing of a vintage bicycle.",
  price: 260,
  image: [p_img39],
  category: "Drawing",
  subCategory: "Vehicle",
  medium: "A3 Paper",
  forSale: false,
  date: 1716654145448,
  bestseller: false
},
{
  _id: "aaabn",
  name: "Wildlife Animal Portrait",
  description: "Realistic graphite portrait of a wild animal.",
  price: 290,
  image: [p_img40],
  category: "Drawing",
  subCategory: "Wildlife",
  medium: "Charcoal Paper",
  forSale: true,
  date: 1716655245448,
  bestseller: false
},
{
  _id: "aaabo",
  name: "Seaside Lighthouse Drawing",
  description: "Color pencil drawing of a lighthouse by the sea.",
  price: 270,
  image: [p_img41],
  category: "Drawing",
  subCategory: "Seascape",
  medium: "Watercolor Paper",
  forSale: false,
  date: 1716656345448,
  bestseller: false
},
{
  _id: "aaabp",
  name: "Children’s Book Character",
  description: "Cute children’s book character illustration.",
  price: 300,
  image: [p_img42],
  category: "Drawing",
  subCategory: "Illustration",
  medium: "Digital",
  forSale: true,
  date: 1716657445448,
  bestseller: false
},
{
  _id: "aaabq",
  name: "Botanical Herb Sketch",
  description: "Delicate botanical herb sketch with pencil shading.",
  price: 280,
  image: [p_img43],
  category: "Drawing",
  subCategory: "Botanical",
  medium: "A4 Paper",
  forSale: false,
  date: 1716658545448,
  bestseller: false
},
{
  _id: "aaabr",
  name: "Rainy Evening Street Drawing",
  description: "Charcoal drawing of a rainy evening street scene.",
  price: 310,
  image: [p_img44],
  category: "Drawing",
  subCategory: "Cityscape",
  medium: "Charcoal Paper",
  forSale: true,
  date: 1716659645448,
  bestseller: false
},
{
  _id: "aaabs",
  name: "Fantasy Creature Concept Art",
  description: "Concept drawing of a fantasy creature in pencil.",
  price: 290,
  image: [p_img45],
  category: "Drawing",
  subCategory: "Concept Art",
  medium: "Digital",
  forSale: false,
  date: 1716660745448,
  bestseller: false
},
{
  _id: "aaabt",
  name: "Countryside Barn Sketch",
  description: "Pencil sketch of a barn in the countryside.",
  price: 320,
  image: [p_img46],
  category: "Drawing",
  subCategory: "Architecture",
  medium: "A3 Paper",
  forSale: true,
  date: 1716661845448,
  bestseller: false
},
{
  _id: "aaabu",
  name: "Riverbank Landscape Drawing",
  description: "Calm riverbank landscape done in graphite.",
  price: 300,
  image: [p_img47],
  category: "Drawing",
  subCategory: "Landscape",
  medium: "A4 Paper",
  forSale: false,
  date: 1716662945448,
  bestseller: false
},
{
  _id: "aaabv",
  name: "Classic Car Pencil Art",
  description: "Highly detailed classic car pencil art.",
  price: 330,
  image: [p_img48],
  category: "Drawing",
  subCategory: "Vehicle",
  medium: "A3 Paper",
  forSale: true,
  date: 1716664045448,
  bestseller: false
},
{
  _id: "aaabw",
  name: "Bird in Flight Sketch",
  description: "Graphite drawing of a bird in flight.",
  price: 310,
  image: [p_img49],
  category: "Drawing",
  subCategory: "Wildlife",
  medium: "Charcoal Paper",
  forSale: false,
  date: 1716665145448,
  bestseller: false
},
{
  _id: "aaabx",
  name: "Village Scene Illustration",
  description: "Village scene illustration with ink and watercolor.",
  price: 340,
  image: [p_img50],
  category: "Drawing",
  subCategory: "Village",
  medium: "Watercolor Paper",
  forSale: true,
  date: 1716666245448,
  bestseller: false
},
{
  _id: "aaaby",
  name: "Autumn Forest Trail Drawing",
  description: "Autumn-themed forest trail drawing with pastels.",
  price: 320,
  image: [p_img51],
  category: "Drawing",
  subCategory: "Landscape",
  medium: "Pastel Paper",
  forSale: false,
  date: 1716667345448,
  bestseller: false
},
{
  _id: "aaabz",
  name: "Bridge Over River Sketch",
  description: "Ink sketch of a bridge over a flowing river.",
  price: 350,
  image: [p_img52],
  category: "Drawing",
  subCategory: "Architecture",
  medium: "Ink on Paper",
  forSale: true,
  date: 1716668445448,
  bestseller: false
},


]