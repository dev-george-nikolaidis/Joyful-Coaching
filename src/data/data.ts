import { calculateAppointmentTime } from "../utils/helpers";

export const benefits = [
	{
		title: "Clarity and Goal Setting",
		body: `In my life coaching practice, I help my clients gain clarity about their life purpose, values, and goals. I guide them in setting clear and achievable objectives.`,
	},
	{
		title: "Personal Growth",
		body: `In my coaching sessions, clients undergo personal development, leading to increased self-awareness and improved self-confidence. Together, we work on overcoming self-limiting beliefs and nurturing a growth mindset.`,
	},
	{
		title: "Accountability",
		body: "I provide a structure for accountability, helping clients stay on track and take consistent action towards their goals.",
		// icon:<GoGoal/>
	},
	{
		title: "Enhanced Communication",
		body: "I focus on enhancing communication skills to assist clients in building better relationships with family, friends, and colleagues. ",
		// icon:<GoGoal/>
	},
	{
		title: "Stress Management",
		body: " I teach clients effective stress management techniques, which in turn reduce anxiety and enhance their overall well-being. ",
		// icon:<GoGoal/>
	},
	{
		title: "Balanced Life",
		body:
			" In my role as a life coach, I assist clients in creating a healthy work-life balance, which reduces the risk of burnout and empowers them to lead a more fulfilling life.",
		// icon:<GoGoal/>
	},
];

export const services = [
	{
		title: "Personalized Guidance",
		body: "I offer highly personalized coaching sessions tailored to your unique needs and goals, ensuring you receive guidance designed specifically for your situation.",
	},
	{
		title: "Goal Achievement",
		body:
			"My coaching services are aimed at helping you set and achieve your goals, whether they relate to personal growth, career development, or life transitions. I understand that defining and working toward your objectives can be challenging, and I'm here to help you stay on track.",
	},
	{
		title: "Overcoming Self-Limiting Beliefs",
		body:
			"Many individuals struggle with self-doubt and limiting beliefs. My coaching approach focuses on identifying and overcoming these barriers, empowering you to build self-confidence and a positive self-image.",
	},
	{
		title: "Enhanced Work-Life Balance",
		body: `I work with you to create a healthy work-life balance, reducing stress and burnout. My guidance will help you improve your time management skills and prioritize self-care.
		`,
	},
	{
		title: "Improved Communication and Relationships",
		body: `My coaching often leads to improved communication skills, aiding you in building better relationships with family, friends, and colleagues. This can be especially valuable if you're facing relationship challenges or interpersonal conflicts.
		`,
	},
	{
		title: "Career Advancement",
		body: `My services can benefit individuals seeking career growth or transition. I offer strategies for advancing in your current job, making successful career changes, or even pursuing entrepreneurship.
		`,
	},
	{
		title: "Stress Management",
		body: `Many clients struggle with stress and anxiety. I'll equip you with effective stress management techniques, helping you reduce anxiety and improve your overall well-being.
		`,
	},
	{
		title: "Positive Mindset and Resilience",
		body: `My coaching emphasizes positive psychology principles, fostering a more optimistic outlook and building resilience in the face of life's challenges.
		`,
	},
	{
		title: "Accountability and Consistency",
		body: `You can count on me for accountability and consistency in your pursuit of personal development and goal achievement. My structured approach will keep you motivated and on track.
		`,
	},
	{
		title: "Increased Self-Awareness",
		body: `Through my coaching, you'll develop a deeper understanding of yourself, your values, and your life purpose, leading to greater self-awareness and self-discovery.
		`,
	},
	{
		title: "Optimized Decision-Making",
		body: `My guidance improves your decision-making skills, enabling you to make more informed and positive life choices.`,
	},
];

