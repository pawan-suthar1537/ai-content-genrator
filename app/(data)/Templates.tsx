export default [
  {
    name: "BLog TItle",
    desc: "This is a blog title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3433/3433033.png",
    aiprompt:
      "give me 5 blog topic idea in bullet wise only based on given niche and outline topic  and give me result in rich text editor",
    slug: "genrate-blog-title",
    form: [
      {
        label: "enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content Generator",
    desc: "Generate blog content based on a given topic and outline",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3433/3433033.png",
    aiprompt:
      "generate detailed blog content based on the given topic and outline. Provide the content in rich text format.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Generate blog topic ideas based on a given niche",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/3433/3433033.png",
    aiprompt:
      "give me 10 blog topic ideas in bullet points based on the given niche",
    slug: "generate-blog-topic-ideas",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Generate Instagram hashtags based on a given topic",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733558.png",
    aiprompt: "generate relevant Instagram hashtags based on the given topic",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter your topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Description",
    desc: "Rewrite a given description to improve clarity and engagement",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/10226/10226406.png",
    aiprompt:
      "rewrite the given description to make it more engaging and clear",
    slug: "rewrite-description",
    form: [
      {
        label: "Enter description to rewrite",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    desc: "Generate a YouTube video description based on a given video title and content",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiprompt:
      "generate a YouTube video description based on the given video title and content",
    slug: "generate-youtube-description",
    form: [
      {
        label: "Enter your video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter video content",
        field: "textarea",
        name: "content",
      },
    ],
  },
];
