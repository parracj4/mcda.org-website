export const metadata = {
  title: "News | Mason County Development Authority",
  description:
    "Latest news and announcements about economic development in Mason County, West Virginia.",
};

const newsArticles = [
  {
    date: "January 31, 2026",
    title:
      "American Intelligence & Power Forms Strategic Alliance with Caterpillar and Boyd CAT to Deploy 2 Gigawatts of Dedicated Power for Hyperscale AI Infrastructure",
    category: "In the News",
    summary:
      "AIP Corp partners with Caterpillar and Boyd CAT for the Monarch Compute Campus, delivering 2 gigawatts of power generation for AI data centers in Mason County.",
    content:
      "The deal covers a 2 GW natural gas generator order for delivery between September 2026 and August 2027. The full build-out targets 8 GW of power generation using natural gas. Located along WV Route 62, the Ohio River, and CSX railroad tracks north of Point Pleasant, the campus is designed as a fully self-supplied, behind-the-meter power platform that will not increase rates for existing utility customers.",
  },
  {
    date: "January 29, 2026",
    title:
      "Fidelis New Energy and 8090 Industries Launch American Intelligence & Power Corporation",
    category: "In the News",
    summary:
      "Fidelis New Energy and 8090 Industries have launched American Intelligence & Power Corporation (AIP), with backing from LuminArx Capital Management.",
    content:
      "AIP is built around the Monarch Compute Campus in Mason County, West Virginia. More than 3 years of development went into site selection and planning.",
  },
  {
    date: "January 20, 2026",
    title:
      "Frontieras North America Closes on 183-Acre Site in West Virginia for $850M FASForm Facility",
    category: "In the News",
    summary:
      "Frontieras North America has closed on 183 riverfront acres in Mason County for its $850 million FASForm facility.",
    content:
      "The plant will be the first commercial-scale use of Frontieras' patented coal reformation technology, which converts coal into fuels, fertilizers, and industrial carbon products with zero waste and no emissions. The site offers more than a mile of Ohio River frontage for barge transport, Class I rail access via CSX, and close proximity to Appalachian coal reserves. The project is projected to generate more than 2,000 construction jobs and over 200 permanent positions. Frontieras chose Mason County over competing locations in Texas and Wyoming.",
  },
  {
    date: "January 20, 2026",
    title:
      "Governor Morrisey Announces $850 Million Frontieras North America Investment",
    category: "In the News",
    summary:
      "Governor Patrick Morrisey announced that Frontieras North America has acquired 183 acres in Mason County to construct a flagship $850 million advanced coal reformation facility.",
    content:
      '"We are excited to welcome Frontieras North America and its state-of-the-art project to Mason County," said Governor Morrisey. Matthew McKean, CEO and Co-Founder of Frontieras: "West Virginia gave us every reason to build here - natural resources, world-class logistics, and a government that understands the importance of industrial growth."',
  },
  {
    date: "October 10, 2022",
    title: "Mason County, West Virginia - A Secret That's Getting Harder to Keep",
    category: "Feature",
    summary:
      "Mason County sits at the confluence of the Ohio and Kanawha Rivers, where Appalachian beauty meets industrial strength.",
    content:
      "Point Pleasant, the county seat, has been steadily building an economic development story that is getting national attention. With major employers spanning automotive manufacturing, specialty metals, chemical production, and energy generation, Mason County offers something increasingly rare: a diverse industrial base with room to grow.",
  },
  {
    date: "September 20, 2022",
    title:
      "U.S. Department of Commerce Invests $5.3 Million in American Rescue Plan Funds for Wastewater Infrastructure",
    category: "In the News",
    summary:
      "The U.S. Economic Development Administration has awarded $5.3 million in American Rescue Plan funds to the Mason County Public Service District for critical wastewater infrastructure.",
    content:
      "The investment supports manufacturing growth in the region, with the infrastructure expected to help create 800 jobs and generate $2.7 billion in private investment.",
  },
  {
    date: "April 13, 2022",
    title:
      "Frontieras North America Selects West Virginia for Site of Its First FASForm Plant",
    category: "In the News",
    summary:
      "Frontieras North America has selected Mason County, West Virginia as the site for its inaugural FASForm plant.",
    content:
      "The facility will have processing capacity of 2.7 million tons of coal annually. The project is projected to create approximately 500 positions.",
  },
  {
    date: "January 12, 2022",
    title:
      "Nucor Selects West Virginia as Location for New, State-of-the-Art Sheet Mill",
    category: "In the News",
    summary:
      "Nucor Corporation has announced it will build its new sheet mill in Mason County, West Virginia, a record investment exceeding $2.7 billion.",
    content:
      'It is the largest private investment in West Virginia history and the biggest single investment Nucor has ever made. When fully operational, the new mill will employ approximately 800 full-time teammates, with construction creating an additional 1,000 jobs. The mill will have the capacity to produce up to 3 million tons of sheet steel per year. "We are thrilled to make this significant investment in West Virginia and enhance our presence in this important region," said Leon Topalian, President and CEO of Nucor Corporation.',
  },
];

const categoryColors: Record<string, string> = {
  "In the News": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Feature: "bg-gold/20 text-gold border-gold/30",
};

export default function News() {
  return (
    <main className="bg-navy">
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mb-6">
              News
            </h1>
            <p className="text-xl text-gold-light">
              Latest news and announcements about economic development in Mason County.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            {newsArticles.map((article, index) => (
              <article
                key={index}
                className="bg-slate/50 border border-gold/20 rounded-xl overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm border ${
                        categoryColors[article.category]
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-cream/50 text-sm">{article.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl sm:text-2xl text-cream mb-4">
                    {article.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-gold mb-4">{article.summary}</p>

                  {/* Content */}
                  <p className="text-cream/70">{article.content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-6">
            Stay Updated
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact us to be added to our mailing list for the latest economic
            development news.
          </p>
          <a
            href="/about/contact"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