export const myServices = [
	{
		id: 0,
		title: "1:1 Coaching",
		icon: "http://127.0.0.1:5173/assets/book.svg",
		text:
			"During our one-to-one coaching sessions, we will delve deep into your current situation, explore your strengths and weaknesses, and identify any limiting beliefs or obstacles that may be holding you back ,and develop actionable strategies to overcome challenges and achieve success.",
	},
	{
		id: 1,
		title: "Consultation",
		icon: "http://127.0.0.1:5173/assets/message.svg",
		text:
			"Consultation is a one-on-one session where you meet with a coach to discuss your goals, challenges, and aspirations. The coach will listen to your concerns, ask questions to gain clarity, and provide guidance and support to help you achieve your desired outcome",
	},
	{
		id: 2,
		title: "Guidance Sessions",
		icon: "http://127.0.0.1:5173/assets/group.svg",
		text:
			"Guidance sessions support in various aspects of their lives. It entails having meaningful discussions, actively listening to their concerns, and offering valuable insights and strategies to help them overcome challenges and achieve their goals.",
	},
];

export const testimonials = [
	{
		id: 0,
		name: "Petr",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/petr.png",
		job: "Photographer",
		text:
			"My experience with my live coach has been transformative. Their expert guidance and unwavering support have empowered me to overcome obstacles and achieve my goals. Their compassionate and insightful approach truly made a difference in my life. I am grateful for their wisdom and encouragement, which have been instrumental in my personal growth journey.",
		rate: 4.5,
	},
	{
		id: 1,
		name: "Olivia",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/olivia.png",
		job: "Photographer",
		text:
			"I have had the privilege of experiencing live coaching sessions and I must say, it has been an incredibly transformative and empowering journey. The guidance and support provided by the live coach have been nothing short of exceptional. Their expertise and ability to ask thought-provoking questions have helped me gain valuable insights and clarity in various aspects of my life. ",
		rate: 4,
	},

	{
		id: 2,
		name: "Hana",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/tsu.png",
		job: "Photographer",
		text:
			"Natalia has been a game-changer in my life! Her coaching has empowered me to overcome obstacles, set clear goals, and tap into my full potential. Her unwavering support and guidance have transformed my mindset and life trajectory. Natalia is a true catalyst for personal growth and success!",
		rate: 4.5,
	},
	{
		id: 3,
		name: "Hazel",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/hazel.png",
		job: "Doctor",
		text:
			"I am incredibly grateful for the opportunity to work with Natalia as my live coach. Her expertise, empathy, and unwavering support have been instrumental in my personal and professional growth. Natalia's ability to ask thought-provoking questions and provide insightful guidance has helped me gain clarity, overcome challenges, and achieve my goals. Her genuine care for my well-being and success shines through in every session.",
		rate: 4,
	},
	{
		id: 4,
		name: "James",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/james.png",
		job: "Photographer",
		text:
			"My live coach has been a true catalyst for my personal and professional growth. Their guidance and expertise have empowered me to overcome obstacles and achieve my goals. Their unwavering support and wisdom have been instrumental in my journey towards success and fulfillment.",
		rate: 4.5,
	},
	{
		id: 5,
		name: "David",
		urlImg: "http://127.0.0.1:5173/assets/testimonials/david.png",
		job: "Photographer",
		text:
			"Natalia has been an incredible live coach, guiding me with unwavering support and invaluable insights. Her empathetic approach and deep understanding helped me navigate challenges and discover my true potential. With her guidance, I've achieved remarkable personal growth and newfound confidence.",
		rate: 4.5,
	},
];

