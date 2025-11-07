const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Johnson",
      role: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "Absolutely love the quality of the products! The fabric feels premium and the delivery was super quick. Will definitely shop again!",
    },
    {
      id: 2,
      name: "David Lee",
      role: "Repeat Customer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "This store has become my go-to for clothing. The prices are fair and the styles are always trendy. Customer support is top-notch too.",
    },
    {
      id: 3,
      name: "Emily Carter",
      role: "First-time Shopper",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "I was a little skeptical at first, but the T-shirt I ordered exceeded my expectations. Perfect fit and great packaging!",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {testimonials.map((t) => (
            <div key={t.id} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt={t.name}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={t.image}
                />
                <p className="leading-relaxed italic">“{t.feedback}”</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {t.name}
                </h2>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
