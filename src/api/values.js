const values = [
  {
    name: "Quality",
    input_name: "quality",
    option: ["720p", "1080p", "2160p", "3D"],
  },
  {
    name: "Genre",
    input_name: "genre",
    option: [
      "action",
      "adventure",
      "animation",
      "biography",
      "comedy",
      "crime",
      "documentary",
      "drama",
      "family",
      "fantasy",
      "history",
      "horror",
      "music",
      "musical",
      "mystery",
      "news",
      "romance",
      "sport",
      "thriller",
      "war",
      "western",
    ],
  },
  {
    name: "Rating",
    input_name: "rating",
    option: ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+"],
  },
  {
    name: "Order by",
    input_name: "order_by",
    option: ["latest", "oldest", "featured", "seeds", "peers", "year", "rating", "likes", "alphabetical", "downloads"],
  },
];

export { values };