export const blogs = [
	{
		id: 0,
		title: "The Power of Self-Expression.",
		urlImg: "http://127.0.0.1:5173/assets/blog/exprecion.jpg",
		text: `Self-expression is a potent force that can transform our lives. It enables us to communicate our thoughts, emotions, and identity to the world. Through creative outlets, open conversations, and authentic actions, self-expression empowers us to connect with others, overcome obstacles, and ultimately lead more fulfilling lives.

		When we express ourselves, we discover our true identity. It's a journey of self-discovery, helping us understand our values and beliefs. This self-awareness forms the foundation for building healthy relationships, enhancing creativity, and finding our voice in the world.

		Creativity flourishes through self-expression. Whether it's through art, music, or the written word, we transform our inner thoughts and emotions into tangible forms that others can experience. This act of creation not only brings us joy but also deepens our connection to the world around us.

		In our relationships, self-expression is the key to understanding and being understood. It allows us to share our thoughts and feelings openly, which strengthens our connections with family, friends, and colleagues. Honest and open communication resolves conflicts more effectively and leads to a harmonious life.

		Moreover, self-expression acts as a therapeutic release. Bottling up our emotions can lead to stress and inner turmoil. When we express ourselves honestly, we release pent-up emotions, which can be incredibly liberating. It's a healthy way to cope with challenges and achieve emotional balance.

		Most importantly, self-expression empowers us. It boosts our self-confidence and reminds us that our thoughts and feelings matter. Through expression, we confront our fears, confront vulnerabilities, and grow stronger. It's a powerful path to personal growth and resilience.

		In a world that often encourages conformity, self-expression is a rebellious act. It's a testament to our uniqueness and a declaration that we won't hide our true selves. By embracing the power of self-expression, we embark on a journey of authenticity and empowerment, ultimately leading to a more enriched and purposeful life.`,
	},
	{
		id: 1,
		title: "The Power of Positivity.",
		urlImg: "http://127.0.0.1:5173/assets/blog/positive.jpg",
		text: `Positivity is a force that can transform our lives. It's more than just seeing the glass as half full; it's a mindset that opens doors to countless benefits.

		Maintaining a positive outlook enhances our overall well-being. It reduces stress, boosts our immune system, and even contributes to a longer life. When we focus on the good, we attract positive experiences and improve our mental and physical health.

		Positivity also impacts our relationships. When we radiate positivity, we become more approachable and enjoyable to be around. This enhances our social connections, creating a supportive network of friends and family.

		In challenging times, positivity is a powerful tool. It helps us adapt to change, find solutions, and overcome obstacles. A positive mindset encourages resilience and problem-solving, making it easier to navigate life's ups and downs.

		The power of positivity is not limited to personal well-being. It influences our professional success, too. Positive individuals are often more motivated, productive, and innovative. They inspire others and foster a more encouraging work environment.

		In conclusion, the power of positivity is a game-changer. It promotes a healthier, more joyful life, enriches our relationships, and equips us to overcome challenges. By embracing positivity, we unlock the door to a brighter and more fulfilling future.`,
	},
	{
		id: 2,
		title: "Passion Unleashed.",
		urlImg: "http://127.0.0.1:5173/assets/blog/passion.jpg",
		text: `Passion is a formidable force that drives us to pursue our dreams, overcome obstacles, and live a fulfilling life. When passion is unleashed, it can be a game-changer, igniting our inner fire.

		Passion is the fuel that propels us forward. It fuels our ambitions, inspires us to set audacious goals, and gives us the relentless energy to pursue them. It's the driving force behind great achievements and remarkable breakthroughs.

		When we follow our passions, we experience a profound sense of purpose. It's the compass that guides our decisions, leading us to a life aligned with our core values and desires. Passion provides clarity, helping us navigate the maze of life with confidence.

		Moreover, passion brings joy and enthusiasm to our daily activities. It transforms work into a labor of love and challenges into opportunities for growth. It's the spark that makes every moment more vibrant and meaningful.

		Passion also encourages resilience. When we're deeply passionate about something, setbacks become stepping stones, and failures become valuable lessons. We become more adaptable and determined, ready to face any adversity.

		In conclusion, passion, when unleashed, can lead to a life of purpose, joy, and resilience. It's the driving force behind our greatest accomplishments, guiding us toward a future where our inner fire burns brightly. Embrace your passions, and you'll find yourself on a journey of personal and professional fulfillment.`,
	},
	{
		id: 3,
		title: "The Healing Power of Forgiveness.",
		urlImg: "http://127.0.0.1:5173/assets/blog/forgiveness.jpg",
		text: `Forgiveness is a profound act of self-healing and empowerment. It's a journey towards inner peace, releasing the heavy burdens of resentment and anger that weigh us down.

		Forgiving others doesn't mean condoning their actions; rather, it's a decision to let go of the negative emotions that hold us captive. The act of forgiveness frees us from the past, allowing us to move forward with a lighter heart.

		One of the remarkable aspects of forgiveness is its healing power. It's known to reduce stress, lower blood pressure, and improve mental health. By releasing grudges, we create space for positivity and emotional well-being.

		Moreover, forgiveness is a liberating process. It enables us to break free from the shackles of bitterness, offering a fresh start. This renewal often leads to improved relationships, as forgiveness can mend fractured bonds and build bridges.

		Forgiving ourselves is just as crucial. It's a recognition of our imperfections and a commitment to self-improvement. By forgiving ourselves, we open the door to self-acceptance, personal growth, and inner peace.

		In conclusion, forgiveness is a transformative journey. It holds the power to heal, liberate, and bring inner peace. It's a choice to prioritize emotional well-being over holding onto past grievances. By embracing forgiveness, we pave the way for a brighter, more harmonious future.`,
	},
	{
		id: 4,
		title: `Embracing Change`,
		urlImg: "http://127.0.0.1:5173/assets/blog/change.jpg",
		text: `Change is an inevitable part of life, and it often arrives unannounced, challenging our comfort zones. Embracing change, rather than resisting it, can lead to personal growth and transformation.

		Change offers new experiences and opportunities for learning. It pushes us out of our routines and forces us to adapt. By embracing these shifts, we open the door to self-discovery and resilience.

		Embracing change is about being open to the unknown. It encourages us to let go of fear and hesitation and to see transitions as stepping stones to a better future. Change can lead us to new adventures, deeper understanding, and improved versions of ourselves.

		In times of change, we often uncover untapped potential and hidden strengths. It encourages innovation and creative problem-solving. By embracing change, we invite personal growth and create a life filled with possibilities.

		Change can be intimidating, but it's also a powerful catalyst for personal development. Embracing it is an act of courage, a step toward a brighter future. Instead of fearing change, we can choose to welcome it as a source of transformation and self-improvement.
		`,
	},
	{
		id: 5,
		title: `Clear Intentions`,
		urlImg: "http://127.0.0.1:5173/assets/blog/clear.jpg",
		text: `n the journey of life, clear intentions act as our guiding light, illuminating our path to success. When we set clear intentions, we're essentially defining our aspirations, outlining our objectives, and charting a course toward our desired destinations.

		These intentions give us a sense of purpose, serving as a constant reminder of what we're working toward. They provide the clarity needed to focus our energy and efforts on what truly matters. With clear intentions, we can bypass distractions and stay committed to our chosen course.

		One of the remarkable aspects of clear intentions is their motivational force. They infuse our actions with meaning, making it easier to stay dedicated to our goals. As we understand the "why" behind our endeavors, our commitment deepens.

		Clear intentions are not only about defining our goals; they also influence our decision-making. They help us make choices that are in alignment with our objectives, ensuring that our actions consistently serve our greater purpose.

		In the journey toward our goals, clear intentions act as our progress markers. They enable us to measure our achievements, assess our trajectory, and make necessary adjustments. With this framework, we can stay on track and keep moving forward.

		Clear intentions also foster a positive mindset. When we set our intentions, we cultivate a determined and optimistic outlook. This resilience is vital when we encounter challenges or setbacks along the way.

		Ultimately, clear intentions are the driving force behind our ability to turn dreams into reality. They provide a roadmap, an unwavering sense of direction, and the motivation needed to reach our goals. In every aspect of life, from personal to professional, clear intentions are the cornerstone of success.
		`,
	},
	{
		id: 6,
		title: `Alignment with Values`,
		urlImg: "http://127.0.0.1:5173/assets/blog/alignment.jpg",
		text: `Living in alignment with our core values is the cornerstone of a fulfilling and purpose-driven life. It's about recognizing what truly matters to us and making choices that reflect those values.

		When our actions align with our values, we experience a deep sense of authenticity and purpose. We're living in congruence with our true selves, which brings inner peace and contentment.

		Alignment with values serves as a moral compass, guiding our decisions and behaviors. It keeps us on a path where our choices are in harmony with our beliefs and principles.

		In our relationships, alignment with values is pivotal. It fosters connections with like-minded individuals and supports healthy, meaningful relationships. It's the foundation for trust and mutual understanding.

		Furthermore, living in alignment with our values is a source of motivation. When we know that our actions are rooted in what we hold dear, we're more likely to stay committed to our goals and aspirations.

		In essence, alignment with values is the key to a life filled with purpose, authenticity, and satisfaction. It enables us to make choices that resonate with our true selves and empowers us to build meaningful relationships and pursue our dreams with unwavering commitment.`,
	},
];

