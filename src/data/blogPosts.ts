export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'benefits-of-exercise',
    title: 'Benefits of Exercise',
    date: '2022-03-14',
    author: 'Sandra',
    excerpt:
      'Sometimes it can be hard to get motivated to get active. Whenever you are struggling to get moving, do not forget all the benefits that exercise brings.',
    content: [
      'Sometimes it can be hard to get motivated to get active. It is not easy to get out for your run on a dark winter morning and sometimes it can be a struggle to make it to the gym after a long day at work. Whenever you are struggling to get moving, do not forget all the benefits that you will be getting from regular exercise.',
      'Exercise helps you control your weight by burning calories and building lean muscle. Combined with healthy eating, it is one of the most effective ways to manage your weight long term — without crash diets or fads.',
      'Regular physical activity reduces your risk of heart disease, high blood pressure, type 2 diabetes, and certain cancers. It strengthens your heart, improves circulation, and helps keep your blood pressure in a healthy range.',
      'Exercise is also one of the best things you can do for your mental health. It releases endorphins that boost your mood, reduces stress and anxiety, and can improve sleep quality. Many clients tell me they feel more confident and energised after just a few weeks of consistent training.',
      'Strength training and weight-bearing exercise help maintain bone density and muscle mass as we age, keeping you strong and independent for longer. Flexibility and balance work reduces the risk of falls and injuries.',
      'The key is finding something you enjoy and making it part of your routine. Whether that is one-on-one personal training, outdoor sessions, or working out with a friend — the best exercise is the one you will stick with. If you need help getting started, get in touch and we will build a plan that works for you.',
    ],
  },
  {
    slug: 'cardio-v-weights',
    title: 'Cardio v Weights',
    date: '2021-11-18',
    author: 'Sandra',
    excerpt:
      'It is one of the biggest questions in fitness — which is better, cardio or weights? The answer depends on your goals, but both have important roles to play.',
    content: [
      'It is one of the biggest questions in fitness — which is better, cardio or weights? Cardio (or cardiovascular training) is an aerobic activity. Running is probably the first cardio exercise that springs to mind, but cycling, swimming and fitness classes such as Zumba or step aerobics also count.',
      'Cardio is excellent for heart health, endurance, and burning calories during the session. It improves your cardiovascular system, helps manage blood pressure, and can be a great stress reliever. If your primary goal is to improve stamina or lose weight, cardio should definitely be part of your programme.',
      'Weight training (or resistance training) involves working your muscles against resistance — whether that is dumbbells, kettlebells, resistance bands, or your own body weight. It builds muscle, increases strength, and boosts your metabolism. Muscle tissue burns more calories at rest than fat tissue, so building lean muscle helps you burn more energy throughout the day.',
      'So which is better? For most people, the answer is both. A balanced programme that includes strength training and some form of cardio will give you the best overall results — improved body composition, better functional fitness, and reduced injury risk.',
      'If fat loss is your goal, strength training is often underrated. It preserves muscle while you lose fat, keeping your metabolism higher. Cardio can help create a calorie deficit, but too much cardio without strength work can lead to muscle loss.',
      'If you are training for a specific event like a 5K or triathlon, you will need more cardio. If you want to tone up, get stronger, or improve your posture, weights should be the focus. The good news is that at SJF Fitness, every session is tailored to your individual goals — we will find the right balance for you.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
