export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  author: string
  image: string
  content: { heading: string; body: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-parfum',
    title: 'What Is Parfum? The Complete Guide to Fragrance Concentration',
    excerpt: 'Parfum, eau de parfum, eau de toilette — the differences matter more than most people realise. A complete guide to fragrance concentration and why it changes everything about how a scent performs on your skin.',
    date: '4 June 2026',
    category: 'Guide',
    readTime: '6 min read',
    author: 'Ethereal Charm',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=80',
    content: [
      {
        heading: 'Why Concentration Is the Most Important Factor in Fragrance',
        body: 'When you pick up a bottle of perfume, the concentration of fragrance oil is the single most important factor in how it performs on your skin. Yet most people shop by name, by bottle design, or by how it smells in the store — rarely stopping to consider that the same scent at different concentrations can feel like an entirely different fragrance. Understanding concentration is not just technical knowledge; it changes how you shop, how you wear fragrance, and how much value you actually get.'
      },
      {
        heading: 'The Fragrance Concentration Spectrum',
        body: 'Fragrance concentrations fall along a spectrum from lightest to heaviest. At the lightest end is Eau Fraîche, containing 1–3% fragrance oil diluted in mostly water and alcohol — refreshing rather than lingering. Eau de Cologne sits at 2–5%, originally a light citrus style dating back to 18th-century Köln. Eau de Toilette typically contains 5–15% fragrance oil and is what most people think of as everyday perfume. Eau de Parfum steps this up to 15–20%, offering noticeably deeper projection and staying power. At the top of the spectrum sits Parfum — also called Extrait de Parfum or Pure Perfume — at 20–40% fragrance oil concentration.'
      },
      {
        heading: 'What Makes Parfum Different',
        body: 'Parfum is not simply a stronger version of other fragrance types. The high concentration of aromatic compounds changes the character of the scent itself. The drydown — how a fragrance evolves on your skin over hours — is far more complex and interesting in a parfum. You experience the top notes, the heart, and the base in a slower, more nuanced progression. Mass-market perfumes at lower concentrations are often designed to project loudly for the first hour before fading. A parfum is designed to be a more intimate companion: closer to the skin, more personal, and far more enduring.'
      },
      {
        heading: 'Longevity: The Numbers That Matter',
        body: 'An Eau de Toilette on most skin types lasts between 2 and 4 hours before fading to almost nothing. An Eau de Parfum typically lasts 6 to 8 hours. A well-formulated parfum can last 10 to 14 hours — sometimes longer on fabrics. When you wear a fragrance all day without reapplication, it becomes part of how people experience you. It is present at a morning meeting, at dinner, at the end of an evening. That sustained, personal presence is what makes parfum the preferred concentration for anyone who takes fragrance seriously.'
      },
      {
        heading: 'The Investment Argument',
        body: 'Parfum costs more per millilitre than lower concentrations. But the cost per wearing is often lower. Because you apply less — a touch to the wrists and neck is typically sufficient — a 25ml bottle of parfum can outlast a 100ml bottle of Eau de Toilette for the same wearer. Beyond economics, there is the quality argument. Higher-concentration formulas tend to use better raw materials, because the fragrance oil itself is a larger percentage of the product. Cheaper ingredients smell harsher at high concentration, so parfum naturally incentivises superior sourcing and craftsmanship.'
      },
      {
        heading: 'How Ethereal Charm Is Formulated',
        body: 'Ethereal Charm is formulated as a high-concentration parfum — not as a marketing decision, but as a quality one. Our founder wanted a fragrance that would be present from morning to evening without asking anything more of the wearer. The concentration was chosen to support the complexity of the scent: the warmth of the base, the depth of the heart, and the freshness of the opening all need time and presence to be fully experienced. At parfum concentration, Ethereal Charm stays close, becomes familiar, and is still there at the end of the day.'
      },
      {
        heading: 'How to Wear Parfum',
        body: 'One of the most common mistakes with parfum is over-application. Two or three targeted applications — the inner wrists, the side of the neck, the crook of the elbow — are sufficient for most people and most occasions. Avoid rubbing the wrists together after applying, as this breaks down the fragrance molecules and distorts the scent. Apply to clean, lightly moisturised skin for best performance. The warmth of pulse points helps diffuse the scent slowly and beautifully throughout the day.'
      }
    ]
  },
  {
    slug: 'gender-neutral-perfume-guide',
    title: 'Gender-Neutral Perfume: Why the Best Scents Have No Gender',
    excerpt: 'The division of fragrance into "for him" and "for her" was always a marketing construct. Here is why the most interesting, sophisticated perfumes have always existed outside those categories — and why gender-neutral fragrance is not a trend but a return to how perfume was always meant to be.',
    date: '28 May 2026',
    category: 'Perspectives',
    readTime: '5 min read',
    author: 'Ethereal Charm',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&q=80',
    content: [
      {
        heading: 'Fragrance Has No Gender — Only Marketing Does',
        body: 'For most of human history, fragrance was not gendered. Ancient Egyptians used kyphi, a complex resin blend, in temple rituals regardless of who was present. Ottoman perfumers created oud-based compositions worn by everyone of status. It was not until the mid-20th century, when fragrance became a mass-market consumer product, that the industry began aggressively segmenting its customers. "For Him" and "For Her" were categories invented by marketing departments, not by perfumers. The best nose in any house will tell you the same thing: scent does not know your gender.'
      },
      {
        heading: 'What Happened in the 20th Century',
        body: 'The gendering of fragrance accelerated after World War II, as consumer goods companies discovered that selling two products — one masculine, one feminine — was more profitable than selling one. The conventions became entrenched: women were given florals, orientals, and soft musks; men were given citrus, woods, and fougères. These conventions had nothing to do with chemistry or aesthetics. They were retail strategies. Yet they shaped an entire industry for generations and convinced millions of people that certain scents were "not for them".'
      },
      {
        heading: 'What Makes a Fragrance Gender-Neutral',
        body: 'A gender-neutral fragrance is not necessarily one without strong character. It is one designed to interact beautifully with any skin chemistry, to suit any personality, and to carry no coded signals about the wearer\'s identity beyond "this person has excellent taste." The most successful gender-neutral fragrances tend to be built around ingredients with broad sensory appeal: warm woods, clean musks, subtle spice, amber, and green botanical notes. They are complex enough to be interesting, but approachable enough to feel personal rather than confrontational.'
      },
      {
        heading: 'The Notes That Transcend Gender',
        body: 'Certain aromatic ingredients have always crossed the conventional gender divide. Sandalwood is warm, creamy, and deeply sensory — worn for centuries by people of all identities. Vetiver is earthy and smoky, equally compelling on any skin. Iris has a powdery, almost abstract quality that defies categorisation. Bergamot opens with sparkling brightness regardless of who applies it. Amber provides warmth and depth without being heavy. These are not "neutral" in the sense of being stripped of personality — they are universal in the sense of being beautiful on everyone.'
      },
      {
        heading: 'Why Gender-Neutral Fragrance Is the Future of Luxury',
        body: 'The most prestigious fragrance houses in the world have been expanding their gender-neutral offerings for a decade. Consumers under 35 are significantly more likely to buy fragrance based on scent profile rather than gender designation. Luxury is, by definition, personal. The idea that a premium fragrance should fit a demographic category rather than an individual is increasingly at odds with what luxury actually means. The future of perfumery is not unisex as a compromise — it is fragrance designed to be worn by anyone who chooses it, with full confidence that it was made for them.'
      },
      {
        heading: 'Ethereal Charm and the Gender-Neutral Approach',
        body: 'Ethereal Charm was created without a target gender. Our founder did not set out to make a "men\'s" or "women\'s" fragrance; she set out to make a fragrance she would want to wear herself — and that she would give to anyone she respected. The result is a parfum that performs beautifully across different skin chemistries, different body temperatures, and different personal styles. It is not androgynous in the sense of being deliberately stripped of warmth or personality. It is simply a scent designed to belong to the person wearing it, whoever that person might be.'
      }
    ]
  },
  {
    slug: 'london-made-perfume',
    title: 'London-Made Perfume: Why Provenance Matters in Luxury Fragrance',
    excerpt: 'The city where a fragrance is made shapes what it becomes. London has a distinct relationship with craft, precision, and restraint that shows up in the perfumes made here. This is what "Made in London" actually means — and why it matters.',
    date: '14 May 2026',
    category: 'Craft',
    readTime: '5 min read',
    author: 'Ethereal Charm',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=1200&q=80',
    content: [
      {
        heading: 'Provenance Matters More Than People Think',
        body: 'Wine drinkers understand terroir — the idea that where something is grown and made shapes what it becomes. The same logic applies to fragrance, though the perfume industry has been slower to acknowledge it. The culture, values, and aesthetic sensibility of a place permeate the products made there. London has a distinct creative identity: disciplined, understated, technically precise, with a streak of quiet irreverence. These qualities show up in the fragrances made here.'
      },
      {
        heading: 'London\'s Fragrance Heritage',
        body: 'London has been a centre of quality perfumery since at least the 18th century, when apothecaries on Jermyn Street and Bond Street served the city\'s well-dressed classes. The tradition of English perfumery emphasises complexity and longevity over immediate impact. Where Parisian fragrances might prioritise bold projection, London scents have historically been more intimate — designed to be discovered rather than announced. This restraint is a choice, not a limitation. It reflects a particular idea of what elegance means.'
      },
      {
        heading: 'What Small-Batch London Production Actually Means',
        body: 'Making fragrance in small batches in London means several things simultaneously. It means the batch size is limited — typically hundreds of bottles rather than tens of thousands — which allows for better quality control at every stage. It means the person overseeing production is close to the product, not managing it through layers of industrial process. It means ingredient choices are made based on quality rather than commodity pricing. And it means that when something is not right, it can be corrected before it reaches a customer.'
      },
      {
        heading: 'Sourcing Ingredients in the British Isles',
        body: 'The British Isles have a remarkable botanical heritage that is underused in commercial perfumery. Heather from Scottish moorlands carries a honeyed, smoky sweetness. English lavender from Norfolk fields is softer and more complex than its Mediterranean counterpart. Oakmoss and woodland resins from English forests offer depth and earthiness. Combining local British botanical ingredients with carefully sourced international materials — oud from Southeast Asia, sandalwood from Australia, rose absolute from Bulgaria — creates a fragrance that is genuinely international in character while being rooted in a specific place.'
      },
      {
        heading: 'The Cost of Getting It Right',
        body: 'Making a premium fragrance in small batches in London costs significantly more per bottle than mass production in large facilities. Labour costs are higher. Batch setup costs are spread across fewer units. Premium local ingredients cost more than commodity alternatives. This is reflected in the price of a genuinely London-made parfum — and it is worth understanding what you are paying for. You are paying for a product that was made by someone who cared about it, from materials chosen for quality rather than margin, in a city with centuries of perfumery tradition behind it.'
      },
      {
        heading: 'Ethereal Charm: Made in London, With Intention',
        body: 'Every bottle of Ethereal Charm is made in London. This is not a marketing phrase on a label — it is a description of a process. The founder sources, blends, and produces each batch personally. The decision to make in London rather than outsource production to a cheaper location was deliberate: it is the only way to maintain the level of control, craftsmanship, and character that the fragrance requires. When you wear Ethereal Charm, you are wearing something made with London\'s particular combination of precision and creativity — and that is felt in every hour it sits on your skin.'
      }
    ]
  },
  {
    slug: 'how-to-make-perfume-last-longer',
    title: 'How to Make Your Perfume Last Longer: A Complete Guide',
    excerpt: 'If your fragrance fades within an hour, the problem is rarely the perfume. Application technique, skin preparation, and fragrance concentration all play a role. Here is everything you need to know to get all-day performance from your scent.',
    date: '5 May 2026',
    category: 'Guide',
    readTime: '5 min read',
    author: 'Ethereal Charm',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=80',
    content: [
      {
        heading: 'Why Fragrance Fades — and Why It\'s Not Always the Perfume\'s Fault',
        body: 'A fragrance that fades quickly is frustrating. But before concluding that a perfume is weak, it is worth understanding why scent fades and what you can do about it. Fragrance molecules evaporate — that is how you smell them in the first place. The rate of evaporation depends on the concentration of aromatic compounds in the formula, but also on skin type, ambient temperature, humidity, application technique, and what is on your skin when you apply. Many people who feel their perfume "doesn\'t last" are applying it in ways that accelerate evaporation rather than slow it down.'
      },
      {
        heading: 'Start with Skin Preparation',
        body: 'Fragrance performs best on hydrated skin. Dry skin has less surface oil for fragrance molecules to bind to, which means they evaporate faster. Apply an unscented body lotion or a small amount of petroleum jelly to pulse points before you apply your fragrance. The extra moisture and oil create a surface that holds scent longer. Applying perfume immediately after a shower — while skin is still slightly warm from the water — also helps the fragrance settle in beautifully, as the open pores and residual warmth encourage better absorption.'
      },
      {
        heading: 'Where to Apply for Maximum Longevity',
        body: 'Pulse points — areas where blood vessels run close to the skin surface — generate heat that helps diffuse fragrance. The most effective locations are the inner wrists, the sides of the neck just below the jawline, the crook of the elbow, and behind the knees. The warmth radiating from these points creates a slow, continuous diffusion of scent throughout the day. Apply to two or three of these points for a balanced, all-day effect. Hair also holds fragrance exceptionally well — a light mist from 30cm away on clean, dry hair can make a scent last far longer than skin application alone.'
      },
      {
        heading: 'Stop Rubbing Your Wrists Together',
        body: 'This is perhaps the most common fragrance mistake. Rubbing the wrists together after applying perfume creates friction and heat that breaks down the top notes rapidly, altering the scent profile and reducing longevity. The opening notes — often the most delicate and complex part of a fragrance — are destroyed in seconds. Instead, apply to one wrist and then lightly press (do not rub) the other wrist against it, or simply apply directly to each wrist separately. Let the fragrance dry naturally on the skin without any mechanical interference.'
      },
      {
        heading: 'Fragrance Concentration and Longevity',
        body: 'If you consistently struggle to get more than a few hours from your fragrance, the most reliable solution is to choose a higher concentration. An Eau de Toilette at 8% fragrance oil simply cannot deliver the same staying power as a parfum at 25%, regardless of how well you apply it. Parfum — the highest concentration — is designed precisely for people who want their scent to be present from morning to evening without reapplication. While it costs more upfront, the reduced quantity needed per application means the cost per wearing is often comparable or lower.'
      },
      {
        heading: 'How to Store Fragrance to Preserve It',
        body: 'Fragrance degrades when exposed to heat, light, and oxygen. The bathroom — where most people keep their perfume — is actually one of the worst possible storage locations. Steam and temperature fluctuations accelerate oxidation of the fragrance molecules, altering the scent over time and reducing its potency. Store perfume in a cool, dark place: a drawer, a wardrobe shelf, or even a dedicated box. Keep the bottle closed when not in use. If you want to preserve a bottle you use infrequently, store it in the refrigerator — a cool, dark environment is perfect for fragrance longevity.'
      },
      {
        heading: 'Layering for Depth and Staying Power',
        body: 'Fragrance layering — applying multiple complementary scents in sequence — can enhance both depth and longevity. A scented body wash used in the shower, followed by a matching or complementary body lotion, followed by your parfum creates multiple layers of fragrance that reinforce each other rather than competing. At Ethereal Charm, we are developing complementary products precisely for this reason. In the meantime, applying an unscented oil before your parfum provides a neutral base that extends the life of the fragrance considerably.'
      }
    ]
  },
  {
    slug: 'small-batch-artisan-perfumery',
    title: 'Small-Batch Artisan Perfumery: Why It Produces Better Fragrance',
    excerpt: 'There is a fundamental difference between a fragrance produced in a factory of tens of thousands of units and one made in small batches by a single perfumer. This is what that difference looks like — in the ingredients, the process, and ultimately in the bottle.',
    date: '22 April 2026',
    category: 'Craft',
    readTime: '6 min read',
    author: 'Ethereal Charm',
    image: 'https://images.unsplash.com/photo-1615400327023-a9e6caee2e5f?w=1200&q=80',
    content: [
      {
        heading: 'The Scale Problem in Modern Perfumery',
        body: 'The global fragrance industry produces billions of units annually. At that scale, quality becomes difficult to maintain — not because the people involved don\'t care, but because industrial production requires compromises that artisan production does not. Ingredients are sourced in vast quantities from commodity suppliers. Formulas are designed to be stable across enormous batch variations. Quality control samples a tiny percentage of output. The result is often a fragrance that smells perfectly acceptable but lacks the character, depth, and distinctiveness of a scent made with individual attention at every stage.'
      },
      {
        heading: 'What Small-Batch Actually Means',
        body: 'A small-batch fragrance is one produced in limited quantities — typically measured in hundreds of bottles rather than tens of thousands. At this scale, a perfumer can personally oversee every aspect of production: the selection of individual ingredient batches, the blending ratios, the quality of the carrier, the filling of each bottle. Variation between batches can be monitored and corrected. Ingredients can be chosen for quality rather than availability and price. The perfumer\'s hands-on involvement is not just a romantic detail — it is what makes the difference between a product that is consistently mediocre and one that is consistently excellent.'
      },
      {
        heading: 'Ingredient Quality: Where the Difference Is Most Visible',
        body: 'In industrial fragrance production, ingredient selection is dominated by cost and consistency. Natural materials — rose absolute, oud, sandalwood, iris — are expensive and variable, so they are often replaced with or supplemented by synthetic alternatives that are cheaper and more predictable. This is not inherently wrong; many synthetics are excellent. But the ratio of genuine natural materials to synthetic aroma chemicals in a mass-market fragrance is typically far lower than in an artisan one. The difference is perceptible. Natural ingredients have a complexity and warmth that most synthetics, however well-engineered, cannot fully replicate.'
      },
      {
        heading: 'The Role of Time in Artisan Perfumery',
        body: 'Good fragrance cannot be rushed. The maceration period — the time during which fragrance compounds are allowed to marry and develop in the carrier — is often abbreviated in industrial production because time is money at scale. An artisan perfumer can allow a batch to macerate for weeks or months before it is considered ready. During this time, the individual aromatic molecules interact and settle into a more cohesive, harmonious whole. The difference between a two-week maceration and a three-month one is not subtle — it is the difference between a fragrance that smells assembled and one that smells composed.'
      },
      {
        heading: 'Why Artisan Fragrance Costs More — and What You Are Paying For',
        body: 'The economics of small-batch production are unavoidably more expensive per unit than industrial production. Higher-quality raw materials cost more. Labour costs are not spread across millions of units. Setup costs per batch are higher. The perfumer\'s time — choosing, blending, testing, adjusting — is a genuine cost that is embedded in every bottle. When you buy an artisan parfum, you are paying for all of this. You are also paying for the absence of compromises: no ingredient substitutions for cost reasons, no abbreviated processes, no corner-cutting that would compromise the integrity of the formula.'
      },
      {
        heading: 'Ethereal Charm\'s Commitment to Small-Batch Craft',
        body: 'Ethereal Charm is produced in small batches in London, personally overseen by our founder. This is not an affectation — it is the only way to produce what we want to produce. We source ingredients based on quality rather than commodity pricing. We do not abbreviate our production processes. We do not substitute materials when better alternatives cost more. The result is a fragrance that performs differently from a mass-market product — not louder, not more aggressive, but with more depth, more character, and more endurance. It is a fragrance made the way all fragrance was once made: by someone who cares deeply about what ends up in the bottle.'
      }
    ]
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