export const prices = [
	{
		level: "Basic",
		price: "45 €",
		service: `/For 1 session 60’ `,
		cost: 45,
		amount: 1,
	},
	{
		level: "Standard",
		price: "80 €",
		service: `/For 2 sessions  60’ each`,
		cost: 80,
		amount: 2,
	},
	{
		level: "Premium",
		price: "140 €",
		service: `/For 4 sessions  60’ each `,
		cost: 140,
		amount: 3,
	},
];

export const questions = [
	{
		question: "What is life coaching?",
		answer: ` Life coaching is a collaborative and goal-oriented process where a trained coach works with individuals to help them clarify their goals, overcome obstacles, and make positive changes in various aspects of their life, including personal, professional, and relationships.`,
	},
	{
		question: `How does life coaching work`,
		answer: `Life coaching typically involves one-on-one sessions with a coach, during which the client discusses their goals, challenges, and aspirations. The coach provides guidance, support, and accountability to help the client make positive changes in their life.
		`,
	},
	{
		question: ` What areas of life can life coaching address?`,
		answer: `Life coaching can address a wide range of areas, including personal growth, career development, relationships, stress management, goal setting, time management, and more.
		`,
	},
	{
		question: ` What if I don't have clear goals in mind?`,
		answer: `Life coaches are skilled in helping clients clarify their goals and desires. If you're uncertain about your objectives, a life coach can guide you in exploring your values and aspirations.`,
	},
	{
		question: ` Is life coaching confidential`,
		answer: `Yes, life coaching sessions are typically confidential. Coaches adhere to ethical guidelines that prioritize client privacy and the protection of personal information.`,
	},

	{
		question: ` How is life coaching different from therapy or counseling?`,
		answer: `While therapy focuses on addressing past issues and healing emotional wounds, life coaching is future-focused, concentrating on setting and achieving goals. Coaches do not diagnose or treat mental health conditions, as therapists do.`,
	},
	{
		question: `What can I expect from a life coaching session?`,
		answer: ` In a life coaching session, you can expect open and non-judgmental conversations. The coach will ask questions to help you clarify your goals, challenges, and strategies to move forward. The focus is on self-discovery and personal growth.`,
	},
	{
		question: `How long does a typical life coaching engagement last?`,
		answer: ` The duration of life coaching can vary depending on individual goals and needs. Some clients may benefit from just a few sessions, while others may choose ongoing coaching over several months to work on long-term objectives.`,
	},

	{
		question: ` Is life coaching only for people facing major life crises or transitions?`,
		answer: `No, life coaching is beneficial for individuals at various stages of life. Whether you're navigating a major transition, seeking career advancement, improving relationships, or simply wanting personal growth, a life coach can provide valuable insights, motivation, and guidance to help you achieve your goals.`,
	},
];

export const companies = [
	{ name: "Layers", urlImg: "http://127.0.0.1:5173/assets/companies/layers.svg" },
	{
		name: "Sisyphus",
		urlImg: "http://127.0.0.1:5173/assets/companies/sisyphus.svg",
	},
	{
		name: "Circooles",
		urlImg: "http://127.0.0.1:5173/assets/companies/circooles.svg",
	},
	{ name: "Catalog", urlImg: "http://127.0.0.1:5173/assets/companies/catalog.svg" },
	{ name: "Quotient", urlImg: "http://127.0.0.1:5173/assets/companies/quotient.svg" },
];

export const maxAvailableAppointments = [
	{
		id: 1,
		timeStart: "07:00",
		timeEnd: "08:00",
		appointmentTime: calculateAppointmentTime("07", "00"),
	},

	{
		id: 2,
		timeStart: "08:30",
		timeEnd: "09:30",
		appointmentTime: calculateAppointmentTime("08", "30"),
	},
	{
		id: 3,
		timeStart: "10:00",
		timeEnd: "11:00",
		appointmentTime: calculateAppointmentTime("10", "00"),
	},
	{
		id: 4,
		timeStart: "11:30",
		timeEnd: "12:30",
		appointmentTime: calculateAppointmentTime("11", "30"),
	},
	{
		id: 5,
		timeStart: "13:00",
		timeEnd: "14:00",
		appointmentTime: calculateAppointmentTime("13", "00"),
	},
	{
		id: 6,
		timeStart: "16:00",
		timeEnd: "17:00",
		appointmentTime: calculateAppointmentTime("16", "00"),
	},
];

export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
